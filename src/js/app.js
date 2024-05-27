import firebaseConfig from "./firebaseConfig";

import {validateSignInForm} from './signInValidation'

const emailInput = document.querySelector('.email');
const passwordInPut = document.querySelector('.passord');
const signInButton = document.querySelector('.btn');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const signInForm = document.querySelector('.sign-in-form');
const submissionError = document.querySelector('.submission-error');

signInButton.addEventListener('click', (e)=>{
	e.preventDefault();
	validateSignInForm(emailInput.value, passwordInPut.value, emailError, passwordError);
});

