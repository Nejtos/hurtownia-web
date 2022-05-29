import "./DetailsView.css"
import arrow from "../../../../icons/arrow.svg"
// import axios from "axios";
// import { baseApiUrl } from "../../../../services/routes";
// import { useState, useEffect } from "react";

const DetailsView = ({ orderID }) => {

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
                Zamówienie {orderID}
            </div>
            <div className="DetailsOrderPanelWrapper" >
                <div className="DetailsOrderHeaderWrapper">
                    <div className="DetailsOrderID">ID</div>
                    <div className="DetailsOrderCategory">Kategoria </div>
                    <div className="DetailsOrderElement">Element</div>
                    <div className="DetailsOrderWeight">Ilość</div>
                </div>
                <div className="DetailsOrderWrapper">
                    <span className="DetailOrderID">A</span>
                    <span className="DetailOrderCategory">B</span>
                    <span className="DetailOrderElement" >C</span>
                    <span className="DetailOrderWeight"> D </span>
                </div>
            </div>
        </div>

    );
}

export default DetailsView;