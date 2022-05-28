import "./AddProduct.css"
import axios from "axios";
import { baseApiUrl } from "../../../services/routes";
import { useState } from "react";

const AddProduct = () => {

    const [id_produktu, setProductID] = useState("")
    const [id_miejsca, setPlaceID] = useState("")
    const [ilosc, setWeight] = useState("")

    const handleChange = () => {
        axios.post(`${baseApiUrl}/items/create`, {
            id_produktu: id_produktu,
            id_miejsca: id_miejsca,
            ilosc: ilosc,
            })
            .then(() => {
                console.log("Dodano nowy produkt");
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
            <div className="AddProductPanelWrapper">
                <label className="AddProductLabel" > ID produktu </label> 
                    <input className="AddProductInput" onChange={(e) => { setProductID(e.target.value) }} /> 
                <label className="AddProductLabel" > ID miejsca </label>
                    <input className="AddProductInput" onChange={(e) => { setPlaceID(e.target.value) }} />
                <label className="AddProductLabel" > Ilość </label>
                    <input className="AddProductInput" onChange={(e) => { setWeight(e.target.value) }} />
            </div>
            <div className="AddProductAcceptButton">
                <button className="AddProductAcceptExteriorButtonBox">
                    <div className="AddProductAcceptButtonBox" onClick={AcceptChanges}>
                        <label> {"Zatwierdz"} </label>
                    </div>
                </button>
            </div>
        </div>
    );
}
export default AddProduct;