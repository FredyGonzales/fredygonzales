// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// WhatsApp button click tracking (opcional)
const whatsappBtn = document.querySelector(".whatsapp-float");
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    console.log("WhatsApp contact clicked");
  });
}

// Dynamic year footer (si lo quieres usar luego)
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Responsive menu (futuro burger menu)
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}