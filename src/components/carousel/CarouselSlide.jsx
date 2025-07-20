
import bgImg from "../../assets/images/banner-image-bg.jpg"

const CarouselSlide = ({title, subtitle, image}) => {
    return (
        <section className="w-full h-[650px] bg-cover bg-center flex justify-center items-center"  style={{backgroundImage:`url(${bgImg})`}}>
            <div className="flex item-center justify-between max-w-6xl px-8">
                {/* left content */}
                <div>
                    <h1 className="text-5xl font-bold text-gray-900">{title}</h1>
                    <p className="text-gray-500 my-4">{subtitle}</p>
                    <button className='btn btn-secondary px-6 py-3 rounded-full shadow-md'>Shop product</button>
                </div>

                {/*  right content */}
                <div className="w-1/2 flex justify-center">
                    <img className="max-wd-md drop-shadow-lg" src={image} alt="image" />
                </div>
            </div>
        </section>
    );
};

export default CarouselSlide;