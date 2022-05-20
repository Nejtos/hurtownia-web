import "./OrdersPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import OrdersPanel from "./OrdersPanel/OrdersPanel";
import Button from "../../components/Button/AnotherButton";

const OrdersPage= () =>
{
    return (
        <div>
            <Title />
            <Navigation />
            <div className="OrdersStatusButton">
                <Button buttonContent="Potwierdz wydanie zamówienia" />
            </div>
            <OrdersPanel />
        </div>
    );
}

export default OrdersPage;