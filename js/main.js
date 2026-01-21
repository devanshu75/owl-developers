/* =========================================
   Menu Toggle
========================================= */
const menu = document.getElementById("offcanvasMenu");
const toggle = document.getElementById("menuToggle");
const closeBtn = document.getElementById("closeMenu");
const backdrop = document.getElementById("menuBackdrop");

function openMenu() {
  menu.classList.add("active");
  backdrop.classList.add("active");
  toggle.style.display = "none"; // hide hamburger
}

function closeMenu() {
  menu.classList.remove("active");
  backdrop.classList.remove("active");
  toggle.style.display = "flex"; // show hamburger
}

toggle.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

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

//Footer Code
document.getElementById("year").textContent = new Date().getFullYear();
