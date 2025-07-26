import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const GitHubCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    const error = searchParams.get("error");

    // Handle cancellation by user
    if (error) {
      alert("GitHub login cancelled.");
      navigate("/login");
      return;
    }

    if (!code) {
      alert("No authorization code returned from GitHub.");
      navigate("/login");
      return;
    }

    axios.post("http://localhost:5000/github-login", { code })
      .then(res => {
        alert(res.data.message);
        // Optionally save user in localStorage here
        navigate("/"); // Redirect to homepage/dashboard
      })
      .catch(err => {
        alert("GitHub login failed");
        navigate("/login");
      });
  }, [searchParams, navigate]);

  return <p>Logging in with GitHub...</p>;
};

export default GitHubCallback;
