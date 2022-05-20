import "./RaportsPage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import RaportsPanel from "./RaportsPanel/RaportsPanel";

const RaportsPage= () =>
{
    return (
        <div>
            <Title />
            <Navigation />
            <RaportsPanel />
        </div>
    );
}

export default RaportsPage;