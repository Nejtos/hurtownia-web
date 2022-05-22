import "./StatusDropdown.css"
import axios from "axios";
import { baseApiUrl } from "../../../../services/routes";

const StatusDropdown = ({ status, id }) => {   
    const handleChange = (e) => {
        axios.post(`${baseApiUrl}/deliveries/update`,{id_dostawy: id, status: e.target.value})
        .catch((error) =>
        {
            console.log(error.response.data);
        });
    }

    if (status === "Nie") {
        return (
            <div className="StatusTypeDropdownWrapper">
                <select onChange={handleChange} name="status" className="SelectionWrapper" >
                    <option value="Nie">Nie</option>
                    <option value="Tak">Tak</option>
                </select>
            </div>
        );
    }else{
        return "Tak"
    }
}

export default StatusDropdown;