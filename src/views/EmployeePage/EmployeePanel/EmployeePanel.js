import "./EmployeePanel.css"
// import User from "../User/User";

const EmployeePanel = () => {
    return (
        <div className="EmployeePanelWrapper">
            <div className="EmployeeHeaderWrapper">
                <div className="EmployeeName">Imię i nazwisko</div>
                <div className="EmployeePosition">Stanowisko</div>
                <div className="EmployeeNumber">Tel. kontaktowy</div>
            </div>
            {/* {users.map((user, key) =>
            {
                return <User key={key} name={(user.email).substring(0, (user.email).indexOf('@'))} role={user.role} capacity={162} used={42} />
            })} */}
        </div>
    );
}

export default EmployeePanel;