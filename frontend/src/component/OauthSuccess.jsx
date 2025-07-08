import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OauthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    console.log("Token received from URL:", token);

    if (token) {
      localStorage.setItem("token", token);
      console.log("Token stored in localStorage. Redirecting to home...");
      navigate("/");
    } else {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        navigate("/");
      } else {
        navigate("/login");
      }
    }
  }, [navigate]);

  return <div>Signing you in...</div>;
};

export default OauthSuccess;