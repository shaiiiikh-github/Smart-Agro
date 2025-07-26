from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import requests
from email.message import EmailMessage
import smtplib
import os

app = Flask(__name__)
CORS(app)

# MongoDB setup
client = MongoClient(os.getenv("MONGO_URI"))
db = client["smart_agro"]
users_collection = db["users"]

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    print("Signup data:", data)

    existing = users_collection.find_one({'email': data['email']})
    if existing:
        return jsonify({'message': 'User already exists'}), 409

    users_collection.insert_one(data)
    return jsonify({'message': 'Signup successful'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    print("Login data:", data)

    user = users_collection.find_one({
        'username': data['username'],
        'password': data['password']
    })

    if user:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401
    
@app.route('/all-users', methods=['GET'])
def all_users():
    all_data = list(users_collection.find({}, {"_id": 0}))
    return jsonify(all_data)

@app.route('/oauth-login', methods=['POST'])
def oauth_login():
    data = request.get_json()
    user = users_collection.find_one({'email': data['email']})

    if not user:
        users_collection.insert_one(data)
        return jsonify({'message': 'User created with Google login'}), 201
    return jsonify({'message': 'Login successful via Google'}), 200

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    try:
        msg = EmailMessage()
        msg['Subject'] = f'Contact Form Message from {name}'
        msg['From'] = 'your_email@gmail.com'
        msg['To'] = 'sahil06052005@gmail.com'
        msg.set_content(f"Sender Name: {name}\nSender Email: {email}\n\nMessage:\n{message}")

        # Send the email
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login('sahil06052005@gmail.com', 'syhf vcid bwgb fyrz')  # Use Gmail App Password
        server.send_message(msg)
        server.quit()

        return jsonify({'message': 'Email sent successfully'}), 200

    except Exception as e:
        print("Error sending email:", e)
        return jsonify({'error': 'Failed to send email'}), 500


@app.route('/github-login', methods=['POST'])
def github_login():
    code = request.json.get('code')
    client_id = "Ov23liJOOg3lFqAptvuT"
    client_secret = "2416769df383864e64d10dd070d1310e8a074032"

    token_res = requests.post(
        'https://github.com/login/oauth/access_token',
        headers={"Accept": "application/json"},
        data={
            "client_id": client_id,
            "client_secret": client_secret,
            "code": code
        }
    )

    token_json = token_res.json()
    access_token = token_json.get('access_token')

    user_res = requests.get(
        'https://api.github.com/user',
        headers={'Authorization': f'token {access_token}'}
    )
    user_info = user_res.json()
    user_data = {
        'username': user_info['login'],
        'email': user_info.get('email', ''),
        'githubId': user_info['id'],
        'name': user_info['name']
    }

    existing = users_collection.find_one({'username': user_info['login']})
    if not existing:
        users_collection.insert_one(user_data)
        return jsonify({'message': 'User created via GitHub'}), 201
    return jsonify({'message': 'Login successful via GitHub'}), 200

if __name__ == '__main__':
    app.run(debug=True)
