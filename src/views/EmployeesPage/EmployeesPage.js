import "./EmployeesPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import EmployeesPanel from "./EmployeesPanel/EmployeesPanel";

import axios from "axios";
import { baseApiUrl } from "../../services/routes";
import { useState, useEffect } from "react";

const EmployeesPage= () =>
{
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        axios.get(`${baseApiUrl}/employees`, { headers: {
            accessToken: localStorage.getItem("accessToken"),
            refreshToken: localStorage.getItem("refreshToken"),
        },}).then((response) =>
        {
            setEmployees(response.data); 
        });
    },[])

    return (
        <div>
            <Title />
            <Navigation />
            <EmployeesPanel employees={employees} />
        </div>
    );
}

export default EmployeesPage;