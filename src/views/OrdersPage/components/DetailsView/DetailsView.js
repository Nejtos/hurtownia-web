import "./DetailsView.css"
import arrow from "../../../../icons/arrow.svg"
import axios from "axios";
import { baseApiUrl } from "../../../../services/routes";
import { useState, useEffect } from "react";

const DetailsView = ({ orderID }) => {

    const [ordersRows, setOrdersRows] = useState([])

    useEffect(() =>
    {
        axios.get(`${baseApiUrl}/ordersrows/${orderID}`).then((response) =>
        {
            setOrdersRows(response.data);
        });
    },[orderID])


    const handleClick = () => {
        window.location.reload(false);
    }

    return (
        <div>
            <div className="GoBackBox" onClick={handleClick} >
                <img src={arrow} alt="Left arrow" />
                <div className="GoBack">powrót</div>
            </div>
            <div className="DetailTitle" >
                Zamówienie {orderID}
            </div>
            <div className="DetailsOrderPanelWrapper" >
                <div className="DetailsOrderHeaderWrapper">
                    <div className="DetailsOrderID">ID</div>
                    <div className="DetailsOrderCategory">Kategoria </div>
                    <div className="DetailsOrderElement">Element</div>
                    <div className="DetailsOrderWeight">Ilość</div>
                </div>
                {ordersRows.map((row, key) => {
                    return <div className="DetailsOrderWrapper" key={key} >
                    <span className="DetailOrderID"> {row.id_produktu} </span>
                    <span className="DetailOrderCategory"> {row.kategoria} </span>
                    <span className="DetailOrderElement" > {row.element} </span>
                    <span className="DetailOrderWeight"> {row.ilosc} </span>
                </div>
                })}
            </div>
        </div>

    );
}

export default DetailsView;