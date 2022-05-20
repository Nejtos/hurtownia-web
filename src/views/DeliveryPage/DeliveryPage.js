import "./DeliveryPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import DeliveryPanel from "./DeliveryPanel/DeliveryPanel";
import Button from "../../components/Button/AnotherButton";

import axios from "axios";
import { baseApiUrl } from "../../services/routes";
import { useState, useEffect } from "react";

const DeliveryPage= () =>
{
    const [deliveries, setDeliveries] = useState([])
    useEffect(() =>
    {
        axios.get(`${baseApiUrl}/dostawy`).then((response) =>
        {
            setDeliveries(response.data);
        });
    },[])

    return (
        <div>
            <Title />
            <Navigation />
            <div className="DeliveryStatusButton">
                <Button buttonContent="Potwierdz przyjęcie dostawy" />
            </div>
            <DeliveryPanel deliveries={deliveries}/>
        </div>
    );
}

export default DeliveryPage;