import HomeBoxes from "../../views/HomePage/components/HomeBoxes";
import "./Navigation.css"
import { UserContext } from "../../contexts/UserContext";
import { useContext } from 'react';

const Navigation = () => {
    const { userState } = useContext(UserContext);
    return (
        <div>
            {/* <div className="RowBox">
                <HomeBoxes name="Stan magazynu" />
                <HomeBoxes name="Produkty"  />
                <HomeBoxes name="Dostawy" />
                <HomeBoxes name="Zamówienia" />
                <HomeBoxes name="Raporty" />
                <HomeBoxes name="Pracownicy" />
                <HomeBoxes name="Konta" />
            </div> */}
            {(() => {
                switch (userState.role) {
                    case 'kierownik magazynu':
                        return <div>
                            <div className="RowBox">
                                <HomeBoxes name="Stan magazynu" />
                                <HomeBoxes name="Produkty" />
                                <HomeBoxes name="Dostawy" />
                                <HomeBoxes name="Zamówienia" />
                                <HomeBoxes name="Raporty" />
                                <HomeBoxes name="Pracownicy" />
                                <HomeBoxes name="Konta" />
                            </div>
                        </div>
                    case 'kierownik zmiany':
                        return <div>
                            <div className="RowBox">
                                <HomeBoxes name="Stan magazynu" />
                                <HomeBoxes name="Produkty" />
                                <HomeBoxes name="Dostawy" />
                                <HomeBoxes name="Zamówienia" />
                                <HomeBoxes name="Raporty" />
                                <HomeBoxes name="Pracownicy" />
                            </div>
                        </div>
                    case 'kontroler jakosci':
                        return <div>
                            <div className="RowBox">
                                <HomeBoxes name="Stan magazynu" />
                                <HomeBoxes name="Produkty" />
                                <HomeBoxes name="Raporty" />
                            </div>
                        </div>
                    case 'magazynier':
                        return <div>
                            <div className="RowBox">
                                <HomeBoxes name="Stan magazynu" />
                                <HomeBoxes name="Produkty" />
                                <HomeBoxes name="Zamówienia" />
                            </div>
                        </div>
                    default:
                }
            })()}
        </div>
    );
}

export default Navigation;