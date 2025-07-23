import axios from "axios";
import { useEffect } from "react";

const Product = () => {
        useEffect(() => {
            axios
                .get("http://127.0.0.1:8000/api/products/")
                .then((res) => console.log(res.data));
        },[]);

    return <div></div>;
    
};

export default Product;