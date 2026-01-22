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
  toggle.classList.add("active");
}

function closeMenu() {
  menu.classList.remove("active");
  backdrop.classList.remove("active");
  toggle.classList.remove("active");
}

toggle.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

closeBtn.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

/*
Contact Us Form
*/

