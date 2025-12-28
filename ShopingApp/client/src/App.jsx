import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AdminDashboard from './pages/AdminDashboard';

function App() {
    return (
        <ShopProvider>
            <Router>
                <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                    </Routes>
                </div>
            </Router>
        </ShopProvider>
    );
}

export default App;
