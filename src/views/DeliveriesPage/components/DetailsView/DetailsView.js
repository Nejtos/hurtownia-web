import "./DetailsView.css"
import arrow from "../../../../icons/arrow.svg"
import axios from "axios";
import { baseApiUrl } from "../../../../services/routes";
import { useState, useEffect } from "react";

const DetailsView = ({ deliveryID }) => {

    const [deliveriesRows, setDeliveriesRows] = useState([])

    useEffect(() => {
        axios.get(`${baseApiUrl}/deliveriesrows/${deliveryID}`).then((response) => {
            setDeliveriesRows(response.data);
        });
    }, [deliveryID])

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
                Dostawa {deliveryID}
            </div>
            <div className="DetailsDeliveryPanelWrapper" >
                <div className="DetailsDeliveryHeaderWrapper">
                    <div className="DetailsDeliveryID">ID</div>
                    <div className="DetailsDeliveryWeight">Ilość [kg]</div>
                    <div className="DetailsDeliveryDate">Data ważności</div>
                    <div className="DetailsDeliveryBatchNumber">Nr partii</div>
                </div>
                {deliveriesRows.map((row, key) => {
                    return <div className="DetailsDeliveryWrapper" key={key} >
                        <span className="DetailDeliveryID"> {row.id_produktu} </span>
                        <span className="DetailDeliveryWeight"> {row.ilosc} </span>
                        <span className="DetailDeliveryDate" > {row.data_waznosci} </span>
                        <span className="DetailDeliveryBatchNumber"> {row.nr_partii} </span>
                    </div>
                })}
            </div>
        </div>
    );
}

export default DetailsView;