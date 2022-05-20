import AuthForm from "../../components/AuthForm/AuthForm";
import LoginForm from "./components/LoginForm/LoginForm";
import {useState} from "react"

const Login = () =>
{
    const [failedState, setFailedState] = useState({isFailed: false, message:''});
    const form = <LoginForm setFailedState={setFailedState} />
   
    return (
        <div>
            <AuthForm
                form={form}
            />
            {failedState.isFailed===true?
                console.log("X") : null
            }
        </div>
    );
}

export default Login;