import "./CategoriesTable.css"
// import Button from "../../../components/Button/AnotherButton";
import Category from "../Category/Category";
import Element from "../Element/Element";
import CreateCategory from "../components/Create/CreateCategory";
import CreateElement from "../components/Create/CreateElement";
import EditElement from "../components/Edit/EditElement";
import Delete from "../components/Delete/Delete";
import { useState } from "react";


const CategoriesTable = ({ categories, elements }) => {

    const [createNewCategory, setcreateNewCategory] = useState(false)
    const createCategoryClick = () => { setcreateNewCategory(true); setcreateNewElement(false); setEdit(false); setDelete(false) }
    const [createNewElement, setcreateNewElement] = useState(false)
    const createElementClick = () => { setcreateNewElement(true); setcreateNewCategory(false); setEdit(false); setDelete(false) }
    const [edit, setEdit] = useState(false)
    const editClick = () => { setEdit(true); setcreateNewElement(false); setcreateNewCategory(false); setDelete(false) }
    const [deleteData, setDelete] = useState(false)
    const deleteClick = () => { setDelete(true); setEdit(false); setcreateNewElement(false); setcreateNewCategory(false); }

    return (
        <div>
            <div className="RowCategoryButtons">
                <button className="ProductsAddButton" onClick={createCategoryClick} > Dodaj kategorie </button>
                <button className="ProductsAddButton" onClick={createElementClick}> Dodaj element </button>
                <button className="ProductsEditButton" onClick={editClick}> Edytuj </button>
                <button className="ProductsDeleteButton" onClick={deleteClick}> Usuń </button>
                {/* <Button buttonContent="Dodaj kategorie" onClick={CreateClick}/>
                <Button buttonContent="Dodaj element" />
                <Button buttonContent="Edytuj" />
                <Button buttonContent="Usuń" /> */}
            </div>
            <div>
                <div className="CategoriesPanelWrapper">
                    <div className="CategoriesHeaderWrapper">
                        <div className="CategoriesID">ID kategorii</div>
                        <div className="CategoriesName">Kategoria</div>
                    </div>
                    {categories.map((category, key) => {
                        return <Category key={key} categoryID={category.id_kategorii} categoryName={category.nazwa_kategorii} />
                    })}
                </div>
                <div className="ElementsPanelWrapper">
                    <div className="ElementsHeaderWrapper">
                        <div className="ElementsID">ID elementu</div>
                        <div className="ElementsName">Element</div>
                    </div>
                    {elements.map((element, key) => {
                        return <Element key={key} elementID={element.id_elementu} elementName={element.nazwa_elementu} />
                    })}
                </div>
            </div>
            {createNewCategory? <CreateCategory /> : null}
            {createNewElement? <CreateElement /> : null} 
            {edit? <EditElement categories={categories} elements={elements}/> : null}
            {deleteData? <Delete categories={categories} elements={elements} /> : null}
        </div>
    );
}

export default CategoriesTable;