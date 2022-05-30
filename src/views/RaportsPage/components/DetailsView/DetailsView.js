import "./DetailsView.css"
import arrow from "../../../../icons/arrow.svg"
import axios from "axios";
import { baseApiUrl } from "../../../../services/routes";
import { useState, useEffect } from "react";

const DetailsView = ({ raportID, baseID }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${baseApiUrl}/raportsrows/${baseID}`).then((response) => {
            setData(response.data);
        });
    }, [baseID])

    const handleClick = () => {
        window.location.reload(false);
    }

    console.log(data);

    return (
        <div>
            <div className="GoBackBox" onClick={handleClick} >
                <img src={arrow} alt="Left arrow" />
                <div className="GoBack">powrót</div>
            </div>
            <div className="DetailTitle" >
                Raport {raportID}
            </div>
            <div className="DetailsRaportPanelWrapper" >
                <div className="DetailsRaportHeaderWrapper">
                    <div className="DetailsRaportID">ID</div>
                    <div className="DetailsRaportWeight">Ilość [kg] </div>
                    <div className="DetailsRaportDate">Data ważności</div>
                    <div className="DetailsRaportBatchNumber">Nr partii</div>
                    <div className="DetailsRaportDescription">Opis</div>
                </div>
                {data.map((e, key) => {
                    return <div className="DetailsRaportWrapper" key={key}>
                        <span className="DetailRaportID">{e.id_produktu}</span>
                        <span className="DetailRaportWeight">{e.ilosc}</span>
                        <span className="DetailRaportDate" >{e.data_waznosci}</span>
                        <span className="DetailRaportBatchNumber">{e.nr_partii}</span>
                        <span className="DetailRaportDescription"> {e.opis} </span>
                    </div>
                })}
            </div>
        </div>
    );
}

export default DetailsView;