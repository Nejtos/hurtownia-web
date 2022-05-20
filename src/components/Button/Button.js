import "./Button.css"

const Button = ({ buttonContent }) =>
{
    return (
        <div className="ButtonExterior">
            <button className="Button" type={buttonContent}>
                <div className="ButtonInterior">
                    {buttonContent}
                </div>
            </button>
        </div>
    );
}

export default Button