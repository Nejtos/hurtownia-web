import "./Element.css"

const Element = ({ elementID, elementName }) =>
{
    return (
        <div className="ElementWrapper">
            <span className="ElementID">{elementID}</span>
            <span className="ElementName">{elementName}</span>
        </div>
    );
}

export default Element;