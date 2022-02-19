import React from "react";
import "../components/formInput.css";
const FormInput = props => {
	const { label, errorMessage, onChange, id, ...others } = props;
	const [focused, setFocused] = React.useState(false);

	const handleFocus = e => {
		setFocused(true);
	};

	return (
		<div className="formInput">
			<label>{label}</label>
			<input
				{...others}
				onChange={onChange}
				onBlur={handleFocus}
				onFocus={() => others.name === "confirmPassword" && setFocused(true)}
				focused={focused.toString()}
			/>
			<span>{errorMessage}</span>
		</div>
	);
};

export default FormInput;
