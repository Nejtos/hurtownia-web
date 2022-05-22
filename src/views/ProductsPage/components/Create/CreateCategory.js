import "./CreateCategory.css"

const CreateCategory = () => {
    return (
        <div className="CreateCategoryPanelWrapper">
            <div className="CreateCategoryHeaderWrapper">
                <div className="CategoriesID">ID kategorii</div>
                <div className="CategoriesName">Kategoria</div>
            </div>
            <div className="CreateCategoryWrapper">
                <label className="CreateCategoryLabel">
                    <input className="FirstBox"/>
                    <input className="SecondBox"/>
                </label>
            </div>
        </div>
    );
}

export default CreateCategory;