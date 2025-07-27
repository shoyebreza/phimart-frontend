import React, { useEffect, useState } from 'react';
import apiClient from '../../services/api-client';
import ProductList from './ProductList';
import Pagination from './Pagination';


const ShopPage = () => {

    const [products, setProducts] = useState([]);
    const [loading, SetLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(()=>{
        fetchProducts();
    },[]);

    const fetchProducts = () =>{
        apiClient.get("/products")
        .then((res)=>{
            setProducts(res.data.results)
            setTotalPages(Math.ceil(res.data.count/ res.data.results.length));
        })
        .catch((error) => console.log(error))
        .finally(() => SetLoading(false));
    }
    return (
        <div>
            <ProductList products={products} loading={loading}/>
            <Pagination totalPages={totalPages} currentPage={currentPage}  handlePageChange={setCurrentPage}/>
        </div>
    );
};

export default ShopPage;