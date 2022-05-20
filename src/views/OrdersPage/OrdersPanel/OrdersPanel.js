import "./OrdersPanel.css"
// import User from "../User/User";

const OrdersPanel = () => {
    return (
        <div className="OrdersPanelWrapper">
            <div className="OrdersHeaderWrapper">
                <div className="OrdersID">ID</div>
                <div className="OrdersData">Data</div>
                <div className="OrdersSzczegoly">Szczegóły</div>
                <div className="Wydano">Wydano</div>
            </div>
            {/* {users.map((user, key) =>
            {
                return <User key={key} name={(user.email).substring(0, (user.email).indexOf('@'))} role={user.role} capacity={162} used={42} />
            })} */}
        </div>
    );
}

export default OrdersPanel;