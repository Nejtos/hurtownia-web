import "./AccountsForm.css";

const AccountsForm = () =>
{
	return (
		<form className="AccountsFormWrapper">
			<label className="AccountsLabel">Użytkownik: </label>
			<div className="AccountsInputWrapper">
				<input
					type="email"
					name="email"
					className="AccountsInputForm"
				/>
			</div>
			<label className="AccountsLabel">Nowe hasło: </label>
			<div className="AccountsInputWrapper">
				<input
					type="password"
					name="password"
					className="AccountsInputForm"
				/>
			</div>
			<label className="AccountsLabel">Powtórz hasło: </label>
			<div className="AccountsInputWrapper">
				<input
					type="password"
					name="password"
					className="AccountsInputForm"
				/>
			</div>
		</form>
	);
};

export default AccountsForm;
