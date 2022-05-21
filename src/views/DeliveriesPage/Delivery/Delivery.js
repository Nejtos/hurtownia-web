import "./Delivery.css"

const Delivery = ({ deliveryID, deliveryDate, deliveryState }) =>
{
    return (
        <div className="DeliveryWrapper">
            <span className="DeliveryID">{deliveryID}</span>
            <span className="DeliveryDate">{deliveryDate}</span>
            <span className="DeliveryDetails">Szczegóły</span>
            <span className="DeliveryStatus">{deliveryState}</span>
        </div>
    );
}

export default Delivery;