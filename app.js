// import functions and grab DOM elements
import { redirectToPolls, signUpUser, loginUser } from './fetch-utils.js';
// let state
const signInForm = document.getElementById('login');
const signInEmail = document.getElementById('login-email');
const signInPassword = document.getElementById('login-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

signUpForm.addEventListener('submit', async(event) => {
    event.preventDefault();
    const user = await signUpUser(signUpEmail.value, signUpPassword.value);

    if (user) {
        redirectToPolls();

    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async(event) => {
    event.preventDefault();

    const user = await loginUser(signInEmail.value, signInPassword.value);

    if (user) {
        redirectToPolls();

    } else {
        console.error(user);
    }
});