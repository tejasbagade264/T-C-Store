import React from "react";
import { useEffect } from "react";
import '../styles/category.css';
import { useState } from "react";
import CategoryImages from "../data/categoryImages";
import { useValue } from "../itemContext";


function Category(){
   
    const { CatClick,scrollToMiddle,categoryData,setcategoryData} = useValue();


    

    return(
        <>

<div className="category-container">
  
  {categoryData.map((categ, index) => (
    <div className="category" key={index} onClick={() => {CatClick(categ); scrollToMiddle();}}>
      <div className="category-image">
      <img src={CategoryImages[index]} alt={categ} /> {/* Use CategoryImages here */}
      </div>
      <h1 className="category-name">{categ} </h1>
    </div>
  ))}
</div>

        </>
    )
}

export default Category;


