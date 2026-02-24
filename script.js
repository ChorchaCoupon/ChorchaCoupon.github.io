// ==========================
// COPY BUTTON
// ==========================
function copyCode(btn) {
  navigator.clipboard.writeText("snh20");

  btn.classList.add("copy-success");

  const textEl = btn.querySelector(".copy-text");
  if (textEl) textEl.textContent = "Copied ✓";

  setTimeout(() => {
    btn.classList.remove("copy-success");
    if (textEl) textEl.textContent = "Copy Code";
  }, 2000);
}


// Wait until DOM fully loads
document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // MOBILE MENU
  // ==========================
  const menu = document.getElementById("menu");

window.toggleMenu = function (btn) {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
  btn.classList.toggle("open");
};
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    document.querySelector(".menu-toggle").classList.remove("open");
  });
});


  // ==========================
  // FAQ ACCORDION
  // ==========================
  const faqButtons = document.querySelectorAll(".faq-btn");

  faqButtons.forEach(button => {

    button.addEventListener("click", function () {

      const faqItem = this.closest(".faq-item");
      const content = faqItem.querySelector(".faq-content");
      const icon = this.querySelector(".faq-icon");

      const isOpen = faqItem.classList.contains("active");

      // Close all
      document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");

        const itemContent = item.querySelector(".faq-content");
        if (itemContent) itemContent.style.maxHeight = null;

        const itemIcon = item.querySelector(".faq-icon");
        if (itemIcon) itemIcon.classList.remove("rotate");
      });

      // Open selected
      if (!isOpen) {
        faqItem.classList.add("active");
        if (content) content.style.maxHeight = content.scrollHeight + "px";
        if (icon) icon.classList.add("rotate");
      }

    });

  });


  // ==========================
  // LANGUAGE SWITCH
  // ==========================
  window.setLang = function (lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-en]").forEach(el => {
      const text = el.getAttribute("data-" + lang);
      if (text) el.textContent = text;
    });

    localStorage.setItem("lang", lang);
  };

  const saved = localStorage.getItem("lang");
  if (saved) window.setLang(saved);

});