import React from "react";
import { useValue } from "../itemContext";
import '../styles/cart.css'; // Import your CSS file for styling
import NavBar from "../Components/Navbar";

const Cart = () => {
    const value = useValue();
    const { cart,total,quantity } = useValue();

    

    return (
        <>
        <NavBar />
        <div className="cart-container">
            <div className="items-container">
                <h1>Your Cart</h1>
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.images[0]} alt={item.name} className="item-image" />
                            <div className="item-details">
                                <h2>{item.title}</h2>
                                <p>Quantity: {item.qty}</p>
                                <p>Price: {item.price * item.qty} INR</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cart-summary">
                <h2>Cart Summary</h2>
                <p>Total Quantity: {quantity}</p>
                <p>Total Amount: {total} INR</p>
                <button className="proceed-button">Proceed to Payment</button>
            </div>
        </div>
        </>
    );
}

export default Cart;
