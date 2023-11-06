import React, { useState, useEffect } from "react";
import Data from "../data";
import "../styles/body.css";
import { useValue } from "../itemContext";



function Body() {
  const { handleAddToCart, selectedCategories,targetRef,clickprodDetails,setAllData, allData } = useValue();
  const [filteredData, setFilteredData] = useState([]);
  const[rating,setRating] = useState(1);

  // Update the filtered data when selectedCategories change
  useEffect(() => {
    const newData = Data.filter((item) => item.sex === selectedCategories);
    setFilteredData(newData);
  }, [selectedCategories]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${selectedCategories}`)
      .then((res) => res.json())
      .then((data) => {
        const limitedData = data.products.slice(0, 5);
        setAllData(limitedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [selectedCategories]);

  


  return (
    <>
    
     <div className="heading" ref={targetRef}>
      <div>
      <h1 className="in-head">Products</h1>
      </div>
     </div>
      <div className="body-Container" >
        {allData.map((item) => (
          <div className="Card" key={item.id} onClick={() => clickprodDetails(item)}>
            <div className="Image-Container">
              <img src={item.images[0]} alt={item.name} />
            </div>
            <div className="product-Details">
              <p className="itemName">{item.title}</p>
              
              <div className="starRating">
                {Array.from({ length: item.rating }, (_, index) => (
                  <i key={index} className="fa-solid fa-star" style={{ color: '#fff700' }}></i>
                ))}
              </div>                
              <p>&#x20B9; {item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="addToCartButton"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Body;
