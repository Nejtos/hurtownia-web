import "./OrdersPanel.css"
import Order from "../Order/Order";

const OrdersPanel = ({orders}) => {
    return (
        <div className="OrdersPanelWrapper">
            <div className="OrdersHeaderWrapper">
                <div className="OrdersID">ID</div>
                <div className="OrdersData">Data</div>
                <div className="OrdersDetails">Szczegóły</div>
                <div className="OrdersStatus">Wydano</div>
            </div>
            {orders.map((order, key) => {
                return <Order key={key} orderID={order.id_zamowienia} orderDate={order.data} orderState={order.status} />
            })}
        </div>
    );
}

export default OrdersPanel;