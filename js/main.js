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
