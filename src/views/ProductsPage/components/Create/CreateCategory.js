import "./CreateCategory.css"
import axios from "axios";
import { baseApiUrl } from "../../../../services/routes";
import { useState } from "react";

const CreateCategory = () => {

    const [id_kategorii, setIDKategorii] = useState("")
    const [nazwa_kategorii, setNazwaKategorii] = useState("")

    const handleChange = () => {
        axios.post(`${baseApiUrl}/categories/create`, {
            id_kategorii: id_kategorii,
            nazwa_kategorii: nazwa_kategorii,
        })
            .then(() => {
                console.log("Dodano nowa kategorie");
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
            <div className="CreateCategoryPanelWrapper">
                <div className="CreateCategoryHeaderWrapper">
                    <div className="CategoriesID">ID kategorii</div>
                    <div className="CategoriesName">Kategoria</div>
                </div>
                <div className="CreateCategoryWrapper">
                    <label className="CreateCategoryLabel">
                        <input className="FirstBox" name="id_kategorii" onChange={(e) => { setIDKategorii(e.target.value) }} />
                        <input className="SecondBox" name="nazwa_kategorii" onChange={(e) => { setNazwaKategorii(e.target.value) }} />
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

export default CreateCategory;