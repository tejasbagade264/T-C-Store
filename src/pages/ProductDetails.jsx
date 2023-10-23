import { useParams } from 'react-router-dom';
import '../styles/productDetails.css';
import React, { useEffect, useState } from "react";
import NavBar from '../Components/Navbar';

import { useValue } from '../itemContext';

const ProductDetail = () => {
  const {handleAddToCart}=useValue();
  const [selectedSize, setSelectedSize] = useState(""); // State for selected size
  const { id } = useParams();
  const [prod, setProd] = useState(null); // Initialize to null until data is fetched

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then((data) => {
        setProd(data); // Update the prod state when data is available
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // Sample product data
  const product = {
    name: "Sample Product",
    rating: 4.5,
    sizes: ["M", "L", "XL"],
    images: [
      "h&m tee.jpeg",
      "h&m tee.jpeg",
      "h&m tee.jpeg",
      // Add more image URLs here
    ],
    reviews: [
      { user: "User1", comment: "Great product!", rating: 5 },
      { user: "User2", comment: "Nice quality.", rating: 4 },
      // Add more reviews here
    ],
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
    <NavBar />
      <div className="product-detail-container">
        <div className="product-images">
          <div className='images-boxes'>
            {prod && prod.images ? (
              prod.images.map((IMG) => (
                <img key={IMG} src={IMG} alt={prod.name} />
              ))
            ) : (
              <p>Loading images...</p>
            )}
          </div>
        </div>
      
        <div className='Details'>
          {prod ? (
            <div className="product-details">
              <h1 className="product-name">{prod.title}</h1>
              <div className="product-rating">
                Rating: {prod.rating}
                {/* You can add star rating graphics here */}
              </div>
              <div>  {prod.description}</div>
             
              <div className="product-sizes">
                Sizes: {product.sizes.map((size) => (
                  <span
                    key={size}
                    className={`size-option ${size === selectedSize ? "selected" : ""}`}
                    onClick={() => handleSizeSelection(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
              <button
                className="add-to-cart-button" onClick={() =>handleAddToCart(prod)}
                disabled={!selectedSize}
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <p>Loading product details...</p>
          )}

          <div className="product-reviews">
            <h2>Product Reviews</h2>
            {product.reviews.map((review, index) => (
              <div key={index} className="review">
                <div className="review-user">{review.user}</div>
                <div className="review-rating">Rating: {review.rating}</div>
                <div className="review-comment">{review.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
