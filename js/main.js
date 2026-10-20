// =============================================
// Smooth Scroll
// =============================================
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
    }
  });
});

// =============================================
// Responsive nav toggle (burger)
// =============================================
const navToggle = document.getElementById("navToggle");
const mainNav   = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
  // Cerrar al hacer clic en un enlace (móvil)
  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
  });
}

// =============================================
// Animación de entrada para cards
// =============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  ".logro-card, .exp-card, .port-card, .course-card, .service-card, .skill-box"
).forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// =============================================
// WhatsApp tracking (opcional)
// =============================================
const whatsappBtn = document.querySelector(".whatsapp-float");
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    console.log("WhatsApp contact clicked");
  });
}
