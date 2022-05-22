import "./StoragePage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import StoragePanel from "./StoragePanel/StoragePanel";
import AddProduct from "./components/AddProduct";
import { useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from 'react';

const StoragePage = () => {

    const { userState } = useContext(UserContext);
    const [addProduct, setAddProduct] = useState(false)
    const addProductClick = () => { setAddProduct(true) }

    return (
        <div>
            <Title />
            <Navigation />
            {(userState.role === "magazynier")
                ?<div>
                    <div className="PositionAddButton">
                        <button className="AddProductButton" onClick={addProductClick} > Odłóż produkt </button>
                    </div>
                    {addProduct ? <AddProduct /> : <StoragePanel />}
                </div>
                :<StoragePanel />
            }
        </div>
    );
}

export default StoragePage;