// ================================================
// FASHION HUB - CART FUNCTIONALITY
// ================================================

document.addEventListener('DOMContentLoaded', () => {
  initializeCartPage();
});

function initializeCartPage() {
  renderCart();
  setupCartEventListeners();
}

// ========== RENDER CART ==========
function renderCart() {
  const cartContainer = document.querySelector('.cart-items');
  const cart = getCart();
  
  if (!cartContainer) return;
  
  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <i class="fas fa-shopping-cart"></i>
        </div>
        <h3>Your Cart is Empty</h3>
        <p>Looks like you haven't added anything yet.</p>
        <a href="products.html" class="btn btn-primary mt-3">Continue Shopping</a>
      </div>
    `;
    updateCartSummary();
    return;
  }
  
  cartContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item" data-index="${index}">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-category">${item.category}</div>
        ${item.size ? `<div class="cart-item-size"><strong>Size:</strong> ${item.size}</div>` : ''}
        ${item.color ? `<div class="cart-item-color"><strong>Color:</strong> ${item.color}</div>` : ''}
        <div class="cart-item-price">${formatCurrency(item.price)}</div>
        <div class="quantity-control">
          <button class="qty-decrease" data-index="${index}">−</button>
          <input type="number" class="qty-input" value="${item.quantity}" min="1" data-index="${index}">
          <button class="qty-increase" data-index="${index}">+</button>
        </div>
        <div class="cart-item-remove" data-index="${index}">
          <i class="fas fa-trash"></i> Remove
        </div>
      </div>
    </div>
  `).join('');
  
  updateCartSummary();
}

// ========== UPDATE CART SUMMARY ==========
function updateCartSummary() {
  const cart = getCart();
  const summaryContainer = document.querySelector('.cart-summary');
  
  if (!summaryContainer) return;
  
  if (cart.length === 0) {
    summaryContainer.innerHTML = '';
    return;
  }
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = subtotal * 0.1; // 10% discount for demo
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal - discount + shipping;
  
  summaryContainer.innerHTML = `
    <h3>Order Summary</h3>
    <div class="summary-row">
      <span>Subtotal</span>
      <span>${formatCurrency(subtotal)}</span>
    </div>
    <div class="summary-row">
      <span>Discount (10%)</span>
      <span>-${formatCurrency(discount)}</span>
    </div>
    <div class="summary-row">
      <span>Shipping</span>
      <span>${shipping === 0 ? 'FREE' : formatCurrency(shipping)}</span>
    </div>
    <div class="summary-row total">
      <span>Total</span>
      <span>${formatCurrency(total)}</span>
    </div>
    <div style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-direction: column;">
      <button class="btn btn-primary" style="width: 100%;" onclick="proceedToCheckout()">
        Proceed to Checkout
      </button>
      <a href="products.html" class="btn btn-secondary" style="width: 100%; text-align: center;">
        Continue Shopping
      </a>
    </div>
  `;
}

// ========== SETUP EVENT LISTENERS ==========
function setupCartEventListeners() {
  // Quantity decrease
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('qty-decrease')) {
      const index = parseInt(e.target.getAttribute('data-index'));
      decreaseQuantity(index);
    }
  });
  
  // Quantity increase
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('qty-increase')) {
      const index = parseInt(e.target.getAttribute('data-index'));
      increaseQuantity(index);
    }
  });
  
  // Quantity input
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('qty-input')) {
      const index = parseInt(e.target.getAttribute('data-index'));
      const quantity = parseInt(e.target.value);
      updateQuantityDirect(index, quantity);
    }
  });
  
  // Remove item
  document.addEventListener('click', (e) => {
    if (e.target.closest('.cart-item-remove')) {
      const index = parseInt(e.target.closest('.cart-item-remove').getAttribute('data-index'));
      removeItemFromCart(index);
    }
  });
  
  // Clear cart button
  const clearBtn = document.querySelector('.btn-clear-cart');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear your entire cart?')) {
        clearCart();
        renderCart();
        showToast('success', 'Cart Cleared', 'Your cart has been cleared');
      }
    });
  }
}

// ========== CART MANIPULATION ==========
function increaseQuantity(index) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].quantity += 1;
    saveCart(cart);
    renderCart();
    showToast('success', 'Updated', 'Quantity increased');
  }
}

function decreaseQuantity(index) {
  const cart = getCart();
  if (cart[index] && cart[index].quantity > 1) {
    cart[index].quantity -= 1;
    saveCart(cart);
    renderCart();
    showToast('success', 'Updated', 'Quantity decreased');
  }
}

function updateQuantityDirect(index, quantity) {
  quantity = parseInt(quantity);
  if (isNaN(quantity) || quantity < 1) return;
  
  const cart = getCart();
  if (cart[index]) {
    cart[index].quantity = quantity;
    saveCart(cart);
    renderCart();
  }
}

function removeItemFromCart(index) {
  const cart = getCart();
  if (cart[index]) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
    showToast('success', 'Removed', `${itemName} removed from cart`);
  }
}

// ========== CHECKOUT ==========
function proceedToCheckout() {
  const user = getLoggedInUser();
  
  if (!user) {
    showToast('warning', 'Login Required', 'Please login to proceed with checkout');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
    return;
  }
  
  showToast('success', 'Processing', 'Proceeding to checkout...');
  
  // Simulate checkout process
  setTimeout(() => {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    showCheckoutModal(total, user);
  }, 500);
}

function showCheckoutModal(total, user) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>Order Confirmation</h2>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
      </div>
      <div class="modal-body">
        <p><strong>Shipping to:</strong> ${user.email}</p>
        <p><strong>Order Total:</strong> ${formatCurrency(total)}</p>
        <div style="background: #f0f0f0; padding: 1rem; border-radius: 4px; margin: 1rem 0;">
          <p style="margin: 0; color: #666;">
            This is a demo e-commerce site. The order will not be processed.
            This demonstrates a complete shopping experience with cart management,
            wishlist, and checkout flow.
          </p>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">
          Cancel
        </button>
        <button class="btn btn-primary" onclick="completeOrder()">
          Confirm Order
        </button>
      </div>
    </div>
  `;
  
  const style = document.createElement('style');
  style.innerHTML = `
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
    }
    .modal-content {
      background: white;
      border-radius: 8px;
      max-width: 500px;
      width: 90%;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    }
    .modal-header {
      padding: 2rem;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .modal-header h2 {
      margin: 0;
    }
    .modal-close {
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      color: #666;
    }
    .modal-body {
      padding: 2rem;
    }
    .modal-footer {
      padding: 2rem;
      border-top: 1px solid #e0e0e0;
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(modal);
}

function completeOrder() {
  clearCart();
  document.querySelector('.modal-overlay')?.remove();
  
  showToast('success', 'Order Confirmed', 'Thank you for your purchase!');
  
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2000);
}

// Make functions globally available
window.proceedToCheckout = proceedToCheckout;
window.completeOrder = completeOrder;
