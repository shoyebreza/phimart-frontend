import book from "../../assets/images/book.png"

const Slide = () => {
    return (
        <div className="flex item-center justify-between max-w-6xl h-[650px] px-8">
            {/* left content */}
            <div>
                <h1 className="">The fine print book collection</h1>
                <p>This is heading </p>
                <button className='btn btn-secondary'>Shop product</button>
            </div>

           {/*  right content */}
            <div>
                <img src={book} alt="image" />
            </div>
        </div>
    );
};

export default Slide;