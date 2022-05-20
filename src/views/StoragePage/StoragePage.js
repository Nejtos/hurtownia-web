import "./StoragePage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import StoragePanel from "./StoragePanel/StoragePanel";

const StoragePage = () =>
{
    return (
        <div>
            <Title />
            <Navigation />
            <StoragePanel />
        </div>
    );
}

export default StoragePage;