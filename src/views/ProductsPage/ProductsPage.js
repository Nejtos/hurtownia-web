import "./ProductsPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
// import Button from "../../components/Button/AnotherButton";
import ProductsTable from "./ProductsTable/ProductsTable";
import CategoryTable from "./CategoryTable/CategoryTable";
import { useState } from "react";

const ProductsPage= () =>
{
    const [showProducts, setShowProducts] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const ProductsClick = () => {setShowProducts(true); setShowCategory(false)}
    const CategoryClick = () => {setShowCategory(true); setShowProducts(false)}
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
            {showProducts ? <ProductsTable /> : null }
            {showCategory ? <CategoryTable /> : null }
        </div>
    );
}

export default ProductsPage;