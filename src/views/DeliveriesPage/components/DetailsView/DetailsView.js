import "./DetailsView.css"
import arrow from "../../../../icons/arrow.svg"

const DetailsView = ({ marker, deliveryID, orderID, raportID }) => {

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
                                <div className="GoBack">powrót</div>
                            </div>
                            <div className="DetailTitle" >
                                Dostawa {deliveryID}
                            </div>
                            <div className="DetailsPanelWrapper" >
                                <div className="DetailsHeaderWrapper">
                                    <div className="DetailsDeliveryID">ID</div>
                                    <div className="DetailsDeliveryWeight">Ilość [kg] </div>
                                    <div className="DetailsDeliveryDate">Data ważności</div>
                                    <div className="DetailsDeliveryBatchNumber">Nr partii</div>
                                </div>
                                <div className="DetailsWrapper">
                                    <span className="DetailDeliveryID">A</span>
                                    <span className="DetailDeliveryWeight">B</span>
                                    <span className="DetailDeliveryDate" >C</span>
                                    <span className="DetailDeliveryBatchNumber"> D </span>
                                </div>
                            </div>
                        </div>
                    case 'zamowienie':
                        return <div>
                            <div className="GoBackBox" onClick={ handleClick } >
                                <img src={arrow} alt="Left arrow" />
                                <div className="GoBack">powrót</div>
                            </div>
                            <div className="DetailTitle" >
                                Zamówienie {orderID}
                            </div>
                            <div className="DetailsPanelWrapper" >
                                <div className="DetailsHeaderWrapper">
                                    <div className="DetailsOrderID">ID</div>
                                    <div className="DetailsOrderCategory">Kategoria </div>
                                    <div className="DetailsOrderElement">Element</div>
                                    <div className="DetailsOrderWeight">Ilość</div>
                                </div>
                                <div className="DetailsWrapper">
                                    <span className="DetailOrderID">A</span>
                                    <span className="DetailOrderCategory">B</span>
                                    <span className="DetailOrderElement" >C</span>
                                    <span className="DetailOrderWeight"> D </span>
                                </div>
                            </div>
                        </div>
                    case 'raport':
                        return <div>
                            <div className="GoBackBox" onClick={ handleClick } >
                                <img src={arrow} alt="Left arrow" />
                                <div className="GoBack">powrót</div>
                            </div>
                            <div className="DetailTitle" >
                                Raport {raportID}
                            </div>
                            <div className="DetailsPanelWrapper" >
                                <div className="DetailsRaportHeaderWrapper">
                                    <div className="DetailsRaportID">ID</div>
                                    <div className="DetailsRaportWeight">Ilość [kg] </div>
                                    <div className="DetailsRaportDate">Data ważności</div>
                                    <div className="DetailsRaportBatchNumber">Nr partii</div>
                                    <div className="DetailsRaportDescription">Opis</div>
                                </div>
                                <div className="DetailsWrapper">
                                    <span className="DetailRaportID">A</span>
                                    <span className="DetailRaportWeight">B</span>
                                    <span className="DetailRaportDate" >C</span>
                                    <span className="DetailRaportBatchNumber"> D </span>
                                    <span className="DetailRaportDescription"> E </span>
                                </div>
                            </div>
                        </div>
                    default:
                }
            })()}
        </div>
    );
}

export default DetailsView;