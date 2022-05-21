import "./Category.css"

const Category = ({ CategoryID, CategoryDate }) =>
{
    return (
        <div className="CategoryWrapper">
            <span className="CategoryID">{CategoryID}</span>
            <span className="CategoryDate">{CategoryDate}</span>
            <span className="CategoryDetails">Szczegóły</span>
        </div>
    );
}

export default Category;