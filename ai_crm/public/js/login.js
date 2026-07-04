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

  // Resolve username → email for known users
  var loginUsr = resolveUsername(username);

  // Call Frappe's built-in login API
  fetch('/api/method/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Frappe-CSRF-Token': 'fetch'
    },
    body: new URLSearchParams({
      usr: loginUsr,
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
      // ✅ Login success — redirect based on who logged in
      var redirectTo = getRedirectTarget(username);

      // Check if there's a redirect-to param in URL (from middleware)
      var urlParams = new URLSearchParams(window.location.search);
      var requestedPage = urlParams.get('redirect-to');

      if (requestedPage && isAllowedForUser(username, requestedPage)) {
        window.location.href = requestedPage;
      } else {
        window.location.href = redirectTo;
      }

    } else {
      // ❌ Wrong credentials
      var msg = 'Invalid login credentials.';
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
 * Maps short usernames to their Frappe email
 * Frappe login API needs the email, not the username
 */
function resolveUsername(username) {
  var lower = username.toLowerCase();
  var map = {
    'tellecaller': 'tellecaller@saarva.com',
    'administrator': 'Administrator'
  };
  return map[lower] || username;
}

/**
 * Returns the home page for a given username
 */
function getRedirectTarget(username) {
  var lower = username.toLowerCase();

  // Telecaller users → telecaller home
  if (lower === 'tellecaller' || lower === 'tellecaller@saarva.com') {
    return '/telecaller-home';
  }

  // Admin / Administrator → main dashboard
  return '/crm-dashboard';
}

/**
 * Check if a user is allowed to access a certain page
 * Prevents telecallers from being redirected to admin pages
 */
function isAllowedForUser(username, page) {
  var lower = username.toLowerCase();
  var isTelecaller = (lower === 'tellecaller' || lower === 'tellecaller@saarva.com');

  if (isTelecaller) {
    // Telecallers can only go to their own page
    return page === '/telecaller-home';
  }

  // Admin can go anywhere
  return true;
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
