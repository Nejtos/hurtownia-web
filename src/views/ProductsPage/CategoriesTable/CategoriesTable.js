import "./CategoriesTable.css"
// import User from "../User/User";
import Button from "../../../components/Button/AnotherButton";

const CategoriesTable = () => {
    return (
        <div>
            <div className="RowCategoryButtons">
                <Button buttonContent="Dodaj kategorie" />
                <Button buttonContent="Dodaj element" />
                <Button buttonContent="Edytuj" />
                <Button buttonContent="Usuń" />
            </div>
            <div className="CategoriesPanelWrapper">
                <div className="CategoriesHeaderWrapper">
                    <div className="CategoriesID">ID kategorii</div>
                    <div className="CategoriesName">Kategoria</div>
                </div>
            </div>
            <div className="ElementsPanelWrapper">
                <div className="ElementsHeaderWrapper">
                    <div className="ElementsID">ID elementu</div>
                    <div className="ElementsName">Element</div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesTable;

/* {users.map((user, key) =>{
    return <User key={key} name={(user.email).substring(0, (user.email).indexOf('@'))} role={user.role} capacity={162} used={42} />
})} */