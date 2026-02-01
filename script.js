// CaretTask Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Cookie Banner
    initCookieBanner();

    // Smooth scrolling for anchor links
    initSmoothScroll();

    // Header scroll effect
    initHeaderScroll();

    // Intersection Observer for animations
    initScrollAnimations();
});

// Cookie Banner Functions
function initCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');
    const manageBtn = document.getElementById('managePrefs');

    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');

    if (!cookieChoice) {
        // Show banner after a short delay
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    // Accept all cookies
    acceptBtn.addEventListener('click', () => {
        setCookieConsent('all');
        hideCookieBanner();
    });

    // Reject optional cookies
    rejectBtn.addEventListener('click', () => {
        setCookieConsent('essential');
        hideCookieBanner();
    });

    // Manage preferences (could open a modal)
    manageBtn.addEventListener('click', () => {
        // For now, just show an alert
        // In production, this would open a preferences modal
        alert('Çerez tercihleri ayarları yakında eklenecek.');
    });
}

function setCookieConsent(type) {
    localStorage.setItem('cookieConsent', type);
    localStorage.setItem('cookieConsentDate', new Date().toISOString());

    // Here you would initialize analytics, tracking, etc. based on consent
    if (type === 'all') {
        console.log('All cookies accepted');
        // Initialize analytics, marketing cookies, etc.
    } else {
        console.log('Only essential cookies');
        // Only essential cookies
    }
}

function hideCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.classList.remove('show');
}

// Smooth Scrolling
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 10) {
            header.style.boxShadow = '0 2px 10px rgba(16, 42, 67, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// Scroll Animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
    `;
    document.head.appendChild(style);
}

// Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-1px)';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Progress bar animation in mockup
function animateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        let width = 0;
        const targetWidth = 60;
        const duration = 1500;
        const interval = 20;
        const increment = (targetWidth / duration) * interval;

        const animation = setInterval(() => {
            width += increment;
            if (width >= targetWidth) {
                width = targetWidth;
                clearInterval(animation);
            }
            progressBar.style.width = width + '%';
        }, interval);
    }
}

// Trigger progress bar animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBar();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}
