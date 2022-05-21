import "./Employee.css"

const Employee = ({ name, position, telNum}) =>
{
    return (
        <div className="EmployeeWrapper">
            <span className="EmployeeName">{name}</span>
            <span className="EmployeePosition">{position}</span>
            <span className="EmployeeTelNum">{telNum}</span>
        </div>
    );
}

export default Employee;