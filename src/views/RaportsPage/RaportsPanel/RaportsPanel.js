import "./RaportsPanel.css"
// import User from "../User/User";

const RaportsPanel = () => {
    return (
        <div className="RaportsPanelWrapper">
            <div className="RaportsHeaderWrapper">
                <div className="RaportsID">ID</div>
                <div className="RaportsData">Data</div>
                <div className="RaportsDetails">Szczegóły</div>
            </div>
            {/* {users.map((user, key) =>
            {
                return <User key={key} name={(user.email).substring(0, (user.email).indexOf('@'))} role={user.role} capacity={162} used={42} />
            })} */}
        </div>
    );
}

export default RaportsPanel;