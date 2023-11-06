import React, { useEffect, useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Body from "../Components/body";
import '../styles/home.css';
import NavBar from "../Components/Navbar";
import ProductDetail from "./ProductDetails";
import Corousal from "../Components/corousal";
import Profile from "../Components/profile";
import Category from "../Components/category";
import { useValue } from "../itemContext";
import ZoomingLoader from "../Components/loader";
import AboutPage from "../Components/aboutUs";



const Home = () => {
 
  const targetRef = useRef(null);
  const {setCurrentPage,currentPage}=useValue();

  useEffect(() => {
    setCurrentPage('home');
  }, []);

  return (
    <>
    <div>
    
      {/* <button onClick={handleLogOut}>LogOut</button> */}
    </div>
    <div className="Components">
    
    <div className="navbar">
    <NavBar />
    </div>
    <div className="filter">
    {/* <Filter /> */}
    </div>
    <div className="corousal">
    <Corousal />
    </div>
    <div>
      <Category />
    </div>
   <div className="body">
    <Body  ref={targetRef}/>
   </div>

   
  

   

   
    
    
    
    </div>
   
    </>
  )
}

export default Home;
