import "./OrdersPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import OrdersPanel from "./OrdersPanel/OrdersPanel";
import axios from "axios";
import { baseApiUrl } from "../../services/routes";
import { useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from 'react';

const OrdersPage = () => {
    
    const { userState } = useContext(UserContext);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get(`${baseApiUrl}/orders`).then((response) => {
            setOrders(response.data);
        });
    }, [])

    return (
        <div>
            <Title />
            <Navigation />
            {(userState.role === "magazynier") ? <OrdersPanel orders={orders} />
                : <div>
                    <div className="OrdersStatusButton">
                        <button className="AnotherExteriorButtonBox">
                            <div className="AnotherButtonBox" onClick={() => window.location.reload(false)}>
                                <label> {"Potwierdz wydanie zamówienia"} </label>
                            </div>
                        </button>
                    </div>
                    <OrdersPanel orders={orders} />
                </div>}
        </div>
    );
}

export default OrdersPage;