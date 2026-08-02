// Global language state
let currentLang = localStorage.getItem('fengoo_lang') || 'hi';

document.addEventListener("DOMContentLoaded", function() {
    applyLanguage(currentLang);
});

function toggleLanguage() {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    localStorage.setItem('fengoo_lang', currentLang);
    applyLanguage(currentLang);
}

function applyLanguage(lang) {
    // Toggle Button Text Update
    const langText = document.getElementById('langText');
    if(langText) {
        langText.innerText = lang === 'hi' ? 'ENG' : 'हिंदी';
    }

    // Translate all elements having data-en and data-hi attributes
    const elements = document.querySelectorAll('[data-en][data-hi]');
    elements.forEach(el => {
        if(lang === 'hi') {
            el.innerText = el.getAttribute('data-hi');
        } else {
            el.innerText = el.getAttribute('data-en');
        }
    });
    }
