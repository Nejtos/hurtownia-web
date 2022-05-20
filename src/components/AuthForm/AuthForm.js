import "./AuthForm.css";
import Logo from "../Logo/Logo";

const AuthForm = ({ form }) => {
    return (
        <div className="AuthFormBox">
            <Logo />
            <div className="BorderBox" >
                {form}
            </div>
		</div >
	);
};

export default AuthForm;
