import "./RaportsPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import RaportsPanel from "./RaportsPanel/RaportsPanel";
import CreateRaport from "./components/CreateRaport/CreateRaport";

import axios from "axios";
import { baseApiUrl } from "../../services/routes";
import { useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from 'react';

const RaportsPage= () =>
{
    const { userState } = useContext(UserContext);
    const [raports, setRaports] = useState([])
    const [createRaport, setCreateRaport] = useState(false)
    const createRaportClick = () => { setCreateRaport(true) }

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
            {(userState.role === "kontroler jakosci")
            ?<div>
            <div className="AddRaportButton">
                <button className="RaportsPageExteriorButtonBox">
                    <div className="RaportsPageButtonBox" onClick={createRaportClick}>
                        <label> {"Dodaj raport"} </label>
                     </div>
                </button>
            </div>
            {createRaport ? <CreateRaport /> : <RaportsPanel raports={raports}/> }
            </div>
            :<RaportsPanel raports={raports}/>
            }
        </div>
    );
}

export default RaportsPage;