// scheme/js/translation.js

class Translator {
  constructor(translationsUrl, defaultLang = "en") {
    this.translationsUrl = translationsUrl;
    this.defaultLang = defaultLang;
    this.translations = {};
    this.loadTranslations();
  }

  loadTranslations() {
    fetch(this.translationsUrl)
      .then((response) => response.json())
      .then((data) => {
        this.translations = data;
        this.applyTranslations(this.defaultLang);
        this.updateLanguageButtons(this.defaultLang);
      });
  }

  changeLanguage(lang) {
    this.applyTranslations(lang);
    this.updateLanguageButtons(lang);
  }

  applyTranslations(lang) {
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      const type =
        element.tagName.toLowerCase() === "h2" ? "title" : "paragraph";
      const translation = this.translations[key][lang][type];
      if (translation) {
        element.innerHTML = translation;
      }
    });
  }

  updateLanguageButtons(activeLang) {
    document.querySelectorAll(".language-selector a").forEach((link) => {
      const lang = link.getAttribute("href").split("=")[1];
      if (lang === activeLang) {
        link.classList.remove("inactive-lang");
      } else {
        link.classList.add("inactive-lang");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const translator = new Translator("/scheme/json/translation.json");
  document.querySelectorAll(".language-selector button").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const lang = event.target.getAttribute("href").split("=")[1];
      translator.changeLanguage(lang);
    });
  });
});
