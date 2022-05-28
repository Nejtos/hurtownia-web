import "./Logo.css"
import logo from "../../icons/logo.png"


const Logo = () =>
{
	return (
		<div className="LogoWrapper">
			<img src={logo} alt="Main logo" />
		</div>
	);
}

export default Logo;