import React, { useEffect, useState } from 'react';
import apiClient from '../../services/api-client';
import ProductList from './ProductList';


const ShopPage = () => {

    const [products, setProducts] = useState([]);

    const [loading, SetLoading] = useState(false);

    useEffect(()=>{
        apiClient.get("/products")
        .then((res)=>setProducts(res.data.results))
        .catch((error) => console.log(error))
        .finally(() => SetLoading(false));
    },[]);
    return (
        <div>
            <ProductList products={products} loading={loading}/>
        </div>
    );
};

export default ShopPage;