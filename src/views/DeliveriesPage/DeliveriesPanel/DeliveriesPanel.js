import "./DeliveriesPanel.css"
import StatusDropdown from "../components/StatusDropdown/StatusDropdown"
import DetailsView from "../components/DetailsView/DetailsView"
import { useState } from "react"

const DeliveriesPanel = ({ deliveries }) => {

    const [showDetails, setShowDetails] = useState(false);
    const [ID, setDeliveryID] = useState("");

    const detailsClick = (ID) => {
        let panel = document.querySelector('.DeliveriesPanelWrapper');
        panel.style.display = "none";
        let button = document.querySelector('.DeliveriesStatusButton');
        button.style.display = "none";
        setShowDetails(true);
        setDeliveryID(ID)
    }

    return (
        <div>
            <div className="DeliveriesPanelWrapper">
                <div className="DeliveriesHeaderWrapper">
                    <div className="DeliveriesID">ID</div>
                    <div className="DeliveriesData">Data</div>
                    <div className="DeliveriesDetails">Szczegóły</div>
                    <div className="DeliveriesStatus">Dostarczono</div>
                </div>
                {deliveries.map((delivery, key) => {
                    return <div className="DeliveryWrapper" key={key}>
                        <span className="DeliveryID">{delivery.id_dostawy}</span>
                        <span className="DeliveryDate">{delivery.data}</span>
                        <span className="DeliveryDetails" onClick={() => detailsClick(delivery.id_dostawy)} > Szczegóły </span>
                        <span className="DeliveryStatus"> <StatusDropdown status={delivery.status} id={delivery.id} /> </span>
                    </div>
                })}
            </div>
            {showDetails ? <DetailsView marker={"dostawa"} deliveryID={ID} /> : null}
        </div>
    );
}

export default DeliveriesPanel;