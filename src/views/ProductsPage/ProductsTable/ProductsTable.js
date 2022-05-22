import "./ProductsTable.css"
import Button from "../../../components/Button/AnotherButton";
import Product from "../Product/Product";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from 'react';

const ProductsTable = ({products}) => {
    const { userState } = useContext(UserContext);
    return (
        <div>
            {(userState.role === "magazynier" || userState.role === "kontroler jakosci") 
            ? <div>
                <div className="ProductsPanelWrapper" type="selected">
                <div className="ProductsHeaderWrapper">
                    <div className="ProductsID">ID produktu</div>
                    <div className="ProductsCategory">Kategoria</div>
                    <div className="ProductsElement">Element</div>
                    <div className="ProductsProducent">Producent</div>
                    <div className="ProductsNumber">Nr partii</div>
                    <div className="ProductsDate">Data ważności</div>
                    <div className="ProductsWeight">Ilość [kg]</div>
                </div>
                {products.map((product, key) => {
                    return <Product key={key} productID={product.id_produktu} productCategory={"Wieprzowina"} productElement={"Karczek"} productProducent={"Rzeźnia u dabka"} productNumber={product.nr_partii} productDate={product.data_waznosci} productWeight={product.ilosc} />
                })}
                </div>
            </div>
            :<div>
            <div className="RowProductsButtons">
                <Button buttonContent="Dodaj produkt" />
                <Button buttonContent="Edytuj produkt" />
                <Button buttonContent="Usuń produkt" />
            </div>
            <div className="ProductsPanelWrapper" type="default">
                <div className="ProductsHeaderWrapper">
                    <div className="ProductsID">ID produktu</div>
                    <div className="ProductsCategory">Kategoria</div>
                    <div className="ProductsElement">Element</div>
                    <div className="ProductsProducent">Producent</div>
                    <div className="ProductsNumber">Nr partii</div>
                    <div className="ProductsDate">Data ważności</div>
                    <div className="ProductsWeight">Ilość [kg]</div>
                </div>
                {products.map((product, key) => {
                    return <Product key={key} productID={product.id_produktu} productCategory={"Wieprzowina"} productElement={"Karczek"} productProducent={"Rzeźnia u dabka"} productNumber={product.nr_partii} productDate={product.data_waznosci} productWeight={product.ilosc} />
                })}
            </div>
            </div>}
        </div>
    );
}

export default ProductsTable;