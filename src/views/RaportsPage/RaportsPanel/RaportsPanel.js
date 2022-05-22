import "./RaportsPanel.css"
import Raport from "../Raport/Raport";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from 'react';

const RaportsPanel = ({raports}) => {

    const { userState } = useContext(UserContext);

    return (
        <div>
        {(userState.role === "kontroler jakosci")
        ?<div>
        <div className="RaportsPanelWrapper" type="selected">
            <div className="RaportsHeaderWrapper">
                <div className="RaportsID">ID</div>
                <div className="RaportsData">Data</div>
                <div className="RaportsDetails">Szczegóły</div>
            </div>
            {raports.map((raport, key) => {
                return <Raport key={key} raportID={raport.id_raportu} raportDate={raport.data} />
            })}
        </div>
        </div>
        :<div>
        <div className="RaportsPanelWrapper" type="default">
        <div className="RaportsHeaderWrapper">
            <div className="RaportsID">ID</div>
            <div className="RaportsData">Data</div>
            <div className="RaportsDetails">Szczegóły</div>
        </div>
        {raports.map((raport, key) => {
            return <Raport key={key} raportID={raport.id_raportu} raportDate={raport.data} />
        })}
        </div>
        </div>}
    </div>
    );
}

export default RaportsPanel;