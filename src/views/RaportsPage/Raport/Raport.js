import "./Raport.css"

const Raport = ({ raportID, raportDate }) =>
{
    return (
        <div className="RaportWrapper">
            <span className="RaportID">{raportID}</span>
            <span className="RaportDate">{raportDate}</span>
            <span className="RaportDetails">Szczegoly</span>
        </div>
    );
}

export default Raport;