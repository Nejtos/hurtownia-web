import "./AnotherButton.css"

const AnotherButton = ({ buttonContent }) => {
    return (
        <button className="AnotherExteriorButtonBox">
            <div className="AnotherButtonBox">
                <label> {buttonContent} </label>
            </div>
        </button>
    );
}

export default AnotherButton