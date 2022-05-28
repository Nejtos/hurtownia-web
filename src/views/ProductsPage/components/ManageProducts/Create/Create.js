import "./Create.css"
import axios from "axios";
import { baseApiUrl } from "../../../../../services/routes";
import { useState } from "react";

const CreateProduct = () => {

    const [id_produktu, setProductID] = useState("")
    const [nazwa_kategorii, setCategoryName] = useState("")
    const [nazwa_elementu, setElementName] = useState("")
    const [nazwa_producenta, setProducentName] = useState("")
    const [nr_partii, setBatchNumber] = useState("")
    const [data_waznosci, setData] = useState("")
    const [ilosc, setWeight] = useState("")

    const handleChange = () => {
        axios.post(`${baseApiUrl}/products/create`, {
            id_produktu: id_produktu,
            nazwa_kategorii: nazwa_kategorii,
            nazwa_elementu: nazwa_elementu,
            nazwa_producenta: nazwa_producenta,
            nr_partii: nr_partii,
            data_waznosci: data_waznosci,
            ilosc: ilosc,
        })
            .then(() => {
                console.log("Dodano nowy element");
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    const AcceptChanges = () => {
        handleChange();
        window.location.reload(false);
    }

    return (
        <div>
            <div className="CreateProductPanelWrapper" type="default">
                <div className="ProductsHeaderWrapper">
                    <div className="ProductsID">ID produktu</div>
                    <div className="ProductsCategory">Kategoria</div>
                    <div className="ProductsElement">Element</div>
                    <div className="ProductsProducent">Producent</div>
                    <div className="ProductsNumber">Nr partii</div>
                    <div className="ProductsDate">Data ważności</div>
                    <div className="ProductsWeight">Ilość [kg]</div>
                </div>
                <div className="CreateProductWrapper">
                    <label className="CreateProductLabel">
                        <input className="ProductFirstBox" name="id_produktu" onChange={(e) => { setProductID(e.target.value) }} />
                        <input className="ProductSecondBox" name="nazwa_kategorii" onChange={(e) => { setCategoryName(e.target.value) }} />
                        <input className="ProductThirdBox" name="nazwa_elementu" onChange={(e) => { setElementName(e.target.value) }} />
                        <input className="ProductFourthBox" name="nazwa_producenta" onChange={(e) => { setProducentName(e.target.value) }} />
                        <input className="ProductFifthBox" name="nr_partii" onChange={(e) => { setBatchNumber(e.target.value) }} />
                        <input className="ProductSixthBox" name="data_waznosci" onChange={(e) => { setData(e.target.value) }} />
                        <input className="ProductSeventhBox" name="ilosc" onChange={(e) => { setWeight(e.target.value) }} />
                    </label>
                </div>
            </div>
            <button className="ProductAcceptExteriorButtonBox">
                <div className="ProductAcceptButtonBox" onClick={AcceptChanges}>
                    <label className="ProductLabel" > {"Zatwierdz"} </label>
                </div>
            </button>
        </div>
    );
}

export default CreateProduct;