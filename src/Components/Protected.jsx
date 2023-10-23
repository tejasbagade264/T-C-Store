import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
//   const token = localStorage.getItem('token');
//   console.log("chhecking token ");

//   if (!token) {
//     // If there's no token, navigate to the login page
//     console.log("Token not found ");
//     return Navigate('/login');
//   }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Protected;
