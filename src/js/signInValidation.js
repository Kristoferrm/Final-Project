
const validateSignInForm = (email, password, emailErrorElement, passErrorElement)=>{
	const errors = {
		erreroStatus: false,
		emailError: '',
		passwordError: '',
	}

	if (!email && !password){

			errors.erreroStatus = true,
			errors.emailErrorElement = "Email is required!",
			errors.passwordError = "Password is required!";

			emailErrorElement.style.visibility = 'visible';
			passErrorElement.style.visibility = 'visible';

			emailErrorElement.textContent = errors.emailError;
			passErrorElement.textContent = errors.passwordError;

	} else if (!email){
		errors.erreroStatus = true,
			errors.emailErrorElement = "Email is required!",
			errors.passwordError = "";

			emailErrorElement.style.visibility = 'visible';
			passErrorElement.style.visibility = '';

			emailErrorElement.textContent = errors.emailError;
			passErrorElement.textContent = errors.passwordError; 

	} else if(!password){
		errors.erreroStatus = true,
			errors.emailErrorElement = "",
			errors.passwordError = "Password is required!";

			emailErrorElement.style.visibility = 'hidden';
			passErrorElement.style.visibility = 'visible';

			emailErrorElement.textContent = errors.emailError;
			passErrorElement.textContent = errors.passwordError; 

	} else {
		errors.erreroStatus = true,
			errors.emailErrorElement = "",
			errors.passwordError = "";

			emailErrorElement.style.visibility = 'hidden';
			passErrorElement.style.visibility = 'hidden';

			emailErrorElement.textContent = errors.emailError;
			passErrorElement.textContent = errors.passwordError; 	
	}
	
const signInFormStatus = ()=>{
	return errors.erreroStatus
}

return { signInFormStatus}
};

export {validateSignInForm}