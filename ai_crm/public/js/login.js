/* =====================================================
   LOGIN.JS – Saarva Admin CRM
   Uses Frappe's real login API endpoint
   ===================================================== */

'use strict';

/**
 * Handle login form submission — calls Frappe's login API
 */
function handleLogin(e) {
  e.preventDefault();

  var username = document.getElementById('loginEmail').value.trim();
  var password = document.getElementById('loginPassword').value;
  var errorEl  = document.getElementById('loginError');
  var btn      = document.getElementById('loginBtn');
  var btnText  = document.getElementById('loginBtnText');

  // Clear any previous error
  errorEl.textContent = '';

  if (!username || !password) {
    errorEl.textContent = '⚠️ Please enter your username and password.';
    return;
  }

  // Loading state
  btn.disabled        = true;
  btnText.textContent = 'Signing in…';

  // Call Frappe's built-in login API
  fetch('/api/method/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Frappe-CSRF-Token': 'fetch'
    },
    body: new URLSearchParams({
      usr: username,
      pwd: password
    })
  })
  .then(function (res) {
    return res.json().then(function (data) {
      return { status: res.status, data: data };
    });
  })
  .then(function (result) {
    console.log('Login API response:', result.status, result.data);

    if (result.status === 200) {
      // ✅ Login success — go to dashboard
      window.location.href = '/crm-dashboard';
    } else {
      // ❌ Wrong credentials — show Frappe's error message
      var msg = 'Invalid username or password.';
      if (result.data) {
        if (result.data.message)       msg = result.data.message;
        else if (result.data.exc_type) msg = 'Incorrect password. Please try again.';
      }
      errorEl.textContent = '❌ ' + msg;
      btn.disabled        = false;
      btnText.textContent = 'Sign In';
    }
  })
  .catch(function () {
    errorEl.textContent = '❌ Network error. Please try again.';
    btn.disabled        = false;
    btnText.textContent = 'Sign In';
  });
}

/**
 * Toggle password field visibility
 */
function togglePassword() {
  var input = document.getElementById('loginPassword');
  var icon  = document.getElementById('eyeIcon');

  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}
