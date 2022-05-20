import "./AccountsPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import AccountsPanel from "./AccountsPanel/AccountsPanel";

const AccountsPage = () => {
    return (
        <div>
            <Title />
            <Navigation />
            <AccountsPanel />
            <div className="ResetButton">
                <button className="ExteriorResetButtonBox">
                    <div className="ResetButtonBox">
                        <label> Zresetuj </label>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default AccountsPage;