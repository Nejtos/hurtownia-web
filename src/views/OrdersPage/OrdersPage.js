import "./OrdersPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import OrdersPanel from "./OrdersPanel/OrdersPanel";
import Button from "../../components/Button/AnotherButton";

import axios from "axios";
import { baseApiUrl } from "../../services/routes";
import { useState, useEffect } from "react";

const OrdersPage= () =>
{
    const [orders, setOrders] = useState([])
    useEffect(() =>
    {
        axios.get(`${baseApiUrl}/orders`).then((response) =>
        {
            setOrders(response.data);
        });
    },[])

    return (
        <div>
            <Title />
            <Navigation />
            <div className="OrdersStatusButton">
                <Button buttonContent="Potwierdz wydanie zamówienia" />
            </div>
            <OrdersPanel orders={orders} />
        </div>
    );
}

export default OrdersPage;