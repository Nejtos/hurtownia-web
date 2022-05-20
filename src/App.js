import { baseApiUrl } from "./services/routes";
import Login from "./views/LoginPage/Login";
import HomePage from "./views/HomePage/HomePage";
import StoragePage from "./views/StoragePage/StoragePage";
import RaportsPage from "./views/RaportsPage/RaportsPage";
import ProductsPage from "./views/ProductsPage/ProductsPage";
import OrdersPage from "./views/OrdersPage/OrdersPage";
import EmployeePage from "./views/EmployeePage/EmployeePage";
import DeliveryPage from "./views/DeliveryPage/DeliveryPage";
import AccountsPage from "./views/AccountsPage/AccountsPage";
import axiosInstance from "./services/axiosInstance";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useState, useEffect } from "react";

function App() {
    const [userState, setUserState] = useState({
        email: "",
        role: "",
        status: false,
    });
    //checking if user is auth after reloading page
    useEffect(() => {
        axiosInstance
            .get(`${baseApiUrl}/auth`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                    refreshToken: localStorage.getItem("refreshToken"),
                },
            })
            .then((response) => {
                if (response.data.error) {
                    setUserState({ status: false });
                }else{
                    setUserState({
                        email: response.data.email,
                        role: response.data.role,
                        status: true,
                    });
                }
            });
    }, []);

    return (
        <UserContext.Provider value={{ userState, setUserState }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/magazyn" element={<StoragePage />} />
                    <Route path="/produkty" element={<ProductsPage />} />
                    <Route path="/dostawy" element={<DeliveryPage/>} />
                    <Route path="/zamowienia" element={<OrdersPage />} />
                    <Route path="/raporty" element={<RaportsPage />} />
                    <Route path="/pracownicy" element={<EmployeePage />} />
                    <Route path="/konta" element={<AccountsPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;