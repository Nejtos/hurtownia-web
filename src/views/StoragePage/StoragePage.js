import "./StoragePage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import StoragePanel from "./StoragePanel/StoragePanel";
import AddProduct from "./components/AddProduct";

import axios from "axios";
import { baseApiUrl } from "../../services/routes";
import { useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from 'react';

const StoragePage = () => {

    const { userState } = useContext(UserContext);
    const [addProduct, setAddProduct] = useState(false)
    const addProductClick = () => { setAddProduct(true) }

    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get(`${baseApiUrl}/items`, { headers: {
            accessToken: localStorage.getItem("accessToken"),
            refreshToken: localStorage.getItem("refreshToken"),
        },}).then((response) =>
        {
            setItems(response.data); 
        });
    },[])

    return (
        <div>
            <Title />
            <Navigation />
            {(userState.role === "magazynier")
                ?<div>
                    <div className="PositionAddButton">
                        <button className="ProductsAddButton" onClick={addProductClick} > Odłóż produkt </button>
                    </div>
                    {addProduct ? <AddProduct /> : <StoragePanel items={items} />}
                </div>
                :<StoragePanel items={items} />
            }
        </div>
    );
}

export default StoragePage;