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

    // Coming soon links & language dropdown
    initComingSoonLinks();
    initLanguageDropdown();
});

// Cookie Banner Functions
function initCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');
    const manageBtn = document.getElementById('managePrefs');

    // Alt sayfalarda cookie banner yoksa, sadece mevcut tercihleri uygula
    if (!cookieBanner || !acceptBtn || !rejectBtn || !manageBtn) {
        // Mevcut cookie tercihlerini uygula (analytics icin onemli)
        const savedPrefs = localStorage.getItem('cookiePreferences');
        if (savedPrefs) {
            try {
                applyCookiePreferences(JSON.parse(savedPrefs));
            } catch (e) {}
        }
        return;
    }

    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');

    if (!cookieChoice) {
        // Show banner after a short delay
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    } else {
        // Mevcut tercihleri uygula
        const savedPrefs = localStorage.getItem('cookiePreferences');
        if (savedPrefs) {
            try {
                applyCookiePreferences(JSON.parse(savedPrefs));
            } catch (e) {}
        }
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
        // Initialize CaretTask Analytics
        console.log('Analytics cookies enabled');
        if (window.CaretTaskAnalytics) {
            window.CaretTaskAnalytics.start();
        }
    } else {
        // Disable analytics
        console.log('Analytics cookies disabled');
        if (window.CaretTaskAnalytics) {
            window.CaretTaskAnalytics.stop();
        }
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
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            header.style.boxShadow = isDark
                ? '0 2px 10px rgba(0, 0, 0, 0.3)'
                : '0 2px 10px rgba(16, 42, 67, 0.1)';
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
        const targetWidth = 30;
        const duration = 1500;
        const interval = 20;
        const increment = (targetWidth / duration) * interval;

        const animation = setInterval(() => {
            width += increment;
            if (width >= targetWidth) {
                width = targetWidth;
                clearInterval(animation);
                animateTaskCompletion(progressBar, targetWidth);
            }
            progressBar.style.width = width + '%';
        }, interval);
    }
}

// Animate progress bar by a given amount, call onComplete when done
function advanceProgressBar(progressBar, fromWidth, amount, duration, onComplete) {
    const targetWidth = fromWidth + amount;
    const interval = 20;
    const increment = (amount / duration) * interval;
    let w = fromWidth;

    const anim = setInterval(() => {
        w += increment;
        if (w >= targetWidth) {
            w = targetWidth;
            clearInterval(anim);
            if (onComplete) onComplete(w);
        }
        progressBar.style.width = w + '%';
    }, interval);
}

// Phase 1: Middle card completion chain
function animateTaskCompletion(progressBar, currentWidth) {
    const taskCards = document.querySelectorAll('.mockup-tasks .task-card');
    if (taskCards.length < 2) return;

    const middleCard = taskCards[1];
    const checkbox = middleCard.querySelector('.checkbox');

    // Step 1: Checkbox fills green with checkmark (after 500ms pause)
    setTimeout(() => {
        if (checkbox) checkbox.classList.add('completed');

        // Step 2: Card border turns green (400ms after checkbox)
        setTimeout(() => {
            middleCard.classList.add('completed');

            // Step 3: Progress bar advances (400ms after border)
            setTimeout(() => {
                advanceProgressBar(progressBar, currentWidth, 20, 800, (newWidth) => {
                    // Phase 2: First card warning → completion
                    animateFirstCard(progressBar, newWidth, taskCards[0]);
                });
            }, 400);
        }, 400);
    }, 500);
}

// Phase 2: First card — warning state → completion
function animateFirstCard(progressBar, currentWidth, firstCard) {
    const checkbox = firstCard.querySelector('.checkbox');
    const warningIcon = firstCard.querySelector('.task-warning-icon');

    // Step 1: Red border (after 500ms pause)
    setTimeout(() => {
        firstCard.classList.add('warning');

        // Step 2: Warning icon appears (500ms after red border)
        setTimeout(() => {
            if (warningIcon) warningIcon.classList.add('show');

            // Step 3: Checkbox fills green (1000ms — let warning linger)
            setTimeout(() => {
                if (checkbox) checkbox.classList.add('completed');

                // Step 4: Card turns green, warning icon hides (400ms after checkbox)
                setTimeout(() => {
                    firstCard.classList.remove('warning');
                    firstCard.classList.add('completed');
                    if (warningIcon) {
                        warningIcon.classList.remove('show');
                        warningIcon.classList.add('hide');
                    }

                    // Step 5: Progress bar advances (400ms after green)
                    setTimeout(() => {
                        advanceProgressBar(progressBar, currentWidth, 20, 800);
                    }, 400);
                }, 400);
            }, 1000);
        }, 500);
    }, 500);
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

// Auth Modal Functions
function getSubmittedEmails() {
    const emails = localStorage.getItem('carettask_submitted_emails');
    return emails ? JSON.parse(emails) : [];
}

function saveSubmittedEmail(email) {
    const emails = getSubmittedEmails();
    if (!emails.includes(email)) {
        emails.push(email);
        localStorage.setItem('carettask_submitted_emails', JSON.stringify(emails));
    }
}

function resetAuthModalContent() {
    const content = document.querySelector('.auth-modal-content, .auth-success-content');
    if (content) {
        content.className = 'auth-modal-content';
        content.innerHTML = `
            <div class="auth-icon">🚀</div>
            <h4>CaretTask Yakında Yayında!</h4>
            <p>Uygulamamız şu anda geliştirme aşamasında. Yayına çıktığında ve önemli gelişmelerden sizi haberdar edelim mi?</p>
            <input type="email" id="authEmailInput" class="auth-email-input" placeholder="E-posta adresiniz">
            <div id="authEmailError" class="auth-email-error"></div>
            <button class="auth-submit-btn" onclick="submitAuthEmail()">Beni Haberdar Et</button>
            <p class="auth-privacy-note">E-postanızı yalnızca CaretTask ile ilgili önemli güncellemeler için kullanacağız.</p>
        `;
    }
}

function showAlreadySubscribedState() {
    const content = document.querySelector('.auth-modal-content, .auth-success-content');
    if (content) {
        const emails = getSubmittedEmails();
        const lastEmail = emails[emails.length - 1];
        content.className = 'auth-success-content';
        content.innerHTML = `
            <div class="auth-success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#334E68" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <h2>Zaten Kayıtlısınız!</h2>
            <p><strong>${lastEmail}</strong> adresi ile daha önce kayıt oldunuz. CaretTask yayına girdiğinde sizi haberdar edeceğiz.</p>
            <button class="auth-success-btn" onclick="closeAuthModal()">Tamam, Kapat</button>
            <button class="auth-add-another-btn" onclick="showAddAnotherEmail()">Başka Mail Ekle</button>
        `;
    }
}

function showAddAnotherEmail() {
    resetAuthModalContent();
    setTimeout(() => {
        const emailInput = document.getElementById('authEmailInput');
        if (emailInput) emailInput.focus();
    }, 100);
}

let authModalSource = 'signup';

function openAuthModal(type) {
    const modal = document.getElementById('authModal');
    const title = document.getElementById('authModalTitle');
    authModalSource = type || 'signup';

    // Set title based on type
    if (type === 'login') {
        title.textContent = 'Giriş Yapın';
    } else {
        title.textContent = 'Ücretsiz Başlayın';
    }

    // Check if user already submitted email
    const submittedEmails = getSubmittedEmails();
    if (submittedEmails.length > 0) {
        showAlreadySubscribedState();
    } else {
        resetAuthModalContent();
    }

    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // Focus email input if form is shown
    setTimeout(() => {
        const emailInput = document.getElementById('authEmailInput');
        if (emailInput) emailInput.focus();
    }, 300);

    // Close on overlay click
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeAuthModal();
        }
    };

    // Close on Escape key
    document.addEventListener('keydown', handleAuthModalEscape);
}

function handleAuthModalEscape(e) {
    if (e.key === 'Escape') {
        closeAuthModal();
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleAuthModalEscape);
}

function submitAuthEmail() {
    const emailInput = document.getElementById('authEmailInput');
    const errorDiv = document.getElementById('authEmailError');
    const email = emailInput.value.trim();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errorDiv.textContent = 'Lütfen e-posta adresinizi girin.';
        emailInput.focus();
        return;
    }
    if (!emailRegex.test(email)) {
        errorDiv.textContent = 'Lütfen geçerli bir e-posta adresi girin.';
        emailInput.focus();
        return;
    }

    // Clear error
    errorDiv.textContent = '';

    // Disable button while submitting
    const submitBtn = document.querySelector('.auth-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Gönderiliyor...';

    // Submit to n8n webhook
    submitWaitlistToWebhook(email).then(function() {
        saveSubmittedEmail(email);
        showAuthSuccessState();
    }).catch(function() {
        saveSubmittedEmail(email);
        showAuthSuccessState();
    });
}

function showAuthSuccessState() {
    const content = document.querySelector('.auth-modal-content, .auth-success-content');
    if (!content) return;
    content.className = 'auth-success-content';
    // Static trusted HTML - no user input
    const div = document.createElement('div');

    const iconWrap = document.createElement('div');
    iconWrap.className = 'auth-success-icon';
    iconWrap.insertAdjacentHTML('afterbegin', '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#334E68" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>');
    div.appendChild(iconWrap);

    const h2 = document.createElement('h2');
    h2.textContent = 'Teşekkürler!';
    div.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = 'E-posta adresiniz kaydedildi. CaretTask yayına girdiğinde sizi haberdar edeceğiz.';
    div.appendChild(p);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'auth-success-btn';
    closeBtn.textContent = 'Tamam, Kapat';
    closeBtn.onclick = closeAuthModal;
    div.appendChild(closeBtn);

    const addBtn = document.createElement('button');
    addBtn.className = 'auth-add-another-btn';
    addBtn.textContent = 'Başka Mail Ekle';
    addBtn.onclick = showAddAnotherEmail;
    div.appendChild(addBtn);

    content.replaceChildren(...div.childNodes);
}

async function submitWaitlistToWebhook(email) {
    const WAITLIST_WEBHOOK_URL = 'https://n8n.carettask.com/webhook/carettask-waitlist';

    const payload = {
        email: email,
        source: authModalSource,
        submittedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
        screenSize: window.innerWidth + 'x' + window.innerHeight,
        language: navigator.language || '',
        referrer: document.referrer || ''
    };

    const response = await fetch(WAITLIST_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error('Webhook failed');
    return true;
}

// Coming Soon Toast
function showComingSoonToast() {
    const existing = document.querySelector('.coming-soon-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'coming-soon-toast';
    toast.textContent = 'Çok yakında geliyor!';
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

function initComingSoonLinks() {
    document.querySelectorAll('.coming-soon-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showComingSoonToast();
        });
    });
}

// Language Dropdown
function toggleLanguageDropdown(e) {
    e.stopPropagation();
    const dropdown = e.currentTarget.closest('.language-dropdown');
    dropdown.classList.toggle('open');
}

function selectLanguage(lang) {
    const dropdown = document.querySelector('.language-dropdown');
    if (dropdown) dropdown.classList.remove('open');

    if (lang === 'en') {
        showComingSoonToast();
        return;
    }
}

function initLanguageDropdown() {
    document.addEventListener('click', function(e) {
        const dropdown = document.querySelector('.language-dropdown');
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
}

// Theme Toggle (Dark Mode)
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    // Update meta theme-color for mobile browsers
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
        metaTheme.setAttribute('content', next === 'dark' ? '#0F1B2D' : '#334E68');
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    // Only auto-switch if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});
