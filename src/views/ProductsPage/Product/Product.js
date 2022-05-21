import "./Product.css"

const Product = ({ productID, productCategory, productElement, productProducent, productNumber, productDate, productWeight }) =>
{
    return (
        <div className="ProductWrapper">
            <span className="ProductID">{productID}</span>
            <span className="ProductCategory">{productCategory}</span>
            <span className="ProductElement">{productElement}</span>
            <span className="ProductProducent">{productProducent}</span>
            <span className="ProductNumber">{productNumber}</span>
            <span className="ProductDate">{productDate}</span>
            <span className="ProductWeight">{productWeight}</span>
        </div>
    );
}

export default Product;