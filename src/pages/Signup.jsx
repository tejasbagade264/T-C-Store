import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import '../styles/signUp.css'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit =async (e) =>{
       e.preventDefault();
       try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);
        const user= userCredentials.user;
        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
       } catch (error) {
        console.log(error);
       }
    }

    return(
        <div>
            <h1>Signup</h1>

            <form onSubmit={handleSubmit} className="signup-form">
                <input 
                  type="text"
                  placeholder="Name"
                  required 
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
                  />
                  
                <input 
                  type="email"
                  placeholder="Email"
                  required 
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                  />
                  
                <input 
                 type="password" 
                 placeholder="Password" 
                 required 
                 value={password}
                 onChange={(e) => {setPassword(e.target.value)}}
                 />
                 
                <button type="submit" className="Submit">Signup</button>
            </form>
            <p>Need to Signup ? <Link to ='/login'>Login</Link></p>
        </div>
    )
}

export default Signup;