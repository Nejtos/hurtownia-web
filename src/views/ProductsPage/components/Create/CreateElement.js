import "./CreateElement.css"

const CreateElement = () => {
    return (
        <div className="CreateElementPanelWrapper">
            <div className="CreateElementHeaderWrapper">
                <div className="ElementsID">ID elementu</div>
                <div className="ElementsName">Element</div>
            </div>
            <div className="CreateElementWrapper">
                <label className="CreateElementLabel">
                    <input className="FirstBox"/>
                    <input className="SecondBox"/>
                </label>
            </div>
        </div>
    );
}

export default CreateElement;