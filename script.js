// Function to handle Buy Now button clicks (legacy function for backward compatibility)
function buyPoster(posterTitle) {
    // Show an alert with the poster title
    alert(`Thank you for your interest in "${posterTitle}"!\n\nPrice: ₹129\n\nThis would redirect to the checkout page in a full implementation.`);
    
    // In a real application, this would:
    // 1. Add the item to cart
    // 2. Redirect to checkout page
    // 3. Handle payment processing
    // 4. Update inventory
    
    // For now, we'll log the action for demonstration
    console.log(`User clicked Buy Now for: ${posterTitle}`);
}

// Function to handle Buy Now with pricing options
function buyPosterWithOptions(button) {
    const posterCard = button.closest('.blog-poster-card') || button.closest('.poster-card');
    if (!posterCard) {
        console.error('Poster card not found');
        return;
    }
    
    const selector = posterCard.querySelector('.price-selector');
    if (!selector) {
        console.error('Price selector not found');
        return;
    }
    
    const posterName = selector.dataset.posterName;
    const selectedPrice = selector.value;
    const selectedOption = selector.options[selector.selectedIndex].text;
    
    alert(`Thank you for your interest in "${posterName}"!\n\nSelected: ${selectedOption}\n\nNote: Delivery charges are additional and vary based on your location.\n\nThis would redirect to the checkout page in a full implementation.`);
    
    console.log(`User clicked Buy Now for: ${posterName} - ${selectedOption}`);
}

// Function to add to cart with pricing options
function addToCartWithOptions(button) {
    const posterCard = button.closest('.blog-poster-card') || button.closest('.poster-card');
    if (!posterCard) {
        console.error('Poster card not found');
        return;
    }
    
    const selector = posterCard.querySelector('.price-selector');
    if (!selector) {
        console.error('Price selector not found');
        return;
    }
    
    const posterId = selector.dataset.posterId;
    const posterName = selector.dataset.posterName;
    const posterImage = selector.dataset.posterImage;
    const selectedPrice = parseInt(selector.value);
    const selectedOption = selector.options[selector.selectedIndex].text;
    
    // Create unique ID with option
    const uniqueId = `${posterId}-${selectedPrice}`;
    
    const existingItem = cart.find(item => item.id === uniqueId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: uniqueId,
            name: `${posterName} (${selectedOption})`,
            price: selectedPrice,
            image: posterImage,
            quantity: 1,
            option: selectedOption
        });
    }
    
    // Visual feedback on button
    if (button) {
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.classList.add('added');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('added');
        }, 1500);
    }
    
    saveCartToStorage();
    updateCartUI();
    console.log(`Added to cart: ${posterName} - ${selectedOption}`);
}

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.poster-image img');
    
    images.forEach(img => {
        // Add loading class initially
        img.parentElement.classList.add('loading');
        
        // Remove loading class when image loads
        img.addEventListener('load', function() {
            this.parentElement.classList.remove('loading');
        });
        
        // Handle image load errors
        img.addEventListener('error', function() {
            this.parentElement.classList.remove('loading');
            this.alt = 'Poster image unavailable';
            console.log('Failed to load image:', this.src);
        });
    });
});

// Add smooth scrolling for better user experience
document.addEventListener('DOMContentLoaded', function() {
    // Add a subtle entrance animation to poster cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initially hide cards for animation
    const posterCards = document.querySelectorAll('.poster-card');
    posterCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Mobile menu toggle function
window.toggleMobileMenu = function() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('show');
};

// Handle mobile menu navigation
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close mobile menu when a link is clicked
            const mobileNav = document.getElementById('mobileNav');
            mobileNav.classList.remove('show');
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('buy-btn')) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.target.click();
        }
    }
});

// Track user interactions for analytics (placeholder)
function trackInteraction(action, item) {
    // In a real application, this would send data to analytics service
    console.log(`Analytics: ${action} - ${item}`);
}

// Add click tracking to buy buttons
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const posterTitle = this.parentElement.querySelector('h4').textContent;
            trackInteraction('buy_button_click', posterTitle);
        });
    });
});

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form-inner');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});

// Handle newsletter subscription
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                alert(`Thank you for subscribing! We'll send updates to ${email}`);
                emailInput.value = '';
                console.log('Newsletter subscription:', email);
            }
        });
    }
});

// Shopping Cart Functionality
let cart = [];

// Load cart from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    updateCartUI();
});

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('filmytea_cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('filmytea_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Add item to cart
window.addToCart = function(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    // Visual feedback on button
    if (event && event.target) {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.classList.add('added');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('added');
        }, 1500);
    }
    
    saveCartToStorage();
    updateCartUI();
    console.log('Added to cart:', name);
};

// Remove item from cart
window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    saveCartToStorage();
    updateCartUI();
};

// Update item quantity
window.updateQuantity = function(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCartToStorage();
            updateCartUI();
        }
    }
};

// Toggle cart dropdown
window.toggleCart = function() {
    const cartDropdown = document.getElementById('cartDropdown');
    cartDropdown.classList.toggle('show');
    
    // Close cart when clicking outside
    document.addEventListener('click', function closeCart(e) {
        if (!e.target.closest('.cart-wrapper')) {
            cartDropdown.classList.remove('show');
            document.removeEventListener('click', closeCart);
        }
    });
};

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        checkoutBtn.disabled = true;
    } else {
        const cartItemsHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">₹${item.price}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart('${item.id}')" title="Remove item">×</button>
            </div>
        `).join('');
        
        cartItems.innerHTML = cartItemsHTML + '<p class="delivery-note">*Delivery charges additional based on location</p>';
        checkoutBtn.disabled = false;
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;
}

// Proceed to checkout
window.proceedToCheckout = function() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Close cart dropdown
    document.getElementById('cartDropdown').classList.remove('show');
    
    // Redirect to checkout page
    window.location.href = 'checkout.html';
};

// Horizontal Scrolling Functionality
document.addEventListener('DOMContentLoaded', function() {
    const posterGrid = document.getElementById('posterGrid');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    
    if (posterGrid && scrollLeftBtn && scrollRightBtn) {
        const scrollAmount = 300;
        
        // Scroll left
        scrollLeftBtn.addEventListener('click', function() {
            posterGrid.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Scroll right
        scrollRightBtn.addEventListener('click', function() {
            posterGrid.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Update button states based on scroll position
        function updateScrollButtons() {
            const isAtStart = posterGrid.scrollLeft <= 0;
            const isAtEnd = posterGrid.scrollLeft >= posterGrid.scrollWidth - posterGrid.clientWidth;
            
            scrollLeftBtn.disabled = isAtStart;
            scrollRightBtn.disabled = isAtEnd;
        }
        
        // Check scroll position on load and scroll
        posterGrid.addEventListener('scroll', updateScrollButtons);
        updateScrollButtons(); // Initial check
    }
    
    // Initialize smooth scroll animations for vertical poster grid
    initScrollAnimations();
});

// Smooth scroll animation for poster cards
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Also trigger arrow animation after a delay
                const arrow = entry.target.querySelector('.spring-path');
                if (arrow) {
                    setTimeout(() => {
                        arrow.style.strokeDashoffset = '0';
                    }, 600);
                }
            }
        });
    }, observerOptions);

    // Observe all vertical poster cards
    const posterCards = document.querySelectorAll('.vertical-poster-card');
    posterCards.forEach(card => {
        observer.observe(card);
    });
}
