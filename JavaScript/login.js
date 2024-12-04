const loginSection = document.getElementById('login-section');
const resetSection = document.getElementById('reset-section');
const registrationSection = document.getElementById('registration-section');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const registerLink = document.getElementById('register-link');
const backToLogin = document.getElementById('back-to-login');
const backToLoginFromRegister = document.getElementById('back-to-login-from-register');
const resetForm = document.getElementById('reset-form');
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
const regPasswordInput = document.getElementById('reg-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const googleSignInBtn = document.getElementById('google-signin-btn');

togglePassword.addEventListener('click', () => {
  passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
  togglePassword.innerHTML = (passwordInput.type === 'password') ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
});

forgotPasswordLink.addEventListener('click', () => {
  loginSection.style.display = 'none';
  resetSection.style.display = 'block';
});

registerLink.addEventListener('click', () => {
  loginSection.style.display = 'none';
  registrationSection.style.display = 'block';
});

backToLogin.addEventListener('click', () => {
  resetSection.style.display = 'none';
  loginSection.style.display = 'block';
});

backToLoginFromRegister.addEventListener('click', () => {
  registrationSection.style.display = 'none';
  loginSection.style.display = 'block';
});

resetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Password reset link sent to your email!');
  resetSection.style.display = 'none';
  loginSection.style.display = 'block';
});

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (regPasswordInput.value !== confirmPasswordInput.value) {
    alert("Passwords don't match.");
    return;
  }
  localStorage.setItem('userEmail', document.getElementById('reg-email').value);
  localStorage.setItem('userPassword', regPasswordInput.value);
  alert('Registration successful! You can now log in.');
  registrationSection.style.display = 'none';
  loginSection.style.display = 'block';
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = passwordInput.value;
  const storedEmail = localStorage.getItem('userEmail');
  const storedPassword = localStorage.getItem('userPassword');

  if (email === storedEmail && password === storedPassword) {
    alert('Login successful!');
  } else {
    alert('Invalid email or password. Please try again.');
  }
});

google.accounts.id.initialize({
  client_id: 'YOUR_GOOGLE_CLIENT_ID',
  callback: handleGoogleSignIn,
});

google.accounts.id.renderButton(googleSignInBtn, {
  theme: 'outline',
  size: 'large',
  text: 'signin_with',
  shape: 'rectangular',
});

function handleGoogleSignIn(response) {
  alert('Google Sign-In successful!');
  console.log(response.credential);
}
