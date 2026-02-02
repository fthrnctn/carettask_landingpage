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

    // Manage preferences - open modal
    manageBtn.addEventListener('click', () => {
        openCookiePrefs();
    });
}

// Open Cookie Preferences Modal
function openCookiePrefs() {
    const modal = document.getElementById('cookiePrefsModal');

    // Load saved preferences
    loadCookiePreferences();

    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // Close on overlay click
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeCookiePrefs();
        }
    };

    // Close on Escape key
    document.addEventListener('keydown', handleCookiePrefsEscape);
}

function handleCookiePrefsEscape(e) {
    if (e.key === 'Escape') {
        closeCookiePrefs();
    }
}

// Close Cookie Preferences Modal
function closeCookiePrefs() {
    const modal = document.getElementById('cookiePrefsModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';

    // Remove escape key listener
    document.removeEventListener('keydown', handleCookiePrefsEscape);
}

// Load saved cookie preferences into checkboxes
function loadCookiePreferences() {
    const savedPrefs = localStorage.getItem('cookiePreferences');

    if (savedPrefs) {
        const prefs = JSON.parse(savedPrefs);
        document.getElementById('cookieAnalytics').checked = prefs.analytics || false;
        document.getElementById('cookieFunctional').checked = prefs.functional || false;
        document.getElementById('cookieMarketing').checked = prefs.marketing || false;
    } else {
        // Default: all unchecked except necessary
        document.getElementById('cookieAnalytics').checked = false;
        document.getElementById('cookieFunctional').checked = false;
        document.getElementById('cookieMarketing').checked = false;
    }
}

// Save cookie preferences
function savePreferences() {
    const prefs = {
        necessary: true, // Always true
        analytics: document.getElementById('cookieAnalytics').checked,
        functional: document.getElementById('cookieFunctional').checked,
        marketing: document.getElementById('cookieMarketing').checked
    };

    // Save to localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());

    // Apply preferences
    applyCookiePreferences(prefs);

    // Close modal and hide banner
    closeCookiePrefs();
    hideCookieBanner();

    console.log('Cookie preferences saved:', prefs);
}

// Reject all optional cookies
function rejectAllCookies() {
    const prefs = {
        necessary: true,
        analytics: false,
        functional: false,
        marketing: false
    };

    // Update checkboxes
    document.getElementById('cookieAnalytics').checked = false;
    document.getElementById('cookieFunctional').checked = false;
    document.getElementById('cookieMarketing').checked = false;

    // Save to localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    localStorage.setItem('cookieConsent', 'essential');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());

    // Apply preferences
    applyCookiePreferences(prefs);

    // Close modal and hide banner
    closeCookiePrefs();
    hideCookieBanner();

    console.log('All optional cookies rejected');
}

// Apply cookie preferences (enable/disable tracking)
function applyCookiePreferences(prefs) {
    if (prefs.analytics) {
        // Initialize analytics (Google Analytics, etc.)
        console.log('Analytics cookies enabled');
    } else {
        // Disable/remove analytics
        console.log('Analytics cookies disabled');
    }

    if (prefs.functional) {
        // Enable functional features
        console.log('Functional cookies enabled');
    } else {
        console.log('Functional cookies disabled');
    }

    if (prefs.marketing) {
        // Enable marketing/advertising
        console.log('Marketing cookies enabled');
    } else {
        console.log('Marketing cookies disabled');
    }
}

function setCookieConsent(type) {
    localStorage.setItem('cookieConsent', type);
    localStorage.setItem('cookieConsentDate', new Date().toISOString());

    // Set granular preferences based on type
    let prefs;
    if (type === 'all') {
        prefs = {
            necessary: true,
            analytics: true,
            functional: true,
            marketing: true
        };
        console.log('All cookies accepted');
    } else {
        prefs = {
            necessary: true,
            analytics: false,
            functional: false,
            marketing: false
        };
        console.log('Only essential cookies');
    }

    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    applyCookiePreferences(prefs);
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
