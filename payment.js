const credentials = {
  username: 'selene',
  password: 'selene@0152'
};

function verifyPaymentCredentials() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === credentials.username && password === credentials.password) {
    document.getElementById('payment-section').classList.remove('hidden');
    alert('Access granted. Redirecting to payment.html...');
    window.location.href = 'payment.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  verifyPaymentCredentials();
});
