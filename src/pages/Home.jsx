import HeroCarousel from "../components/carousel/HeroCarousel";
import Category from "../components/categories/Category";
import DiscountSection from "../components/discount/DiscountSection";
import Features from "../components/Features";
import Product from "../components/Products/Product";



const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <Features/>
            <Product/>
            <DiscountSection/>
            <Category/>
        </div>
    );
};

export default Home;