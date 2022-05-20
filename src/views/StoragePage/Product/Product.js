import "./Product.css"

const Product = ({ productID, placeID, weight }) =>
{
    return (
        <div className="ProductWrapper">
            <span className="ProductID">{productID}</span>
            <span className="PlaceID">{placeID}</span>
            <span className="ProductWeight">{weight}</span>
        </div>
    );
}

export default Product;