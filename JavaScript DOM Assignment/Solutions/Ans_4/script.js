const form = document.getElementById('myForm');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usernameValid = username.value.length >= 3;
    const passwordValid = password.value.length >= 8;

    if (usernameValid && passwordValid) {
        alert('Form Validation successful');
    } else {
        alert('Form Validation failed');
    }
});
