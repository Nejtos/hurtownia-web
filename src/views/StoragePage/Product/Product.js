import "./Product.css"

const Product = ({ productID, placeID, weight }) =>
{
    return (
        <div className="StorageProductWrapper">
            <span className="StorageProductID">{productID}</span>
            <span className="StoragePlaceID">{placeID}</span>
            <span className="StorageProductWeight">{weight}</span>
        </div>
    );
}

export default Product;