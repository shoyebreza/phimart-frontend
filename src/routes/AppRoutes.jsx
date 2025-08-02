
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import MainLayout from '../layouts/MainLayout';
import Slide from '../components/carousel/CarouselSlide';
import Login from '../pages/Login';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='about' element={<About/>}></Route>
                <Route path='shop' element={<Shop/>}></Route>
                <Route path='login' element={<Login/>}></Route>
            </Route>
        </Routes>
        
        
        
    );
};

export default AppRoutes;