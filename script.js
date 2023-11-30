const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-login');
const iconClose = document.querySelector('.close-ic');
var loginForm = document.querySelector('.form-box.login');
var registerForm = document.querySelector('.form-box.register');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

btnPopup.addEventListener('click', () => {
    const rect = btnPopup.getBoundingClientRect();
    wrapper.style.position = 'fixed';
    wrapper.style.top = `${rect.bottom + -40}px`; // Add 20px to the top position
    wrapper.style.left = `${rect.left}px`;
    wrapper.classList.add('active-popup');
});

// Initially hide the register form
registerForm.style.display = 'none';

// When the "Sign up" link is clicked, hide the login form and show the register form
registerLink.addEventListener('click', function(event) {
  event.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

// When the "Login" link is clicked, hide the register form and show the login form
loginLink.addEventListener('click', function(event) {
  event.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});