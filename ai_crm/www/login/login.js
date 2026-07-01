// =====================================================
// LOGIN PAGE JS - Saarva Admin
// =====================================================

// Dummy credentials (replace with Frappe API call)
const VALID_EMAIL    = 'admin@saarva.com';
const VALID_PASSWORD = 'admin123';

/**
 * Handle login form submission
 */
function handleLogin(e) {
    e.preventDefault();

    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
    const btn      = document.getElementById('loginBtn');
    const btnText  = document.getElementById('btnText');

    // Clear error
    errorMsg.textContent = '';

    // Loading state
    btn.disabled = true;
    btnText.textContent = 'Signing in...';

    // Simulate API delay
    setTimeout(() => {
        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            // Success → redirect to dashboard
            window.location.href = '/crm-dashboard';
        } else {
            errorMsg.textContent = '❌ Invalid email or password. Please try again.';
            btn.disabled = false;
            btnText.textContent = 'Sign In';
        }
    }, 800);
}

/**
 * Toggle password visibility
 */
function togglePassword() {
    const input   = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}
