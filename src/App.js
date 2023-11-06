import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomItemContext from './itemContext';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Protected from './Components/Protected';
import Cart from './Components/cart';
import ProductDetails from './pages/ProductDetails';
import Profile from './Components/profile';

function App() {
  return (
    <Router>
      <CustomItemContext>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Protected />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:id/productDetails" element={<ProductDetails />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
        </Routes>
      </CustomItemContext>
    </Router>
  );
}

export default App;
