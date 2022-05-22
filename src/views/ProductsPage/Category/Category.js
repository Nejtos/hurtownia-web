import "./Category.css"

const Category = ({ categoryID, categoryName }) =>
{
    return (
        <div className="CategoryWrapper">
            <span className="CategoryID">{categoryID}</span>
            <span className="CategoryName">{categoryName}</span>
        </div>
    );
}

export default Category;