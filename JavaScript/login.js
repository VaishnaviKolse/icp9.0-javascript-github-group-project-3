// Toggle to reset password form
document.getElementById('forgot-password-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('reset-section').style.display = 'block';
});

// Toggle to registration form
document.getElementById('register-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('registration-section').style.display = 'block';
});

// Back to login from reset password
document.getElementById('back-to-login').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('reset-section').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
});

// Back to login from registration
document.getElementById('back-to-login-from-register').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('registration-section').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
});

// Form submission for login, reset password, and registration (can be modified based on your logic)
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle login logic here
});

document.getElementById('reset-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle password reset logic here
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle registration logic here
});

// Toggle password visibility for login form
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
    
togglePassword.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  togglePassword.classList.toggle('fa-eye-slash');
  togglePassword.classList.toggle('fa-eye');
});

// Removed the eye toggle for registration password
// const toggleRegPassword = document.getElementById('toggle-reg-password');
// const regPasswordInput = document.getElementById('reg-password');
    
// toggleRegPassword.addEventListener('click', () => {
//   const type = regPasswordInput.type === 'password' ? 'text' : 'password';
//   regPasswordInput.type = type;
//   toggleRegPassword.classList.toggle('fa-eye-slash');
//   toggleRegPassword.classList.toggle('fa-eye');
// });

// Removed the eye toggle for confirm password
// const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
// const confirmPasswordInput = document.getElementById('confirm-password');
    
// toggleConfirmPassword.addEventListener('click', () => {
//   const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
//   confirmPasswordInput.type = type;
//   toggleConfirmPassword.classList.toggle('fa-eye-slash');
//   toggleConfirmPassword.classList.toggle('fa-eye');
// });