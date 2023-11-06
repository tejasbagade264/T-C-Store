import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ZoomingLoader from "./loader";

const Protected = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      // If there's no user, navigate to the login page
      navigate('/login');
    } else {
      // Simulate an API call (e.g., checking user authentication) with a setTimeout
      setTimeout(() => {
        setIsLoading(false); // Set isLoading to false after authentication is checked
      }, 2000); // Adjust the timeout as needed
    }
  }, [navigate, user]);

  return (
    <div>
     <Outlet />
    </div>
  );
}

export default Protected;
