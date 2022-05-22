import "./CreateElement.css"
import axios from "axios";
import { baseApiUrl } from "../../../../services/routes";
import { useState } from "react";

const CreateElement = () => {

    const [id_elementu, setIDElementu] = useState("")
    const [nazwa_elementu, setNazwaElementu] = useState("")

    const handleChange = () => {
        axios.post(`${baseApiUrl}/elements/create`, {
            id_elementu: id_elementu,
            nazwa_elementu: nazwa_elementu,
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
            <div className="CreateElementPanelWrapper">
                <div className="CreateElementHeaderWrapper">
                    <div className="ElementsID">ID elementu</div>
                    <div className="ElementsName">Element</div>
                </div>
                <div className="CreateElementWrapper">
                    <label className="CreateElementLabel">
                        <input className="FirstBox" name="id_elementu" onChange={(e) => { setIDElementu(e.target.value) }} />
                        <input className="SecondBox" name="nazwa_elementu" onChange={(e) => { setNazwaElementu(e.target.value) }} />
                    </label>
                </div>
            </div>
            <div className="AcceptButton">
                <button className="AcceptExteriorButtonBox">
                    <div className="AcceptButtonBox" onClick={AcceptChanges}>
                        <label> {"Zatwierdz"} </label>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default CreateElement;