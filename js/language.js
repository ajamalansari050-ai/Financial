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

    // Translate elements with data-en and data-hi attributes
    let elements = document.querySelectorAll("[data-en][data-hi]");
    elements.forEach(el => {
        if (lang === "en") {
            el.innerHTML = el.getAttribute("data-en");
        } else {
            el.innerHTML = el.getAttribute("data-hi");
        }
    });
}

// Apply saved language preference on page load
document.addEventListener("DOMContentLoaded", () => {
    let savedLang = localStorage.getItem("fengoo_lang") || "hi";
    applyLanguage(savedLang);
});
