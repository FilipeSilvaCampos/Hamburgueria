// ===== CONFIGURAÇÕES =====
const CONFIG = {
    whatsapp: 'https://wa.me/5573998313527?text=Olá%20Heros%20do%20!%20Gostaria%20de%20fazer%20um%20pedido.',
    appUrl: 'https://app.chefesdoasfalto.com',
    phone: '+55 (73) 99831-3527'
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    observerAnimations();
});

// ===== EVENT LISTENERS =====
function initEventListeners() {
    const buttons = document.querySelectorAll('[data-action]');
    
    buttons.forEach(button => {
        button.addEventListener('click', handleCTA);
    });

    // Smooth scroll para navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Detect scroll para animações
    window.addEventListener('scroll', handleScroll);
}

// ===== HANDLER CTA (Call To Action) =====
function handleCTA(e) {
    const action = e.currentTarget.dataset.action;
    
    // Analytics tracking (substituir pelo seu provider)
    trackEvent('CTA_Click', {
        action: action,
        timestamp: new Date().toISOString()
    });

    switch(action) {
        case 'order':
            redirectToWhatsApp();
            break;
        case 'app':
            redirectToApp();
            break;
        default:
            console.log('Ação não definida:', action);
    }
}

// ===== REDIRECT WHATSAPP =====
function redirectToWhatsApp() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Em mobile, tenta abrir o app primeiro
        window.location.href = 'whatsapp://send?phone=5573998313527&text=' + 
            encodeURIComponent('Olá Street Heros! Gostaria de fazer um pedido.');
        
        // Fallback para web se o app não abrir
        setTimeout(() => {
            window.location.href = CONFIG.whatsapp;
        }, 1000);
    } else {
        // Desktop: abre direto
        window.open(CONFIG.whatsapp, '_blank');
    }
}

// ===== REDIRECT APP =====
function redirectToApp() {
    window.location.href = CONFIG.appUrl;
}

// ===== OBSERVER PARA ANIMAÇÕES =====
function observerAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Opcional: remover observer após animação
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos animáveis
    document.querySelectorAll('.product-card, .differential-card, .testimonial-content').forEach(el => {
        observer.observe(el);
    });
}

// ===== HANDLE SCROLL =====
function handleScroll() {
    const scrollY = window.scrollY;
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        // Parallax effect
        const bgElement = heroSection.querySelector('.hero-background');
        if (bgElement && scrollY < window.innerHeight) {
            bgElement.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    }
}

// ===== ANALYTICS TRACKING =====
function trackEvent(eventName, eventData = {}) {
    // Implementar com sua ferramenta de analytics
    // Exemplo: Google Analytics, Mixpanel, etc.
    console.log(`📊 Event: ${eventName}`, eventData);
    
    // Se usando Google Analytics:
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy loading para imagens
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===== UTILS =====
// Função para copiar para área de transferência
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copiado!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// Função para detectar device
const getDevice = () => {
    const ua = navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
        return 'mobile';
    }
    return 'desktop';
};

// ===== EXPORT =====
window.ChefsApp = {
    redirectToWhatsApp,
    redirectToApp,
    copyToClipboard,
    getDevice
};

