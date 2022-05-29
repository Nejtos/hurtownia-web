import "./CreateRaport.css"
import axios from "axios";
import { baseApiUrl } from "../../../../services/routes";
import { useState } from "react";

const CreateRaport = () => {

    const [id_raportu, setIDRaportu] = useState("")
    const [inputList, setInputList] = useState([{ id_produktu: "", opis: "" }]);
    const moment = require('moment');
    var date = moment().format('YYYY-MM-DD');
    
    const handleChange = () => {
        axios.post(`${baseApiUrl}/raports/create`, {
            id_raportu: id_raportu,
            data: date,
            inputList: inputList,
            })
            .then(() => {
                console.log("Dodano nowy raport");
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { id_produktu: "", opis: "" }]);
    };

    const AcceptChanges = () => {
        handleChange();
        window.location.reload(false);
    }

    return (
        <div>
            <div className="CreateRaportPanelWrapper">
                <label className="CreateRaportLabel" > ID raportu </label>
                    <input className="CreateRaportInput" onChange={e => { setIDRaportu(e.target.value) }} />
                {inputList.map((x, i) => {
                    return (
                        <div className="Box" key={i}>
                            <div className="FirstRow">
                            <label className="CreateRaportLabel" > ID produktu </label>
                                <input className="CreateRaportInput" name="id_produktu" onChange={e => { handleInputChange(e, i) }} />
                            </div>
                            <div className="SecondRow" >
                            <label className="DetailsLabel" > Opis </label>
                                <input className="DetailsInput" name="opis" onChange={e => { handleInputChange(e, i) }} />
                            </div>
                            {inputList.length !== 1 && <button className="removeButton" onClick={() => handleRemoveClick(i)}> Usuń </button>}
                            {inputList.length - 1 === i && <button className="addButton" onClick={handleAddClick}> Dodaj </button>}
                        </div>
                    );
                })}
            </div>
            <div className="CreateRaportAcceptButton">
                <button className="CreateRaportAcceptExteriorButtonBox">
                    <div className="CreateRaportAcceptButtonBox" onClick={AcceptChanges}>
                        <label> {"Zatwierdz"} </label>
                    </div>
                </button>
            </div>
        </div>
    );
}
export default CreateRaport;