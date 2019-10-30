//Error message when user types wrong input
const emailInput = document.querySelector('#email-input');
const submit = document.querySelector('#submit');
const errorText = document.querySelectorAll('.error--text');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.value).toLowerCase());
}

function errorInput(input) {
    input.style.backgroundImage = 'url(images/icon-error.svg)';
    input.style.paddingRight = '50px';
    input.style.border = '2px solid var(--accent-red)';
    input.style.marginBottom = '5px';
}

function correctInput(input, errorText) {
    input.style.backgroundImage = 'none';
    input.style.paddingRight = '10px';
    input.style.border = '1px solid var(--neutral-light-grey)';
    errorText.innerHTML = '';
}

submit.addEventListener('click', function(event) {
    event.preventDefault();
    if (emailInput.value === '') {
        errorInput(emailInput);
        errorText[0].innerHTML = 'Email field cannot be empty';
    }
    else if (validateEmail(emailInput) === false) {
        errorInput(emailInput);
        errorText[0].innerHTML = 'Email is incorrect';
    } else {
        correctInput(emailInput, errorText[0]);
    }
});