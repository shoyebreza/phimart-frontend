
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import MainLayout from '../layouts/MainLayout';
import Slide from '../components/carousel/slide';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='about' element={<About/>}></Route>
            </Route>
        </Routes>
        
        
    );
};

export default AppRoutes;