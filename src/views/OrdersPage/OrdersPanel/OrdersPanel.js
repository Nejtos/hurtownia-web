import "./OrdersPanel.css"
import StatusDropdown from "../StatusDropdown/StatusDropdown";
import DetailsView from "../components/DetailsView/DetailsView";
import { UserContext } from "../../../contexts/UserContext";
import { useState, useContext } from 'react';

const OrdersPanel = ({ orders }) => {

    const { userState } = useContext(UserContext);
    const [showDetails, setShowDetails] = useState(false);
    const [ID, setOrderID] = useState("");

    const detailsClick = (ID) => {
        let panel = document.querySelector('.OrdersPanelWrapper');
        panel.style.display = "none";
        if (userState.role !== "magazynier") {
            let button = document.querySelector('.OrdersStatusButton');
            button.style.display = "none";
        }
        setShowDetails(true);
        setOrderID(ID)
    }

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
                            return <div className="OrderWrapper" key={key}>
                                <span className="OrderID">{order.id_zamowienia}</span>
                                <span className="OrderDate">{order.data}</span>
                                <span className="OrderDetails" onClick={() => detailsClick(order.id_zamowienia)} > Szczegóły </span>
                                <span className="OrderStatus"> <StatusDropdown status={order.status} id={order.id_zamowienia} /> </span>
                            {/* <Order key={key} orderID={order.id_zamowienia} orderDate={order.data} orderState={order.status} /> */ }
                            </div>
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
                            return <div className="OrderWrapper" key={key}>
                                <span className="OrderID">{order.id_zamowienia}</span>
                                <span className="OrderDate">{order.data}</span>
                                <span className="OrderDetails" onClick={() => detailsClick(order.id_zamowienia)} > Szczegóły </span>
                                <span className="OrderStatus"> <StatusDropdown status={order.status} id={order.id_zamowienia} /> </span>
                            {/* <Order key={key} orderID={order.id_zamowienia} orderDate={order.data} orderState={order.status} /> */ }
                            </div>
                        })}
                    </div>
                </div>
            }
            {showDetails ? <DetailsView marker={"zamowienie"} orderID={ID} /> : null}
        </div>
    );
}

export default OrdersPanel;