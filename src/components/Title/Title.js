import "./Title.css"
import { UserContext } from "../../contexts/UserContext";
import { useContext } from 'react';

const Title = () =>
{
    const { userState } = useContext(UserContext);
    return (
        <div>
            <label type="LeftText">Magazyn mięsny "KABANOS", oddział Ołbin</label>
            <label type="RightText">Zalogowany jako: {userState.role}</label>
        </div>
    );
}

export default Title;