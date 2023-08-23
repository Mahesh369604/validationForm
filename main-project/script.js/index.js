const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('password2');
const number = document.getElementById('number');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});

function validate() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = cpassword.value.trim();
    const numberValue = number.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(cpassword, 'Confirm Password cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(cpassword, 'Passwords do not match');
    } else {
        setSuccessFor(cpassword);
    }

    if (numberValue === '') {
        setErrorFor(number, 'Number cannot be blank');
    } else {
        setSuccessFor(number);
    }

    if (isFormValid()) {
        // Show success message
        showSuccessMessage('Account created successfully!');
      }
    }
    
    function isFormValid() {
      // Validation logic for each input field...
    
      // Return true if all fields are valid, otherwise false
      return username.value.trim() !== '' &&
      email.value.trim() !== '' &&
      password.value.trim() !== '' &&
      cpassword.value.trim() !== '' &&
      number.value.trim() !== '';
    }
    
   


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.remove('success');
    formControl.classList.add('error');
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

function showSuccessMessage(message) {
    successMessage.innerText = message;
    successMessage.style.display = 'block';
  }
