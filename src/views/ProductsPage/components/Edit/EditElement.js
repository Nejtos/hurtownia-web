import "./EditElement.css"
import axios from "axios";
import { baseApiUrl } from "../../../../services/routes";
import { useState } from "react";

const EditElement = ({categories, elements}) => {

    const [id_kategorii, setIDKategorii] = useState("")
    const [nazwa_kategorii, setNazwaKategorii] = useState("")
    const [id, setBaseCatID] = useState("")
    const [id_elementu, setEditIDElementu] = useState("")
    const [nazwa_elementu, setEditNazwaElementu] = useState("")
    const [base_id, setBaseElemID] = useState("")

    const handleCategoriesChange = () => {
        axios.post(`${baseApiUrl}/categories/edit`, {
            id: id,
            id_kategorii: id_kategorii,
            nazwa_kategorii: nazwa_kategorii,
            })
            .then(() => {
                console.log("Edytowano kategorie");
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    const handleElementsChange = () => {
        axios.post(`${baseApiUrl}/elements/edit`, {
            id: base_id,
            id_elementu: id_elementu,
            nazwa_elementu: nazwa_elementu,
            })
            .then(() => {
                console.log("Edytowano elementy");
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    const AcceptChanges = () => {
        handleCategoriesChange();
        handleElementsChange();
        window.location.reload(false);
    }

    return (
        <div>     
            <div className="CreateCategoryPanelWrapper">
                <div className="CreateCategoryHeaderWrapper">
                    <div className="CategoriesID">ID kategorii</div>
                    <div className="CategoriesName">Kategoria</div>
                </div>
                {categories.map((category, key) => {
                    console.log(category)
                    return <div className="CreateCategoryWrapper" key={key}>
                    <label className="CreateCategoryLabel">
                        <input className="FirstBox"  name="id_kategorii" onChange={(e) => { setIDKategorii(e.target.value); setBaseCatID(category.id) }} placeholder={category.id_kategorii} />
                        <input className="SecondBox" name="nazwa_kategorii" onChange={(e) => { setNazwaKategorii(e.target.value); setBaseCatID(category.id) }} placeholder={category.nazwa_kategorii} />  
                    </label>
                </div>
                })}
            </div>
            <div className="EditElementPanelWrapper">
                <div className="EditElementHeaderWrapper">
                    <div className="ElementsID">ID elementu</div>
                    <div className="ElementsName">Element</div>
                </div>
                {elements.map((element, key) => {
                return <div className="EditElementWrapper" key={key}>
                    <label className="EditElementLabel">
                        <input className="FirstBox" name="id_elementu" onChange={(e) => { setEditIDElementu(e.target.value); setBaseElemID(element.id) }} placeholder={element.id_elementu}/>
                        <input className="SecondBox" name="nazwa_elementu" onChange={(e) => { setEditNazwaElementu(e.target.value); setBaseElemID(element.id) }} placeholder={element.nazwa_elementu}/>
                    </label>
                </div>
                })}
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

export default EditElement;