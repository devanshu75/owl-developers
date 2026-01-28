const toggle = document.getElementById("menuToggle");
const overlay = document.getElementById("menuOverlay");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  overlay.classList.toggle("active");
});
