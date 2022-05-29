import "./RaportsPanel.css"
import DetailsView from "../components/DetailsView/DetailsView";
import { UserContext } from "../../../contexts/UserContext";
import { useState, useContext } from 'react';

const RaportsPanel = ({ raports }) => {

    const { userState } = useContext(UserContext);
    const [showDetails, setShowDetails] = useState(false);
    const [ID, setRaportID] = useState("");
    const [baseID, setBaseID] = useState("");

    const detailsClick = (ID, baseID) => {
        let panel = document.querySelector('.RaportsPanelWrapper');
        panel.style.display = "none";
        if (userState.role === "kontroler jakosci") {
            let button = document.querySelector('.AddRaportButton');
            button.style.display = "none";
        }
        setShowDetails(true);
        setRaportID(ID);
        setBaseID(baseID);
    }

    return (
        <div>
            {(userState.role === "kontroler jakosci")
                ? <div>
                    <div className="RaportsPanelWrapper" type="selected">
                        <div className="RaportsHeaderWrapper">
                            <div className="RaportsID">ID</div>
                            <div className="RaportsData">Data</div>
                            <div className="RaportsDetails">Szczegóły</div>
                        </div>
                        {raports.map((raport, key) => {
                            return <div className="RaportWrapper" key={key} >
                                <span className="RaportID">{raport.id_raportu}</span>
                                <span className="RaportDate">{raport.data}</span>
                                <span className="RaportDetails" onClick={() => detailsClick(raport.id_raportu, raport.id)} > Szczegóły </span>
                                {/* <Raport key={key} raportID={raport.id_raportu} raportDate={raport.data} /> */}
                            </div>
                        })}
                    </div>
                </div>
                : <div>
                    <div className="RaportsPanelWrapper" type="default">
                        <div className="RaportsHeaderWrapper">
                            <div className="RaportsID">ID</div>
                            <div className="RaportsData">Data</div>
                            <div className="RaportsDetails">Szczegóły</div>
                        </div>
                        {raports.map((raport, key) => {
                            return <div className="RaportWrapper" key={key} >
                                <span className="RaportID">{raport.id_raportu}</span>
                                <span className="RaportDate">{raport.data}</span>
                                <span className="RaportDetails" onClick={() => detailsClick(raport.id_raportu, raport.id)} > Szczegóły </span>
                                {/* <Raport key={key} raportID={raport.id_raportu} raportDate={raport.data} /> */}
                            </div>
                        })}
                    </div>
                </div>
            }
            {showDetails ? <DetailsView raportID={ID} baseID={baseID} /> : null}
        </div>
    );
}

export default RaportsPanel;