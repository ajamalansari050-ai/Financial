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

    // Translate elements with data attributes (सभी भाषाओं का सपोर्ट जोड़ा गया, पुराना data-en और data-hi सुरक्षित है)
    let elements = document.querySelectorAll(`[data-${lang}]`);
    elements.forEach(el => {
        let text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.innerHTML = text;
        }
    });
}

// Apply saved language preference on page load
document.addEventListener("DOMContentLoaded", () => {
    let savedLang = localStorage.getItem("fengoo_lang") || "hi";
    applyLanguage(savedLang);
});
