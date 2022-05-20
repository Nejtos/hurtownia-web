import "./DeliveryPanel.css"
// import User from "../User/User";
import Delivery from "../Delivery/Delivery";

const DeliveryPanel = ({deliveries}) => {
    return (
        <div className="DeliveryPanelWrapper">
            <div className="DeliveryHeaderWrapper">
                <div className="DeliveryID">ID</div>
                <div className="DeliveryData">Data</div>
                <div className="DeliverySzczegoly">Szczegóły</div>
                <div className="DeliveryStatus">Dostarczona</div>
            </div>
            {deliveries.map((delivery, key) => {
                return <Delivery key={key} deliveryID={delivery.id_dostawy} deliveryDate={delivery.data} />
            })}
        </div>
    );
}

export default DeliveryPanel;