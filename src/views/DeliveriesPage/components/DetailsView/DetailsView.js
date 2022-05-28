import "./DetailsView.css"
import arrow from "../../../../icons/arrow.svg"

const DetailsView = ({ marker, deliveryID }) => {

    const handleClick = () => {
        window.location.reload(false);
    }

    return (
        <div>
            {(() => {
                switch (marker) {
                    case 'dostawa':
                        return <div>
                            <div className="GoBackBox" onClick={ handleClick } >
                                <img src={arrow} alt="Left arrow" />
                                <div className="GoBack">go back</div>
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
                    case 'zamowienie':
                        return <div>
                            <div className="MainInfo">
                                Zamówienie
                            </div>
                        </div>
                    case 'raport':
                        return <div>
                            <div className="MainInfo">
                                Raport
                            </div>
                        </div>
                    default:
                }
            })()}
        </div>
    );
}

export default DetailsView;