
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, 
  createUserWithEmailAndPassword, 
  signOut, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from "firebase/auth";


import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; 

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize auth service
const authService = getAuth();

// Initialize Firestore database
const database = getFirestore(); 

// Access the folks collection in Firestore
const folksCollection = collection(database, "folks");

import { validateSignInForm } from "./signInValidation";
import { validateSignUpForm } from "./signUpValidation";
import renderData from "./renderData";

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Query DOM elements
  const emailInput = document.querySelector(".email");
  const passwordInput = document.querySelector(".password");
  const signInButton = document.querySelector(".btn");
  const emailError = document.querySelector(".email-error");
  const passwordError = document.querySelector(".password-error");
  const signInForm = document.querySelector(".sign-in-form");
  const submissionError = document.querySelector(".submission-error");

  const signUpFirstname = document.querySelector(".firstname");
  const signUpLastname = document.querySelector(".lastname");
  const signUpEmail = document.querySelector(".sign-up-email");
  const signUpPassword = document.querySelector(".sign-up-password");
  const signUpError = document.querySelector(".sign-up-error");
  const signUpForm = document.querySelector(".sign-up-form");
  const closeSignUpFormButton = document.querySelector(".sign-up-form_close");
  const openSignUpFormButton = document.querySelector(".sign-up-form_open");
  const signUpFormContainer = document.querySelector(".sign-up-form-container");
  const signUpButton = document.querySelector(".sign-up-button");

  const signOutButton = document.querySelector(".sign-out-button");


 
  // Main content div
  const mainContentContainer = document.querySelector(".main-content-container");

  // Open and close sign-up form
  openSignUpFormButton.addEventListener("click", (e) =>{
    e.preventDefault();
    signUpFormContainer.style.display = "block";
  });

  closeSignUpFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    signUpFormContainer.style.display = "none";
  });

  // Sign-up user
  function signUpUser() {
    const { signUpErrorStatus } = validateSignUpForm(
      signUpFirstname.value.trim(), 
      signUpLastname.value.trim(), 
      signUpEmail.value.trim(), 
      signUpPassword.value.trim(), 
      signUpError
    );

    if (signUpErrorStatus()) {
      return;
    } else {
      const newUser = {
        firstname: signUpFirstname.value.trim(),
        lastname: signUpLastname.value.trim(),
        signUpEmail: signUpEmail.value.trim(),
        signUpPassword: signUpPassword.value.trim()
      };

      createUserWithEmailAndPassword(authService, newUser.signUpEmail, newUser.signUpPassword)
      .then(() => {
        signUpForm.reset();
        signUpFormContainer.style.display = 'none';
      })
      .catch((err) => console.log(err.message));
    }
  }

  signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    signUpUser();
  });

  // Sign out user
  function signOutUser() {
    signOut(authService)
    .then(() => {
      console.log("Signed out successfully");
      signOutButton.style.visibility = "hidden";
      signInForm.style.display = "block";
    })
    .catch((err) => console.log(err.message));
  }

  signOutButton.addEventListener("click", (e) => {
    e.preventDefault();
    signOutUser();
  });

  // Sign in user
  function signInUser() {

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      
      signInWithEmailAndPassword(authService, email, password)
      .then(() => {
        signInForm.reset();
        signOutButton.style.visibility = 'visible';
        console.log('Signed in');
        // Redirect to the main content page after successful sign-in
        window.location.href = "./index.html";  
      })
      .catch(err => {
        submissionError.textContent = err.message;
      });
  }

  signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    const { signInFormStatus } = validateSignInForm(
      emailInput.value,
      passwordInput.value,
      emailError,
      passwordError
    );
    if (signInFormStatus()){
      return;
    } else{
      signInUser();
    }
    
  });



  
  // Fetch data from API and store in Firestore
 async function fetchData() {
    try {
      const dataExists = await checkDataExists();
      if (!dataExists) {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const data = await response.json();
        await storeData(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();

  async function storeData(data) {
    try {
      for (let folk of data) {
        const newFolk = {
          firstname: folk.first_name,
          lastname: folk.last_name,
          email: folk.email,
          avatar: folk.avatar,
        };
        await addDoc(folksCollection, newFolk);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function checkDataExists() {
    const snapshot = await getDocs(folksCollection);
    return !snapshot.empty;
  }

  onAuthStateChanged(authService, (user) => {
    if (user) {

      getDocs(folksCollection)
      .then((snapshot) => {
        const folksData = snapshot.docs.map(doc => doc.data());
        renderData(folksData);
        signOutButton.style.visibility = "visible";
        signInForm.style.display = "none";
        signUpFormContainer.style.display = "none";
        mainContentContainer.style.display = "flex";
      })
      .catch(err => console.log(err.message));
    } else {
      mainContentContainer.style.display = "none";
      signOutButton.style.display = "flex";
    }
  });
});
