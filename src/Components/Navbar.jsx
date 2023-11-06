import React from "react";
import styles from '../styles/navBar.module.css';
import { useNavigate } from "react-router-dom";
import { useValue } from "../itemContext";
import Filter from "./filter";
import { useEffect } from "react";


function NavBar() {
  const { handleCart, handleLogOut, currentPage, clickHome ,setCurrentPage,GoToProfile} = useValue();
  const navigate = useNavigate();
  

  return (
    
    <div className={styles.ContainerNavBar}>
      <div className={styles.Logo} onClick={() => clickHome()}>
        <img src="t&C.png" alt="Logo" />
      </div>

      
      
      {currentPage === 'home' && (
        <>
          <div className={styles.SearchBar}>
            <input type="text" placeholder="Search" />
          </div>
          <Filter />
        </>
      )}

      {currentPage !== 'SignIn' && currentPage !== 'Login' && (
        <div className={styles.Profile}>
          <div className={styles.cartlogo} onClick={handleCart}>
            <img src="cartlogo.png" />
          </div>
          <div className={styles.User} onClick={ GoToProfile}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcOXXT2OaUiBh5JbegxhZ9aJLEWMvmio3jQ&usqp=CAU" alt="User" />
          </div>
          <button onClick={handleLogOut}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
