// बटन (ENG/हिन्दी) पर क्लिक करके भाषा टॉगल करने का फंक्शन
function toggleLanguage() {
    let currentLang = localStorage.getItem("fengoo_lang") || "hi";
    let newLang = currentLang === "hi" ? "en" : "hi";
    
    localStorage.setItem("fengoo_lang", newLang);
    applyLanguage(newLang);
}

// ड्रॉपडाउन (Dropdown) से भाषा बदलने के लिए फंक्शन
function changeLanguage(langCode) {
    localStorage.setItem("fengoo_lang", langCode);
    applyLanguage(langCode);
}

// चुनी हुई भाषा को पूरे पेज पर लागू (Apply) करने का फंक्शन
function applyLanguage(lang) {
    // 1. अगर गोल बटन है, तो उसका टेक्स्ट अपडेट करें
    let langText = document.getElementById("langText");
    if (langText) {
        langText.innerText = lang === "hi" ? "ENG" : "हिन्दी";
    }

    // 2. HTML टैग का lang एट्रिब्यूट अपडेट करें
    document.documentElement.lang = lang;

    // 3. डेटा एट्रिब्यूट (जैसे data-hi, data-en, data-mr, data-bn आदि) वाले एलिमेंट्स को ट्रांसलेट करें
    let elements = document.querySelectorAll(`[data-${lang}]`);
    elements.forEach(el => {
        let text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.innerHTML = text;
        }
    });

    // 4. अगर पेज पर ड्रॉपडाउन मौजूद है, तो उसकी सिलेक्टेड वैल्यू सिंक करें
    let langSelect = document.getElementById("languageSelect");
    if (langSelect) {
        langSelect.value = lang;
    }
}

// पेज लोड होते ही लोकल स्टोरेज में सेव भाषा को लागू करें
document.addEventListener("DOMContentLoaded", () => {
    let savedLang = localStorage.getItem("fengoo_lang") || "hi";
    applyLanguage(savedLang);
});
