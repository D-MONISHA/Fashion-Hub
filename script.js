// ================================================
// FASHION HUB - MAIN JAVASCRIPT
// ================================================

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  initializeNavbar();
  initializeSearch();
  updateCartBadge();
  setupEventListeners();
});

// ========== NAVBAR FUNCTIONALITY ==========
function initializeNavbar() {
  const cartIcon = document.querySelector('.cart-icon');
  const wishlistIcon = document.querySelector('.wishlist-icon');
  const loginBtn = document.querySelector('.btn-login');
  
  if (cartIcon) {
    cartIcon.addEventListener('click', () => {
      window.location.href = 'cart.html';
    });
  }
  
  if (wishlistIcon) {
    wishlistIcon.addEventListener('click', () => {
      window.location.href = 'wishlist.html';
    });
  }
  
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const user = getLoggedInUser();
      if (user) {
        showToast('success', 'Welcome', `You're already logged in as ${user.email}`);
      } else {
        window.location.href = 'login.html';
      }
    });
  }
}

// ========== CART MANAGEMENT ==========
function getCart() {
  const cart = localStorage.getItem('fashionhub_cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('fashionhub_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, quantity = 1, selectedSize = null, selectedColor = null) {
  const product = getProductById(productId);
  if (!product) return false;
  
  const cart = getCart();
  const existingItem = cart.find(item => 
    item.id === productId && 
    item.size === selectedSize && 
    item.color === selectedColor
  );
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor
    });
  }
  
  saveCart(cart);
  showToast('success', 'Added to Cart', `${product.name} added to cart`);
  return true;
}

function removeFromCart(productId, size = null, color = null) {
  let cart = getCart();
  cart = cart.filter(item => 
    !(item.id === productId && item.size === size && item.color === color)
  );
  saveCart(cart);
}

function updateCartQuantity(productId, quantity, size = null, color = null) {
  const cart = getCart();
  const item = cart.find(item => 
    item.id === productId && 
    item.size === size && 
    item.color === color
  );
  
  if (item) {
    item.quantity = Math.max(1, quantity);
    saveCart(cart);
  }
}

function clearCart() {
  localStorage.removeItem('fashionhub_cart');
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.querySelector('.cart-badge');
  
  if (badge) {
    if (totalItems > 0) {
      badge.textContent = totalItems;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// ========== WISHLIST MANAGEMENT ==========
function getWishlist() {
  const wishlist = localStorage.getItem('fashionhub_wishlist');
  return wishlist ? JSON.parse(wishlist) : [];
}

function saveWishlist(wishlist) {
  localStorage.setItem('fashionhub_wishlist', JSON.stringify(wishlist));
}

function addToWishlist(productId) {
  const product = getProductById(productId);
  if (!product) return false;
  
  const wishlist = getWishlist();
  if (!wishlist.some(item => item.id === productId)) {
    wishlist.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      dateAdded: new Date().toISOString()
    });
    saveWishlist(wishlist);
    showToast('success', 'Added to Wishlist', `${product.name} added to wishlist`);
    updateWishlistHearts();
    return true;
  }
  return false;
}

function removeFromWishlist(productId) {
  let wishlist = getWishlist();
  wishlist = wishlist.filter(item => item.id !== productId);
  saveWishlist(wishlist);
  updateWishlistHearts();
}

function isInWishlist(productId) {
  const wishlist = getWishlist();
  return wishlist.some(item => item.id === productId);
}

function toggleWishlist(productId) {
  if (isInWishlist(productId)) {
    removeFromWishlist(productId);
  } else {
    addToWishlist(productId);
  }
}

function updateWishlistHearts() {
  const hearts = document.querySelectorAll('.product-wishlist');
  hearts.forEach(heart => {
    const productId = parseInt(heart.getAttribute('data-product-id'));
    if (isInWishlist(productId)) {
      heart.classList.add('active');
      heart.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
      heart.classList.remove('active');
      heart.innerHTML = '<i class="far fa-heart"></i>';
    }
  });
}

// ========== SEARCH FUNCTIONALITY ==========
function initializeSearch() {
  const searchForm = document.querySelector('.search-form');
  if (!searchForm) return;
  
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = searchForm.querySelector('input[type="text"]');
    const query = searchInput.value.trim();
    
    if (query.length > 0) {
      window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    }
  });
}

function searchProducts(query) {
  return searchProducts(query);
}

// ========== PRODUCT RENDERING ==========
function renderProductCard(product) {
  const inWishlist = isInWishlist(product.id);
  
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        ${product.discount ? `<div class="product-discount">${product.discount}%</div>` : ''}
        ${product.badge ? `<div class="product-badge ${product.badge.toLowerCase()}">${product.badge}</div>` : ''}
        <div class="product-wishlist ${inWishlist ? 'active' : ''}" data-product-id="${product.id}">
          <i class="fas fa-heart"></i>
        </div>
      </div>
      <div class="product-content">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <div class="stars">${getStarRating(product.rating)}</div>
          <div class="reviews">${product.reviews} reviews</div>
        </div>
        <div class="product-price">
          <span class="current">$${product.price.toFixed(2)}</span>
          ${product.oldPrice ? `<span class="old">$${product.oldPrice.toFixed(2)}</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCartFromCard(${product.id})">
            <i class="fas fa-shopping-cart"></i> Add
          </button>
          <button class="btn-details" onclick="viewProductDetails(${product.id})">
            Details
          </button>
        </div>
      </div>
    </div>
  `;
}

function getStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars += '<i class="fas fa-star"></i>';
    } else if (i === fullStars && hasHalfStar) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    } else {
      stars += '<i class="far fa-star"></i>';
    }
  }
  
  return stars;
}

// ========== PRODUCT CARD EVENT HANDLERS ==========
function addToCartFromCard(productId) {
  addToCart(productId, 1);
}

function viewProductDetails(productId) {
  window.location.href = `product-details.html?id=${productId}`;
}

// ========== AUTHENTICATION ==========
function getLoggedInUser() {
  const user = localStorage.getItem('fashionhub_user');
  return user ? JSON.parse(user) : null;
}

function setLoggedInUser(user) {
  localStorage.setItem('fashionhub_user', JSON.stringify(user));
}

function logout() {
  localStorage.removeItem('fashionhub_user');
  showToast('success', 'Logged Out', 'You have been logged out');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1500);
}

// ========== FORM VALIDATION ==========
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function validatePhone(phone) {
  const regex = /^\d{10,}$/;
  return regex.test(phone.replace(/\D/g, ''));
}

function showFieldError(input, message) {
  const errorElement = input.nextElementSibling;
  if (errorElement && errorElement.classList.contains('form-validation')) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
  input.classList.add('input-error');
}

function clearFieldError(input) {
  const errorElement = input.nextElementSibling;
  if (errorElement && errorElement.classList.contains('form-validation')) {
    errorElement.classList.remove('show');
  }
  input.classList.remove('input-error');
}

// ========== TOAST NOTIFICATIONS ==========
function showToast(type = 'success', title = '', message = '') {
  const container = document.querySelector('.toast-container') || createToastContainer();
  
  const icons = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-circle',
    warning: 'fa-exclamation-triangle'
  };
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      <i class="fas ${icons[type]}"></i>
    </div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <div class="toast-close">
      <i class="fas fa-times"></i>
    </div>
  `;
  
  container.appendChild(toast);
  
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.remove();
  });
  
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

// ========== UTILITY FUNCTIONS ==========
function setupEventListeners() {
  // Update wishlist hearts when page loads
  updateWishlistHearts();
  
  // Setup product wishlist buttons
  const wishlistButtons = document.querySelectorAll('.product-wishlist');
  wishlistButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const productId = parseInt(btn.getAttribute('data-product-id'));
      toggleWishlist(productId);
    });
  });
}

function getURLParameter(name) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(name);
}

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// ========== INFINITE SCROLL / LAZY LOADING SUPPORT ==========
function observeImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.getAttribute('data-src')) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// ========== PAGE TRANSITIONS ==========
window.addEventListener('beforeunload', () => {
  document.body.style.opacity = '0.5';
});

// Make functions globally available
window.addToCartFromCard = addToCartFromCard;
window.viewProductDetails = viewProductDetails;
window.toggleWishlist = toggleWishlist;
