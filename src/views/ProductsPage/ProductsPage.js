import "./ProductsPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
// import Button from "../../components/Button/AnotherButton";
import ProductsTable from "./ProductsTable/ProductsTable";
import CategoriesTable from "./CategoriesTable/CategoriesTable";

import axios from "axios";
import { baseApiUrl } from "../../services/routes";
import { useState, useEffect } from "react";

const ProductsPage= () =>
{
    const [showProducts, setShowProducts] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const ProductsClick = () => {setShowProducts(true); setShowCategory(false)}
    const CategoryClick = () => {setShowCategory(true); setShowProducts(false)}

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
            <div className="RowButtons">
                {/* <Button buttonContent="Zarządzaj produktami" />
                <Button buttonContent="Zarządzaj kategoriami" /> */}
                <button className="ProductsButton" onClick={ProductsClick}> Zarządzaj produktami </button>
                <button className="ProductsButton" onClick={CategoryClick}> Zarządzaj kategoriami </button>
            </div>
            {showProducts ? <ProductsTable products={products} /> : null }
            {showCategory ? <CategoriesTable categories={categories} elements={elements} /> : null }
        </div>
    );
}

export default ProductsPage;