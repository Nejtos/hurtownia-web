import "./Order.css"
import StatusDropdown from "../StatusDropdown/StatusDropdown";

const Order = ({ orderID, orderDate, orderState }) =>
{
    return (
        <div className="OrderWrapper">
            <span className="OrderID">{orderID}</span>
            <span className="OrderDate">{orderDate}</span>
            <span className="OrderDetails">Szczegóły</span>
            <span className="OrderStatus"> <StatusDropdown status={orderState} id={orderID} /> </span>
        </div>
    );
}

export default Order;