import React, { useEffect } from "react";
import '../styles/profile.css';
import NavBar from "./Navbar";
import { useValue } from "../itemContext";

function Profile() {
  const { setCurrentPage } = useValue();
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userName = storedUser ? storedUser.displayName : 'Guest';

  useEffect(() => {
    setCurrentPage('profile');
  }, [setCurrentPage]);

  return (
    <>
      <NavBar />

      <div className="Profile-Container">
        <div className="Profile-pic-Container">
          <img src="h&m tee.jpeg" alt="Profile-Picture" />
        </div>

        <div className="Profile-Details">
          {userName ? ( // Check if userName is available
            <div className="UserDetails">
              <p className="Name">{userName}</p>
              <p>Mobile No: 9096020426</p>
              <p>EmailId: tejasbagade264@gmail.com</p>
            </div>
          ) : (
            <p>Loading...</p> // Display a loading message or handle as needed
          )}

          <div className="Address">
            <p className="Add">Address</p>
            <p>At po. Sangrampur , Dist Buldhana, </p>
            <p>444202</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
