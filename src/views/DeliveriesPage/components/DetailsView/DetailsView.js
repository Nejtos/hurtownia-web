import "./DetailsView.css"
import arrow from "../../../../icons/arrow.svg"
// import axios from "axios";
// import { baseApiUrl } from "../../../../services/routes";
// import { useState, useEffect } from "react";

const DetailsView = ({ deliveryID }) => {

    // const [reportsRows, setReportsRows] = useState([])

    // useEffect(() =>
    // {
    //     axios.get(`${baseApiUrl}/raportsrows/${baseID}`).then((response) =>
    //     {
    //         setReportsRows(response.data);
    //     });
    // },[baseID])

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
                    <div className="DetailsDeliveryWeight">Ilość [kg] </div>
                    <div className="DetailsDeliveryDate">Data ważności</div>
                    <div className="DetailsDeliveryBatchNumber">Nr partii</div>
                </div>
                <div className="DetailsDeliveryWrapper">
                    <span className="DetailDeliveryID">A</span>
                    <span className="DetailDeliveryWeight">B</span>
                    <span className="DetailDeliveryDate" >C</span>
                    <span className="DetailDeliveryBatchNumber"> D </span>
                </div>
            </div>
        </div>
    );
}

export default DetailsView;