import Product from "../Product/Product";
import "./StoragePanel.css"
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from 'react';

const StoragePanel = () => {

    const { userState } = useContext(UserContext);

    return (
        <div>
        {(userState.role === "magazynier") 
        ?<div>
        <div className="StoragePanelWrapper" type="selected">
            <div className="StorageHeaderWrapper">
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
        </div>
        </div>
        :<div>
        <div className="StoragePanelWrapper" type="default">
            <div className="StorageHeaderWrapper">
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
        </div>
        </div>
        }
        </div>
    );
}

export default StoragePanel;