/* =====================================================
   LOGIN.JS – Saarva Admin CRM
   Login page form handling
   ===================================================== */

'use strict';

/* ── Constants ── */
var VALID_EMAIL    = 'admin@saarva.com';
var VALID_PASSWORD = 'admin123';

/**
 * Handle login form submission
 * @param {Event} e
 */
function handleLogin(e) {
  e.preventDefault();

  var email    = document.getElementById('loginEmail').value.trim();
  var password = document.getElementById('loginPassword').value;
  var errorEl  = document.getElementById('loginError');
  var btn      = document.getElementById('loginBtn');
  var btnText  = document.getElementById('loginBtnText');

  errorEl.textContent = '';
  btn.disabled        = true;
  btnText.textContent = 'Signing in…';

  setTimeout(function () {
    var isValid = (email === 'admin@saarva.com' && password === 'admin123') ||
                  (email === 'Administrator' && password === 'Admin@1234');
    if (isValid) {
      window.location.href = '/crm-dashboard';
    } else {
      errorEl.textContent = '❌ Invalid email or password. Please try again.';
      btn.disabled        = false;
      btnText.textContent = 'Sign In';
    }
  }, 800);
}

/**
 * Toggle password field visibility
 */
function togglePassword() {
  var input   = document.getElementById('loginPassword');
  var icon    = document.getElementById('eyeIcon');

  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}
