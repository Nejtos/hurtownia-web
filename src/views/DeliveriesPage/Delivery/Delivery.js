import "./Delivery.css"
import StatusDropdown from "../components/StatusDropdown/StatusDropdown";

const Delivery = ({ deliveryID, deliveryDate, deliveryState }) =>
{
    return (
        <div className="DeliveryWrapper">
            <span className="DeliveryID">{deliveryID}</span>
            <span className="DeliveryDate">{deliveryDate}</span>
            <span className="DeliveryDetails">Szczegóły</span>
            <span className="DeliveryStatus"> <StatusDropdown status={deliveryState} id={deliveryID} /> </span>
        </div>
    );
}

export default Delivery;