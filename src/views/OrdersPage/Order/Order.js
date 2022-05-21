import "./Order.css"

const Order = ({ orderID, orderDate, orderState }) =>
{
    return (
        <div className="OrderWrapper">
            <span className="OrderID">{orderID}</span>
            <span className="OrderDate">{orderDate}</span>
            <span className="OrderDetails">Szczegóły</span>
            <span className="OrderStatus">{orderState}</span>
        </div>
    );
}

export default Order;