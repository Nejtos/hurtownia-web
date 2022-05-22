import "./StatusDropdown.css"
import axios from "axios";
import { baseApiUrl } from "../../../services/routes";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from 'react';

const StatusDropdown = ({ status, id }) => {

    const { userState } = useContext(UserContext);
    const handleChange = (e) => {
        axios.post(`${baseApiUrl}/orders/update`, { id_zamowienia: id, status: e.target.value })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    if (userState.role === "magazynier") return "Brak dostępu"
    else {
        if (status === "Nie") {
            return (
                <div className="StatusTypeDropdownWrapper">
                    <select onChange={handleChange} name="status" className="SelectionWrapper" >
                        <option value="Nie">Nie</option>
                        <option value="Tak">Tak</option>
                    </select>
                </div>
            );
        }else {
            return "Tak"
        }
    }
}

export default StatusDropdown;