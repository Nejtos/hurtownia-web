import "./OrdersPanel.css"
import Order from "../Order/Order";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from 'react';

const OrdersPanel = ({ orders }) => {

    const { userState } = useContext(UserContext);

    return (
        <div>
            {(userState.role === "magazynier")
                ? <div>
                    <div className="OrdersPanelWrapper" type="selected">
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
                </div>
                : <div>
                    <div className="OrdersPanelWrapper" type="default">
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
                </div>
            }
        </div>
    );
}

export default OrdersPanel;