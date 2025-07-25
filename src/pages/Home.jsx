import HeroCarousel from "../components/carousel/HeroCarousel";
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
        </div>
    );
};

export default Home;