import "./CreateRaport.css"
// import axios from "axios";
// import { baseApiUrl } from "../../../../services/routes";
// import { useState } from "react";

const CreateRaport = () => {

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
            <div className="CreateRaportPanelWrapper">
                <label className="CreateRaportLabel" > ID raportu </label> 
                    <input className="CreateRaportInput"/> 
                <label className="CreateRaportLabel" > ID produktu </label>
                    <input className="CreateRaportInput"/>
                <label className="DetailsLabel" > Opis </label>
                    <input className="DetailsInput"/>
            </div>
            <div className="CreateRaportAcceptButton">
                <button className="CreateRaportAcceptExteriorButtonBox">
                    <div className="CreateRaportAcceptButtonBox" onClick={AcceptChanges}>
                        <label> {"Zatwierdz"} </label>
                    </div>
                </button>
            </div>
            {/* <input className="FirstBox" name="id_elementu" onChange={(e) => { setIDElementu(e.target.value) }} />
            <input className="SecondBox" name="nazwa_elementu" onChange={(e) => { setNazwaElementu(e.target.value) }} /> */}
        </div>
    );
}
export default CreateRaport;