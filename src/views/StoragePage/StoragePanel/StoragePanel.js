import Product from "../Product/Product";
import "./StoragePanel.css"
// import User from "../User/User";

const StoragePanel = () => {
    return (
        <div className="UsersPanelWrapper">
            <div className="HeaderWrapper">
                <div className="StorageID">ID produktu</div>
                <div className="StoragePlace">ID miejsca</div>
                <div className="StorageWeight">Ilość [kg]</div>
            </div>
            <Product productID={155} placeID={123} weight={72} />
            <Product productID={155} placeID={123} weight={72} />
            <Product productID={155} placeID={123} weight={72} />
            <Product productID={155} placeID={123} weight={72} />
            <Product productID={155} placeID={123} weight={72} />
            <Product productID={155} placeID={123} weight={72} />
            <Product productID={155} placeID={123} weight={72} />
            <Product productID={155} placeID={123} weight={72} />
            <Product productID={155} placeID={123} weight={72} />
            <Product productID={155} placeID={123} weight={72} />
            <Product productID={155} placeID={123} weight={72} />
            <Product productID={155} placeID={123} weight={72} />
            
            {/* {users.map((user, key) =>
            {
                return <User key={key} name={(user.email).substring(0, (user.email).indexOf('@'))} role={user.role} capacity={162} used={42} />
            })} */}
        </div>
    );
}

export default StoragePanel;