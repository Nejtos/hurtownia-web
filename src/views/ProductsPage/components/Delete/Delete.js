import "./Delete.css"
import axios from "axios";
import { baseApiUrl } from "../../../../services/routes";
import { useState } from "react";

const Delete = ({ categories, elements }) => {

    const [id_kategorii, setIDKategorii] = useState("");
    const [statusKategori, setStatusKategorii] = useState("");
    const [id_elementu, setIDElementu] = useState("");
    const [statusElementu, setStatusElementu] = useState("");

    const DeleteCategoryChange = () => {
        axios.post(`${baseApiUrl}/categories/delete`,{id_kategorii: id_kategorii, status: statusKategori})
        .catch((error) =>
        {
            console.log(error.response.data);
        });
    }

    const DeleteElementChange = () => {
        axios.post(`${baseApiUrl}/elements/delete`,{id_elementu: id_elementu, status: statusElementu})
        .catch((error) =>
        {
            console.log(error.response.data);
        });
    }

    const AcceptChanges = () => {
        DeleteCategoryChange();
        DeleteElementChange();
        window.location.reload(false);
    }

    return (
        <div>
            <div className="CategoriesPanelWrapper">
                <div className="CategoriesHeaderWrapper">
                    <div className="DeleteCategoriesID">ID kategorii</div>
                    <div className="DeleteCategoriesName">Kategoria</div>
                </div>
                {categories.map((category, key) => {
                    return <div className="DeleteCategoryWrapper" key={key}>
                        <div className="DeleteStatusTypeDropdownWrapper">
                            <select onChange={(e) => {setIDKategorii(category.id_kategorii); setStatusKategorii(e.target.value)}} name="status" className="DeleteSelectionWrapper" >
                                <option value="Nie">Nie</option>
                                <option value="Tak">Tak</option>
                            </select>
                        </div>
                        {/* <input type="checkbox" className="checkbox" onChange={ AcceptChanges } /> */}
                        <span className="DeleteCategoryID">{category.id_kategorii}</span>
                        <span className="DeleteCategoryName">{category.nazwa_kategorii}</span>
                    </div>
                })}
            </div>
            <div className="ElementsPanelWrapper">
                <div className="ElementsHeaderWrapper">
                    <div className="DeleteElementsID">ID elementu</div>
                    <div className="DeleteElementsName">Element</div>
                </div>
                {elements.map((element, key) => {
                    return <div className="DeleteElementWrapper" key={key}>
                        {/* <input type="checkbox" className="checkbox" onChange={(e) => { setIDKategorii(e.target.value) }} /> */}
                        <div className="DeleteStatusTypeDropdownWrapper">
                            <select onChange={(e) => {setIDElementu(element.id_elementu); setStatusElementu(e.target.value)}} name="status" className="DeleteSelectionWrapper" >
                                <option value="Nie">Nie</option>
                                <option value="Tak">Tak</option>
                            </select>
                        </div>
                        <span className="DeleteElementID">{element.id_elementu}</span>
                        <span className="DeleteElementName">{element.nazwa_elementu}</span>
                    </div>
                })}
            </div>
            <div className="AcceptButton">
                <button className="AcceptExteriorButtonBox">
                    <div className="AcceptButtonBox" onClick={AcceptChanges}>
                        <label className="DelButton"> {"Zatwierdz"} </label>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Delete;