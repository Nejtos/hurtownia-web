import "./RaportsPanel.css"
import Raport from "../Raport/Raport";

const RaportsPanel = ({raports}) => {

    return (
        <div className="RaportsPanelWrapper">
            <div className="RaportsHeaderWrapper">
                <div className="RaportsID">ID</div>
                <div className="RaportsData">Data</div>
                <div className="RaportsDetails">Szczegóły</div>
            </div>
            {raports.map((raport, key) => {
                return <Raport key={key} raportID={raport.id_raportu} raportDate={raport.data} />
            })}
        </div>
    );
}

export default RaportsPanel;