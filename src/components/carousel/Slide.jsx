import book from "../../assets/images/book.png"
import bgImg from "../../assets/images/banner-image-bg.jpg"

const Slide = () => {
    return (
        <section className="w-full h-[650px]">
            <div className="flex item-center justify-between max-w-6xl px-8" style={{backgroundImage:`url(${bgImg})`}}>
                {/* left content */}
                <div>
                    <h1 className="text-5xl font-bold text-gray-900">The fine print book collection</h1>
                    <p className="text-gray-500 my-4">This is heading </p>
                    <button className='btn btn-secondary px-6 py-3 rounded-full shadow-md'>Shop product</button>
                </div>

                {/*  right content */}
                <div className="w-1/2 flex justify-center">
                    <img className="max-wd-md drop-shadow-lg" src={book} alt="image" />
                </div>
            </div>
        </section>
    );
};

export default Slide;