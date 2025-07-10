import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OauthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
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