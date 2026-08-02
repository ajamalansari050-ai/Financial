// Global Language Switcher Script for Fengoo.in

function toggleLanguage() {
    let currentLang = localStorage.getItem("fengoo_lang") || "hi";
    let newLang = currentLang === "hi" ? "en" : "hi";
    
    localStorage.setItem("fengoo_lang", newLang);
    applyLanguage(newLang);
}

function applyLanguage(lang) {
    // Update button text
    let langText = document.getElementById("langText");
    if (langText) {
        langText.innerText = lang === "hi" ? "ENG" : "हिन्दी";
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Translate elements with data attributes (जैसे data-hi, data-en, data-mr, data-bn आदि)
    let elements = document.querySelectorAll(`[data-${lang}]`);
    elements.forEach(el => {
        let text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.innerHTML = text;
        }
    });

    // Sync dropdown value if present on the page
    let langSelect = document.getElementById("languageSelect");
    if (langSelect) {
        langSelect.value = lang;
    }
}

// ड्रॉपडाउन से भाषा बदलने के लिए फंक्शन
function changeLanguage(langCode) {
    localStorage.setItem("fengoo_lang", langCode);
    applyLanguage(langCode);
}

// Apply saved language preference on page load
document.addEventListener("DOMContentLoaded", () => {
    let savedLang = localStorage.getItem("fengoo_lang") || "hi";
    applyLanguage(savedLang);
});
