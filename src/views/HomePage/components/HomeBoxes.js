import "./HomeBoxes.css"
import { useNavigate } from "react-router-dom"

const HomeBoxes = ({ name }) => {
    const navigate = useNavigate()
    return (
        <div>
            {(() => {
                switch (name) {
                    case 'Stan magazynu':
                        return <button className="SettingBox" onClick={() => { navigate('/magazyn', { replace: true }); }}>
                            <div className="SettingsInternalBox">
                                <label> {name} </label>
                            </div>
                        </button>
                    case 'Produkty':
                        return <button className="SettingBox" onClick={() => { navigate('/produkty') }}>
                            <div className="SettingsInternalBox">
                                <label> {name} </label>
                            </div>
                        </button>
                    case 'Zamówienia':
                        return <button className="SettingBox" onClick={() => { navigate('/zamowienia') }}>
                            <div className="SettingsInternalBox">
                                <label> {name} </label>
                            </div>
                        </button>
                    case 'Dostawy':
                        return <button className="SettingBox" onClick={() => { navigate('/dostawy') }}>
                            <div className="SettingsInternalBox">
                                <label> {name} </label>
                            </div>
                        </button>
                    case 'Raporty':
                        return <button className="SettingBox" onClick={() => { navigate('/raporty') }}>
                            <div className="SettingsInternalBox">
                                <label> {name} </label>
                            </div>
                        </button>
                    case 'Pracownicy':
                        return <button className="SettingBox" onClick={() => { navigate('/pracownicy') }}>
                            <div className="SettingsInternalBox">
                                <label> {name} </label>
                            </div>
                        </button>
                    case 'Konta':
                        return <button className="SettingBox" onClick={() => { navigate('/konta') }}>
                            <div className="SettingsInternalBox">
                                <label> {name} </label>
                            </div>
                        </button>
                    default:
                }
            })()}
        </div>
    );
}

export default HomeBoxes;