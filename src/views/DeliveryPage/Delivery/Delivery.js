import "./Delivery.css"

const Delivery = ({ deliveryID, deliveryDate }) =>
{
    return (
        <div className="DeliveryWrapper">
            <span className="ID">{deliveryID}</span>
            <span className="Date">{deliveryDate}</span>
            <span className="Details">Szczegoly</span>
            <span className="Status">Tak</span>
        </div>
    );
}

export default Delivery;