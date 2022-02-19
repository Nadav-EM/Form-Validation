import "./App.css";
import React from "react";
import FormInput from "./components/FormInput";

function App() {
	const [values, setValues] = React.useState({
		username: "",
		email: "",
		birthday: "",
		password: "",
		confirmPassword: "",
	});

	const inputs = [
		{
			id: 1,
			name: "username",
			type: "text",
			placeholder: "Username",
			errorMessage:
				"Username should be 3-16 characters and shouldn't include any special character!",
			label: "Username",
			pattern: "^[A-Za-z0-9]{3,16}",
			required: true,
		},
		{
			id: 2,
			name: "email",
			type: "email",
			placeholder: "Email",
			errorMessage: "It should be a valid email address!",
			label: "Email",
			required: true,
		},
		{
			id: 3,
			name: "birthday",
			type: "date",
			placeholder: "Birthday",
			errorMessage: "",
			label: "Birthday",
		},
		{
			id: 4,
			name: "password",
			type: "password",
			placeholder: "Password",
			errorMessage:
				"Password should be 8-20 Character and include at leat 1 letter, 1 number and 1 special character!",
			label: "Password",
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true,
		},
		{
			id: 5,
			name: "confirmPassword",
			type: "password",
			placeholder: "Confirm Password",
			errorMessage: "Password don't match!",
			label: "Confirm Password",
			pattern: values.password,
			required: true,
		},
	];

	const handleSubmit = e => {
		e.preventDefault();
	};

	const onChange = e => {
		console.log([e.target.name]);
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	console.log(values);
	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<h1>Register</h1>
				{inputs.map(item => {
					return (
						<FormInput
							key={item.id}
							{...item}
							value={values[item.name]}
							onChange={onChange}
						/>
					);
				})}

				<button>Submit</button>
			</form>
		</div>
	);
}

export default App;
