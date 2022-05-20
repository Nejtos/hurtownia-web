import "./EmployeePage.css"
import Title from "../../components/Title/Title";
import Navigation from "../../components/NavigationBar/Navigation";
import EmployeePanel from "./EmployeePanel/EmployeePanel";

const EmployeePage= () =>
{
    return (
        <div>
            <Title />
            <Navigation />
            <EmployeePanel />
        </div>
    );
}

export default EmployeePage;