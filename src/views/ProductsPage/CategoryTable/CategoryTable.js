import "./CategoryTable.css"
// import User from "../User/User";
import Button from "../../../components/Button/AnotherButton";

const CategoryTable = () => {
    return (
        <div>
            <div className="RowCategoryButtons">
                <Button buttonContent="Dodaj kategorie" />
                <Button buttonContent="Dodaj element" />
                <Button buttonContent="Edytuj" />
                <Button buttonContent="Usuń" />
            </div>
            <div className="CategoryPanelWrapper">
                <div className="CategoryHeaderWrapper">
                    <div className="CategoryID">ID kategorii</div>
                    <div className="CategoryName">Kategoria</div>
                </div>
            </div>
            <div className="ElementPanelWrapper">
                <div className="ElementHeaderWrapper">
                    <div className="ElementID">ID elementu</div>
                    <div className="ElementName">Element</div>
                </div>
            </div>
        </div>
    );
}

export default CategoryTable;

/* {users.map((user, key) =>{
    return <User key={key} name={(user.email).substring(0, (user.email).indexOf('@'))} role={user.role} capacity={162} used={42} />
})} */