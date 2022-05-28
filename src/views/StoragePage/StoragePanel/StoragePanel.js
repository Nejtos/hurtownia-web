import Product from "../Product/Product";
import "./StoragePanel.css"
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from 'react';

const StoragePanel = ({items}) => {

    const { userState } = useContext(UserContext);

    return (
        <div>
            {(userState.role === "magazynier")
                ? <div>
                    <div className="StoragePanelWrapper" type="selected">
                        <div className="StorageHeaderWrapper">
                            <div className="StorageID">ID produktu</div>
                            <div className="StoragePlace">ID miejsca [rząd | kolumna] </div>
                            <div className="StorageWeight">Ilość [kg]</div>
                        </div>
                        {items.map((item, key) => {
                            return <Product key={key} productID={item.id_produktu} placeID={item.id_miejsca} weight={item.ilosc} />
                        })} 
                    </div>
                </div>
                : <div>
                    <div className="StoragePanelWrapper" type="default">
                        <div className="StorageHeaderWrapper">
                            <div className="StorageID">ID produktu</div>
                            <div className="StoragePlace">ID miejsca [rząd | kolumna] </div>
                            <div className="StorageWeight">Ilość [kg]</div>
                        </div>
                        {items.map((item, key) => {
                            return <Product key={key} productID={item.id_produktu} placeID={item.id_miejsca} weight={item.ilosc} />
                        })}
                    </div>
                </div>
            }
        </div>
    );
}

export default StoragePanel;