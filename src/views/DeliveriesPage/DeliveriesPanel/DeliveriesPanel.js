import "./DeliveriesPanel.css"
import Delivery from "../Delivery/Delivery"

const DeliveriesPanel = ({deliveries}) => {
    return (
        <div className="DeliveriesPanelWrapper">
            <div className="DeliveriesHeaderWrapper">
                <div className="DeliveriesID">ID</div>
                <div className="DeliveriesData">Data</div>
                <div className="DeliveriesDetails">Szczegóły</div>
                <div className="DeliveriesStatus">Dostarczona</div>
            </div>
            {deliveries.map((delivery, key) => {
                if(delivery.status === true){
                    delivery.status = "Tak"; 
                }
                if(delivery.status === false){
                    delivery.status = "Nie"; 
                }
                return <Delivery key={key} deliveryID={delivery.id_dostawy} deliveryDate={delivery.data} deliveryState={delivery.status} />
            })}
        </div>
    );
}

export default DeliveriesPanel;