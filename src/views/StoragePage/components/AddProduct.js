import "./AddProduct.css"
// import axios from "axios";
// import { baseApiUrl } from "../../../../services/routes";
// import { useState } from "react";

const AddProduct = () => {

    // const [id_elementu, setIDElementu] = useState("")
    // const [nazwa_elementu, setNazwaElementu] = useState("")

    // const handleChange = () => {
    //     axios.post(`${baseApiUrl}/storage/create`, {
    //         id_elementu: id_elementu,
    //         nazwa_elementu: nazwa_elementu,
    //         })
    //         .then(() => {
    //             console.log("Dodano nowy element");
    //         })
    //         .catch((error) => {
    //             console.log(error.response.data);
    //         });
    // }

    const AcceptChanges = () => {
        window.location.reload(false);
    }

    return (
        <div>
            <div className="AddProductPanelWrapper">
                <label className="AddProductLabel" > ID produktu </label> 
                    <input className="AddProductInput"/> 
                <label className="AddProductLabel" > ID miejsca </label>
                    <input className="AddProductInput"/>
                <label className="AddProductLabel" > Ilość </label>
                    <input className="AddProductInput"/>
            </div>
            <div className="AddProductAcceptButton">
                <button className="AddProductAcceptExteriorButtonBox">
                    <div className="AddProductAcceptButtonBox" onClick={AcceptChanges}>
                        <label> {"Zatwierdz"} </label>
                    </div>
                </button>
            </div>
            {/* <input className="FirstBox" name="id_elementu" onChange={(e) => { setIDElementu(e.target.value) }} />
            <input className="SecondBox" name="nazwa_elementu" onChange={(e) => { setNazwaElementu(e.target.value) }} /> */}
        </div>
    );
}
export default AddProduct;