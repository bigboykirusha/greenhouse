class Accordion {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
    this.bindEvents();
  }

  bindEvents() {
    this.elements.forEach((element) => {
      element.addEventListener("click", this.toggle.bind(this));
    });
  }

  toggle(event) {
    const question = event.currentTarget;
    const answer = question.nextElementSibling;
    const isOpen = question.classList.contains("open");

    if (isOpen) {
      answer.style.display = "none";
      question.classList.remove("open");
      question.querySelector(".icon").textContent = "+";
    } else {
      answer.style.display = "block";
      question.classList.add("open");
      question.querySelector(".icon").textContent = "-";
    }
  }
}

// После загрузки DOM инициализируем аккордеон.
document.addEventListener("DOMContentLoaded", () => {
  new Accordion(".faq-question");
});
