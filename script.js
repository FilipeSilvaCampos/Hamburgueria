// ===============================================
// San Diego - Interactive Features
// ===============================================

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = 'none';
    } else if (currentScroll > lastScroll) {
        // Scroll down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 5px 30px rgba(255, 94, 0, 0.2)';
    }
    
    lastScroll = currentScroll;
});

// Add transition to navbar
navbar.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe menu cards
document.querySelectorAll('.menu-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe review cards
document.querySelectorAll('.review-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Button click effects
const buttons = document.querySelectorAll('button, .card-btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Order button functionality
const orderButtons = document.querySelectorAll('.card-btn');
orderButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Get the burger name
        const card = this.closest('.menu-card');
        const burgerName = card.querySelector('.card-title').textContent;
        const burgerPrice = card.querySelector('.card-price').textContent;
        
        // Show notification
        showNotification(`${burgerName} added to cart - ${burgerPrice}`);
    });
});

// Hero CTA buttons
const explorMenuBtn = document.querySelector('.btn-primary');
const reserveTableBtn = document.querySelector('.btn-secondary');

if (explorMenuBtn) {
    explorMenuBtn.addEventListener('click', () => {
        document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
    });
}

if (reserveTableBtn) {
    reserveTableBtn.addEventListener('click', () => {
        showNotification('Sistema de reservas em breve! Ligue para +55 (73) 3288-0000');
    });
}

// Notification system
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: rgba(26, 26, 26, 0.95);
        backdrop-filter: blur(20px);
        color: #FFFFFF;
        padding: 20px 30px;
        border-radius: 8px;
        border: 2px solid #FF5E00;
        box-shadow: 0 10px 40px rgba(255, 94, 0, 0.4);
        z-index: 10000;
        font-size: 14px;
        font-weight: 500;
        animation: slideIn 0.4s ease, slideOut 0.4s ease 2.6s;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-burger');
    const heroText = document.querySelector('.hero-content');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (heroText && scrolled < window.innerHeight) {
        heroText.style.transform = `translateY(${scrolled * 0.15}px)`;
        heroText.style.opacity = 1 - (scrolled / 600);
    }
});

// Add hover effect to menu cards (3D tilt)
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Typing effect for hero tagline (on page load)
window.addEventListener('load', () => {
    const tagline = document.querySelector('.hero-title .tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        tagline.style.opacity = '1';
        
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index < text.length) {
                tagline.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);
    }
});

// Add "loaded" class to body for initial animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Initial fade-in for hero elements
    const heroTitle = document.querySelector('.hero-title .san');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) {
        heroTitle.style.animation = 'fadeInUp 1s ease 0.2s forwards';
        heroTitle.style.opacity = '0';
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.animation = 'fadeInUp 1s ease 0.6s forwards';
        heroSubtitle.style.opacity = '0';
    }
    
    if (heroButtons) {
        heroButtons.style.animation = 'fadeInUp 1s ease 0.8s forwards';
        heroButtons.style.opacity = '0';
    }
});

// Add fade-in animation
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeStyle);

// Console welcome message
console.log('%c🍔 Bem-vindo ao Pro Burguer - Alma da Califórnia 🍔', 'color: #FF5E00; font-size: 20px; font-weight: bold;');
console.log('%cHambúrgueres Gourmet Premium em Porto Seguro', 'color: #C0C0C0; font-size: 14px;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #FF5E00;');
