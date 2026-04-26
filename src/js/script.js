// ============================================
//  IT ZONE - LOGIN FORM VALIDATION
// ============================================

// 1. Get references to HTML elements we need
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('errorMsg');

// 2. Listen for the form submission
loginForm.addEventListener('submit', function (event) {

    // Stop the page from refreshing (default form behavior)
    event.preventDefault();

    // 3. Read the input values (and remove extra spaces)
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // 4. Reset previous error styles
    clearErrors();

    // 5. Validation checks (one by one)

    // Check 1: Email cannot be empty
    if (email === '') {
        showError(emailInput, 'Please enter your email');
        return; // stop here
    }

    // Check 2: Email must have valid format (e.g. user@example.com)
    if (!isValidEmail(email)) {
        showError(emailInput, 'Please enter a valid email address');
        return;
    }

    // Check 3: Password cannot be empty
    if (password === '') {
        showError(passwordInput, 'Please enter your password');
        return;
    }

    // Check 4: Password must be at least 6 characters
    if (password.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters');
        return;
    }

    // 6. If all checks pass — login is successful!
    errorMsg.style.color = '#10b981'; // green
    errorMsg.textContent = '✓ Login successful! Redirecting...';

    // Simulate redirect after 1.5 seconds
    setTimeout(function () {
        alert('Welcome back, ' + email + '!');
        // window.location.href = 'home.html';   // uncomment for real redirect
    }, 1500);
});

// ============================================
//  HELPER FUNCTIONS
// ============================================

// Function to display an error message
function showError(inputElement, message) {
    inputElement.classList.add('invalid');
    errorMsg.style.color = '#ef4444'; // red
    errorMsg.textContent = message;
    inputElement.focus();
}

// Function to clear all error styles
function clearErrors() {
    emailInput.classList.remove('invalid');
    passwordInput.classList.remove('invalid');
    errorMsg.textContent = '';
}

// Function to check if an email is valid using a regex pattern
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// ============================================
//  PASSWORD SHOW/HIDE TOGGLE
// ============================================
const togglePassword = document.getElementById('togglePassword');
if (togglePassword) {
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    });
}

// ============================================
//  BONUS: Real-time validation feedback
// ============================================

// Remove red border as soon as the user starts typing again
emailInput.addEventListener('input', function () {
    emailInput.classList.remove('invalid');
});

passwordInput.addEventListener('input', function () {
    passwordInput.classList.remove('invalid');
});