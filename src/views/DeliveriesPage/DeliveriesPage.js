import "./DeliveriesPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import DeliveriesPanel from "./DeliveriesPanel/DeliveriesPanel";

import axios from "axios";
import { baseApiUrl } from "../../services/routes";
import { useState, useEffect } from "react";

const DeliveriesPage= () =>
{
    const [deliveries, setDeliveries] = useState([])
    
    useEffect(() =>
    {
        axios.get(`${baseApiUrl}/deliveries`).then((response) =>
        {
            setDeliveries(response.data);
        });
    },[])

    return (
        <div>
            <Title />
            <Navigation />
            <div className="DeliveriesStatusButton">
                <button className="AnotherExteriorButtonBox">
                    <div className="AnotherButtonBox" onClick={() => window.location.reload(false)}>
                        <label> {"Potwierdz przyjęcie dostawy"} </label>
                    </div>
                </button>
            </div>
            <DeliveriesPanel deliveries={deliveries}/>
        </div>
    );
}

export default DeliveriesPage;