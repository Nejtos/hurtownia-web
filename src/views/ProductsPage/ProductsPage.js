import "./ProductsPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import ProductsTable from "./ProductsTable/ProductsTable";
import CategoriesTable from "./CategoriesTable/CategoriesTable";

import axios from "axios";
import { baseApiUrl } from "../../services/routes";
import { useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from 'react';

const ProductsPage= () =>
{
    const { userState } = useContext(UserContext);
    const [showProducts, setShowProducts] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const ProductsClick = () => {setShowProducts(true); setShowCategory(false) }
    const CategoryClick = () => {setShowCategory(true); setShowProducts(false) }

    const [products, setProducts] = useState([])
    useEffect(() =>
    {
        axios.get(`${baseApiUrl}/products`, { headers: {
            accessToken: localStorage.getItem("accessToken"),
            refreshToken: localStorage.getItem("refreshToken"),
        },}).then((response) =>
        {
            setProducts(response.data); 
        });
    },[])

    const [categories, setCategories] = useState([])
    useEffect(() =>
    {
        axios.get(`${baseApiUrl}/categories`, { headers: {
            accessToken: localStorage.getItem("accessToken"),
            refreshToken: localStorage.getItem("refreshToken"),
        },}).then((response) =>
        {
            setCategories(response.data); 
        });
    },[])

    const [elements, setElements] = useState([])
    useEffect(() =>
    {
        axios.get(`${baseApiUrl}/elements`, { headers: {
            accessToken: localStorage.getItem("accessToken"),
            refreshToken: localStorage.getItem("refreshToken"),
        },}).then((response) =>
        {
            setElements(response.data); 
        });
    },[])

    return (
        <div>
            <Title />
            <Navigation />
            {(userState.role === "magazynier" || userState.role === "kontroler jakosci") ? <ProductsTable products={products} />
            :<div>
                <div className="RowButtons">
                    <button className="ProductsButton" onClick={ProductsClick}> Zarz??dzaj produktami </button>
                    <button className="ProductsButton" onClick={CategoryClick}> Zarz??dzaj kategoriami </button>
                </div>
                {showProducts ? <ProductsTable products={products} /> : null }
                {showCategory ? <CategoriesTable categories={categories} elements={elements} /> : null }
            </div>}
        </div>
    );
}

export default ProductsPage;