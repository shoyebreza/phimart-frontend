import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home/Home';
import About from '../pages/About';
import Products from '../pages/Products/Products';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='products' element={<Products/>}></Route>
                <Route path='about' element={<About/>}></Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;