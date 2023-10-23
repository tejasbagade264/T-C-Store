import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomItemContext from './itemContext';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Protected from './Components/Protected';
import Cart from './Components/cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <CustomItemContext> {/* This should be inside the Router */}
        <Routes>
          <Route path="/"
            element={<Protected />}>
            <Route index element={<Home />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/:id/productDetails" element={<ProductDetails />} />
          </Route>
        </Routes>
      </CustomItemContext>
    </Router>
  );
}

export default App;
