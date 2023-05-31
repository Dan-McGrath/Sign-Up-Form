const passwordLabel = document.getElementById('password')
const signUpForm = document.getElementById('signup-form'); 
const message = '* Passwords do not match';

const validPassword = () => {
    let newPassword = document.getElementById('new-password');
    let confirmPassword = document.getElementById('password-confirm');
    console.log(confirmPassword.value)
    if (newPassword.value === confirmPassword.value){
        alert('Form Submitted')
        return false
    } else {
        passwordLabel.appendChild('p')
    }
}

console.log(signUpForm)
signUpForm.addEventListener('submit', validPassword())