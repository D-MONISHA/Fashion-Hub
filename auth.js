// ================================================
// FASHION HUB - AUTHENTICATION
// ================================================

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login-form');
  const registerForm = document.querySelector('#register-form');
  
  if (loginForm) {
    initializeLoginPage();
  }
  
  if (registerForm) {
    initializeRegisterPage();
  }
});

// ========== LOGIN PAGE ==========
function initializeLoginPage() {
  const form = document.querySelector('#login-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = form.querySelector('input[type="email"]').value.trim();
    const password = form.querySelector('input[type="password"]').value;
    const rememberMe = form.querySelector('input[type="checkbox"]')?.checked || false;
    
    if (!validateEmail(email)) {
      showToast('error', 'Invalid Email', 'Please enter a valid email address');
      return;
    }
    
    if (!validatePassword(password)) {
      showToast('error', 'Invalid Password', 'Password must be at least 6 characters');
      return;
    }
    
    // Simulate login
    const user = {
      email: email,
      loginTime: new Date().toISOString(),
      rememberMe: rememberMe
    };
    
    setLoggedInUser(user);
    
    showToast('success', 'Login Successful', `Welcome back, ${email}!`);
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  });
}

// ========== REGISTER PAGE ==========
function initializeRegisterPage() {
  const form = document.querySelector('#register-form');
  const inputs = form.querySelectorAll('input');
  
  // Real-time validation
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });
    
    input.addEventListener('input', () => {
      clearFieldError(input);
    });
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fullName = form.querySelector('input[name="fullName"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const password = form.querySelector('input[name="password"]').value;
    const confirmPassword = form.querySelector('input[name="confirmPassword"]').value;
    const terms = form.querySelector('input[type="checkbox"]').checked;
    
    // Validation
    let isValid = true;
    
    if (fullName.length < 2) {
      showFieldError(form.querySelector('input[name="fullName"]'), 'Full name must be at least 2 characters');
      isValid = false;
    }
    
    if (!validateEmail(email)) {
      showFieldError(form.querySelector('input[name="email"]'), 'Please enter a valid email address');
      isValid = false;
    }
    
    if (!validatePhone(phone)) {
      showFieldError(form.querySelector('input[name="phone"]'), 'Please enter a valid phone number');
      isValid = false;
    }
    
    if (!validatePassword(password)) {
      showFieldError(form.querySelector('input[name="password"]'), 'Password must be at least 6 characters');
      isValid = false;
    }
    
    if (password !== confirmPassword) {
      showFieldError(form.querySelector('input[name="confirmPassword"]'), 'Passwords do not match');
      isValid = false;
    }
    
    if (!terms) {
      showToast('error', 'Terms Required', 'Please accept the terms and conditions');
      isValid = false;
    }
    
    if (!isValid) return;
    
    // Simulate registration
    const user = {
      fullName: fullName,
      email: email,
      phone: phone,
      registrationTime: new Date().toISOString()
    };
    
    setLoggedInUser(user);
    
    showToast('success', 'Registration Successful', 'Account created successfully!');
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  });
}

// ========== FIELD VALIDATION ==========
function validateField(input) {
  const name = input.getAttribute('name');
  const value = input.value.trim();
  
  switch(name) {
    case 'fullName':
      if (value.length < 2) {
        showFieldError(input, 'Full name must be at least 2 characters');
      } else {
        clearFieldError(input);
      }
      break;
    
    case 'email':
      if (!validateEmail(value)) {
        showFieldError(input, 'Please enter a valid email address');
      } else {
        clearFieldError(input);
      }
      break;
    
    case 'phone':
      if (!validatePhone(value)) {
        showFieldError(input, 'Please enter a valid phone number');
      } else {
        clearFieldError(input);
      }
      break;
    
    case 'password':
      if (!validatePassword(value)) {
        showFieldError(input, 'Password must be at least 6 characters');
      } else {
        clearFieldError(input);
      }
      break;
    
    case 'confirmPassword':
      const passwordInput = input.form.querySelector('input[name="password"]');
      if (value !== passwordInput.value) {
        showFieldError(input, 'Passwords do not match');
      } else {
        clearFieldError(input);
      }
      break;
  }
}

// ========== PASSWORD VISIBILITY TOGGLE ==========
function setupPasswordToggle() {
  const toggleButtons = document.querySelectorAll('.password-toggle');
  
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      btn.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });
  });
}

// Make functions globally available
window.validateField = validateField;
