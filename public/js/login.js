const loginFormHandler = async function(event) {
  event.preventDefault();
  const username = document.querySelector('#username-input');
  const password = document.querySelector('#password-input');
  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Login failed');
  }
};
document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);