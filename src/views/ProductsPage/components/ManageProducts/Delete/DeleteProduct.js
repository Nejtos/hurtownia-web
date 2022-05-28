import "./DeleteProduct.css"
import axios from "axios";
import { baseApiUrl } from "../../../../../services/routes";
import { useState } from "react";

const DeleteProduct = ({ products }) => {

    const [id_produktu, setIDProduktu] = useState("");
    const [status, setStatusProduktu] = useState("");

    const DeleteProductChange = () => {
        axios.post(`${baseApiUrl}/products/delete`,{id_produktu: id_produktu, status: status})
        .catch((error) =>
        {
            console.log(error.response.data);
        });
    }

    const AcceptChanges = () => {
        DeleteProductChange();
        window.location.reload(false);
    }

    return (
        <div>
            <div className="DeleteProductsPanelWrapper" type="default">
                <div className="DeleteProductsHeaderWrapper">
                    <div className="DeleteProductsID">ID produktu</div>
                    <div className="DeleteProductsCategory">Kategoria</div>
                    <div className="DeleteProductsElement">Element</div>
                    <div className="DeleteProductsProducent">Producent</div>
                    <div className="DeleteProductsNumber">Nr partii</div>
                    <div className="DeleteProductsDate">Data ważności</div>
                    <div className="DeleteProductsWeight">Ilość [kg]</div>
                </div>
                {products.map((product, key) => {
                    return <div className="DeleteProductWrapper" key={key}>
                        <div className="DeleteStatusTypeDropdownWrapper">
                            <select onChange={(e) => { setIDProduktu(product.id_produktu); setStatusProduktu(e.target.value) }} name="status" className="DeleteSelectionWrapper" >
                                <option value="Nie">Nie</option>
                                <option value="Tak">Tak</option>
                            </select>
                        </div>
                        <span className="DeleteProductID">{product.id_produktu}</span>
                        <span className="DeleteProductCategory">{product.nazwa_kategorii}</span>
                        <span className="DeleteProductElement">{product.nazwa_elementu}</span>
                        <span className="DeleteProductProducent">{product.nazwa_producenta}</span>
                        <span className="DeleteProductNumber">{product.nr_partii}</span>
                        <span className="DeleteProductDate">{product.data_waznosci}</span>
                        <span className="DeleteProductWeight">{product.ilosc}</span>
                    </div>
                })}
            </div>
            <button className="ProductAcceptExteriorButtonBox">
                <div className="ProductAcceptButtonBox" onClick={AcceptChanges}>
                    <label className="DeleteProductLabel" > {"Zatwierdz"} </label>
                </div>
            </button>
        </div>
    );
}

export default DeleteProduct;