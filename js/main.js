const toggle = document.getElementById("menuToggle");
const navCollapse = document.getElementById("owlNav");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navCollapse.classList.toggle("show");
});

document.querySelectorAll(".nav-link, .nav-cta-btn").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.classList.remove("active");
    navCollapse.classList.remove("show");
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".owl-navbar");
  nav.classList.toggle("shrink", window.scrollY > 50);
});

const indicator = document.querySelector(".nav-indicator");
const links = document.querySelectorAll(".owl-menu .nav-link");

function moveIndicator(el) {
  const rect = el.getBoundingClientRect();
  const parentRect = el.parentElement.parentElement.getBoundingClientRect();

  indicator.style.width = rect.width + "px";
  indicator.style.left = rect.left - parentRect.left + "px";
}

// Set indicator on load (active link)
window.addEventListener("load", () => {
  const activeLink = document.querySelector(".owl-menu .nav-link.active");
  if (activeLink) moveIndicator(activeLink);
});

// Move on hover
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    moveIndicator(link);
  });

  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    moveIndicator(link);
  });
});

// Reset to active when mouse leaves menu
document.querySelector(".owl-menu").addEventListener("mouseleave", () => {
  const activeLink = document.querySelector(".owl-menu .nav-link.active");
  if (activeLink) moveIndicator(activeLink);
});


