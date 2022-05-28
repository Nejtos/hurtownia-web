import "./ProductsTable.css"
// import Button from "../../../components/Button/AnotherButton";
import Product from "../Product/Product";
import CreateProduct from "../components/ManageProducts/Create/Create";
import DeleteProduct from "../components/ManageProducts/Delete/DeleteProduct";
import EditProduct from "../components/ManageProducts/Edit/Edit";
import { UserContext } from "../../../contexts/UserContext";
import { useContext, useState } from 'react';

const ProductsTable = ({ products }) => {

    const { userState } = useContext(UserContext);
    const [createNewProduct, setcreateNewProduct] = useState(false)
    const createProductClick = () => { setcreateNewProduct(true); setEdit(false); setDelete(false); }
    const [edit, setEdit] = useState(false)
    const editClick = () => { setEdit(true); setcreateNewProduct(false); setDelete(false); }
    const [deleteData, setDelete] = useState(false)
    const deleteClick = () => { setDelete(true); setEdit(false); setcreateNewProduct(false); }

    const handleOnClick = () => {
        let notification = document.querySelector('.ProductsPanelWrapper');
        notification.style.display = "none";
        createProductClick();
    }

    const handleOnClickEdit = () => {
        let notification = document.querySelector('.ProductsPanelWrapper');
        notification.style.display = "none";
        editClick();
    }

    const handleOnClickDel = () => {
        let notification = document.querySelector('.ProductsPanelWrapper');
        notification.style.display = "none";
        deleteClick();
    }

    return (
        <div>
            {(userState.role === "magazynier" || userState.role === "kontroler jakosci")
                ? <div>
                    <div className="ProductsPanelWrapper" type="selected">
                        <div className="ProductsHeaderWrapper">
                            <div className="ProductsID">ID produktu</div>
                            <div className="ProductsCategory">Kategoria</div>
                            <div className="ProductsElement">Element</div>
                            <div className="ProductsProducent">Producent</div>
                            <div className="ProductsNumber">Nr partii</div>
                            <div className="ProductsDate">Data ważności</div>
                            <div className="ProductsWeight">Ilość [kg]</div>
                        </div>
                        {products.map((product, key) => {
                            return <Product key={key} productID={product.id_produktu} productCategory={product.nazwa_kategorii} productElement={product.nazwa_elementu} productProducent={product.nazwa_producenta} productNumber={product.nr_partii} productDate={product.data_waznosci} productWeight={product.ilosc} />
                        })}
                    </div>
                </div>
                : <div>
                    <div className="RowProductsButtons">
                        <button className="ProductsButton" onClick={handleOnClick} > Dodaj produkt </button>
                        <button className="ProductsButton" onClick={handleOnClickEdit}> Edytuj </button>
                        <button className="ProductsButton" onClick={handleOnClickDel}> Usuń </button>
                    </div>
                    <div className="ProductsPanelWrapper" type="default">
                        <div className="ProductsHeaderWrapper">
                            <div className="ProductsID">ID produktu</div>
                            <div className="ProductsCategory">Kategoria</div>
                            <div className="ProductsElement">Element</div>
                            <div className="ProductsProducent">Producent</div>
                            <div className="ProductsNumber">Nr partii</div>
                            <div className="ProductsDate">Data ważności</div>
                            <div className="ProductsWeight">Ilość [kg]</div>
                        </div>
                        {products.map((product, key) => {
                            return <Product key={key} productID={product.id_produktu} productCategory={product.nazwa_kategorii} productElement={product.nazwa_elementu} productProducent={product.nazwa_producenta} productNumber={product.nr_partii} productDate={product.data_waznosci} productWeight={product.ilosc} />
                        })}
                    </div>
                </div>}
            {createNewProduct ? <CreateProduct /> : null}
            {edit? <EditProduct products={products} /> : null}
            {deleteData ? <DeleteProduct products={products} /> : null}
        </div>
    );
}

export default ProductsTable;