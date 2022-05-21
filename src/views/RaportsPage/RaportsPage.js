import "./RaportsPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import RaportsPanel from "./RaportsPanel/RaportsPanel";

import axios from "axios";
import { baseApiUrl } from "../../services/routes";
import { useState, useEffect } from "react";


const RaportsPage= () =>
{
    const [raports, setRaports] = useState([])
    useEffect(() =>
    {
        axios.get(`${baseApiUrl}/raports`, { headers: {
            accessToken: localStorage.getItem("accessToken"),
            refreshToken: localStorage.getItem("refreshToken"),
        },}).then((response) =>
        {
            setRaports(response.data); 
        });
    },[])

    return (
        <div>
            <Title />
            <Navigation />
            <RaportsPanel raports={raports}/>
        </div>
    );
}

export default RaportsPage;