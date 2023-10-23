import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import '../styles/signUp.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../Components/Navbar";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            showSuccessToast("Login Successfully!"); // Show success toast
            navigate('/');
        } catch (error) {
            console.log(error);
            showErrorToast("Incorrect credentials. Please try again."); // Show error toast
        }
    }

    const showSuccessToast = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000, // Close the toast after 3 seconds
        });
    }

    const showErrorToast = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000, // Close the toast after 3 seconds
        });
    }

    return (
        <>
        <NavBar />
        <div>
            <ToastContainer />

            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="Login-form">
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button type="submit" className="Submit">Login</button>
            </form>
            <p>Need to Signup ? <Link to='/signup'>Create Account</Link></p>
        </div>
        </>
    );
}

export default Login;
