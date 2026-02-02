/**
 * CaretTask Analytics - n8n Webhook Integration
 *
 * Sayfa goruntulemesi, tiklama, scroll ve oturum suresi verilerini
 * n8n webhook'una gonderir.
 *
 * Cookie consent sistemiyle entegre calisir.
 */

(function() {
    'use strict';

    // ==================== AYARLAR ====================
    // n8n webhook URL'inizi buraya yazin
    const WEBHOOK_URL = 'https://n8n.carettask.com/webhook/site-analytics';

    // ==================== DEGISKENLER ====================
    const sessionId = generateSessionId();
    const startTime = Date.now();
    let isEnabled = false;
    let eventsQueue = [];
    let maxScrollDepth = 0;
    let scrollMilestones = [25, 50, 75, 100];
    let reachedMilestones = [];

    // ==================== YARDIMCI FONKSIYONLAR ====================

    function generateSessionId() {
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
            return crypto.randomUUID();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    function getPageInfo() {
        return {
            sessionId: sessionId,
            url: window.location.href,
            page: window.location.pathname,
            title: document.title,
            referrer: document.referrer || 'direct',
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            language: navigator.language,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight
        };
    }

    function sendEvent(eventType, eventData) {
        // Webhook URL ayarlanmamissa uyari ver
        if (WEBHOOK_URL === 'YOUR_N8N_WEBHOOK_URL') {
            console.warn('[CaretTask Analytics] Webhook URL ayarlanmamis. analytics.js dosyasindaki WEBHOOK_URL degiskenini guncelleyin.');
            return;
        }

        // Analytics aktif degilse kuyruğa ekle
        if (!isEnabled) {
            eventsQueue.push({ type: eventType, data: eventData });
            return;
        }

        const payload = {
            type: eventType,
            ...getPageInfo(),
            ...eventData
        };

        // Beacon API kullan (sayfa kapansa bile calisir)
        if (eventType === 'session_end' || eventType === 'tab_hidden') {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(WEBHOOK_URL, blob);
        } else {
            fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                keepalive: true
            }).catch(function() {
                // Sessizce devam et
            });
        }
    }

    // ==================== TRACKING FONKSIYONLARI ====================

    // Sayfa goruntulemesi
    function trackPageView() {
        sendEvent('pageview', {});
    }

    // Tiklama takibi
    function trackClicks() {
        document.addEventListener('click', function(e) {
            const target = e.target;
            const clickable = target.closest('button, a, [data-track]');

            if (clickable) {
                const eventData = {
                    elementType: clickable.tagName.toLowerCase(),
                    elementText: (clickable.innerText || '').slice(0, 100).trim(),
                    elementId: clickable.id || null,
                    elementClass: clickable.className ? clickable.className.toString().slice(0, 100) : null,
                    href: clickable.href || null
                };

                // data-track attribute varsa ekle
                if (clickable.dataset && clickable.dataset.track) {
                    eventData.trackLabel = clickable.dataset.track;
                }

                sendEvent('click', eventData);
            }
        });
    }

    // Scroll derinligi takibi
    function trackScrollDepth() {
        window.addEventListener('scroll', function() {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight <= 0) return;

            const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

            if (scrollPercent > maxScrollDepth) {
                maxScrollDepth = scrollPercent;

                // Milestone'lara ulasıldığında event gonder
                scrollMilestones.forEach(function(milestone) {
                    if (scrollPercent >= milestone && reachedMilestones.indexOf(milestone) === -1) {
                        reachedMilestones.push(milestone);
                        sendEvent('scroll_depth', { depth: milestone });
                    }
                });
            }
        }, { passive: true });
    }

    // Oturum suresi takibi
    function trackSessionDuration() {
        // Sayfa kapatilirken
        window.addEventListener('beforeunload', function() {
            const durationSeconds = Math.round((Date.now() - startTime) / 1000);
            sendEvent('session_end', {
                durationSeconds: durationSeconds,
                maxScrollDepth: maxScrollDepth
            });
        });

        // Tab gizlendiginde
        document.addEventListener('visibilitychange', function() {
            if (document.visibilityState === 'hidden') {
                const durationSeconds = Math.round((Date.now() - startTime) / 1000);
                sendEvent('tab_hidden', {
                    durationSeconds: durationSeconds,
                    maxScrollDepth: maxScrollDepth
                });
            }
        });
    }

    // ==================== ANA FONKSIYONLAR ====================

    // Analytics'i baslat
    function startTracking() {
        if (isEnabled) return;

        isEnabled = true;
        console.log('[CaretTask Analytics] Baslatildi. Session:', sessionId);

        // Kuyrukta bekleyen eventleri gonder
        eventsQueue.forEach(function(event) {
            sendEvent(event.type, event.data);
        });
        eventsQueue = [];

        // Sayfa goruntulemesini gonder
        trackPageView();
    }

    // Analytics'i durdur
    function stopTracking() {
        isEnabled = false;
        eventsQueue = [];
        console.log('[CaretTask Analytics] Durduruldu.');
    }

    // Cookie consent kontrolu
    function checkCookieConsent() {
        const prefs = localStorage.getItem('cookiePreferences');
        if (prefs) {
            try {
                const parsed = JSON.parse(prefs);
                if (parsed.analytics === true) {
                    startTracking();
                } else {
                    stopTracking();
                }
            } catch (e) {
                // JSON parse hatasi - analytics pasif
            }
        }
    }

    // ==================== BASLAT ====================

    function init() {
        // Event listener'lari ekle (consent olmasa bile)
        trackClicks();
        trackScrollDepth();
        trackSessionDuration();

        // Cookie consent kontrolu
        checkCookieConsent();

        // localStorage degisikliklerini dinle (tercihleri anlik guncelleme)
        window.addEventListener('storage', function(e) {
            if (e.key === 'cookiePreferences') {
                checkCookieConsent();
            }
        });
    }

    // DOM hazir oldugunda baslat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ==================== GLOBAL API ====================
    // Manuel event gonderimi ve kontrol icin
    window.CaretTaskAnalytics = {
        trackEvent: function(eventName, eventData) {
            sendEvent('custom', {
                eventName: eventName,
                customData: eventData || {}
            });
        },
        start: startTracking,
        stop: stopTracking,
        isEnabled: function() { return isEnabled; },
        getSessionId: function() { return sessionId; },
        checkConsent: checkCookieConsent
    };

})();
