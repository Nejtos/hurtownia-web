import "./ProductsTable.css"
// import User from "../User/User";
import Button from "../../../components/Button/AnotherButton";

const ProductsTable = () => {
    return (
        <div>
            <div className="RowProductsButtons">
                <Button buttonContent="Dodaj produkt" />
                <Button buttonContent="Edytuj produkt" />
                <Button buttonContent="Usuń produkt" />
            </div>
            <div className="ProductsPanelWrapper">
                <div className="ProductsHeaderWrapper">
                    <div className="ProductsID">ID produktu</div>
                    <div className="ProductsCategory">Kategoria</div>
                    <div className="ProductsElement">Element</div>
                    <div className="ProductsProducent">Producent</div>
                    <div className="ProductsNumber">Nr partii</div>
                    <div className="ProductsDate">Data ważności</div>
                    <div className="ProductsWeight">Ilość [kg]</div>
                </div>
                {/* {users.map((user, key) =>
            {
                return <User key={key} name={(user.email).substring(0, (user.email).indexOf('@'))} role={user.role} capacity={162} used={42} />
            })} */}
            </div>
        </div>
    );
}

export default ProductsTable;