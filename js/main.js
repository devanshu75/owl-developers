/* =========================================
   MOBILE MENU TOGGLE
========================================= */
const toggle = document.getElementById("menuToggle");
const navCollapse = document.getElementById("owlNav");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navCollapse.classList.toggle("show");
});

/* Close mobile menu when tab clicked */
document.querySelectorAll(".nav-link, .nav-cta-btn").forEach((el) => {
  el.addEventListener("click", () => {
    toggle.classList.remove("active");
    navCollapse.classList.remove("show");
  });
});

/* =========================================
   NAVBAR SHRINK ON SCROLL
========================================= */
window.addEventListener("scroll", () => {
  document
    .querySelector(".owl-navbar")
    .classList.toggle("shrink", window.scrollY > 50);
});

/* =========================================
   SLIDING INDICATOR (BOOTSTRAP TABS SAFE)
========================================= */
const indicator = document.querySelector(".nav-indicator");
const navLinks = document.querySelectorAll(".owl-menu .nav-link");

/* Move indicator */
function moveIndicator(el) {
  const rect = el.getBoundingClientRect();
  const parentRect = el.closest(".owl-menu").getBoundingClientRect();

  indicator.style.width = `${rect.width}px`;
  indicator.style.left = `${rect.left - parentRect.left}px`;
}

/* Initial position */
window.addEventListener("load", () => {
  const active = document.querySelector(".owl-menu .nav-link.active");
  if (active) moveIndicator(active);
});

/* Move when Bootstrap activates tab */
navLinks.forEach((link) => {
  link.addEventListener("shown.bs.tab", () => {
    moveIndicator(link);
  });

  /* Hover preview */
  link.addEventListener("mouseenter", () => {
    moveIndicator(link);
  });
});

/* Reset on mouse leave */
document.querySelector(".owl-menu").addEventListener("mouseleave", () => {
  const active = document.querySelector(".owl-menu .nav-link.active");
  if (active) moveIndicator(active);
});

/* Recalculate on resize */
window.addEventListener("resize", () => {
  const active = document.querySelector(".owl-menu .nav-link.active");
  if (active) moveIndicator(active);
});
