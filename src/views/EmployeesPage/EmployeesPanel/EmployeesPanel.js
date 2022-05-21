import "./EmployeesPanel.css"
import Employee from "../Employee/Employee";

const EmployeesPanel = ({employees}) => {
    return (
        <div className="EmployeesPanelWrapper">
            <div className="EmployeesHeaderWrapper">
                <div className="EmployeesName">Imię i nazwisko</div>
                <div className="EmployeesPosition">Stanowisko</div>
                <div className="EmployeesNumber">Tel. kontaktowy</div>
            </div>
            {employees.map((employee, key) => {
                return <Employee key={key} name={employee.fullName} position={employee.position} telNum={employee.telNum} />
            })}
        </div>
    );
}

export default EmployeesPanel;