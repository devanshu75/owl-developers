const toggle = document.getElementById("menuToggle");
const overlay = document.getElementById("menuOverlay");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  overlay.classList.toggle("active");
});

const spotlight = document.querySelector(".cursor-spotlight");

menuOverlay.addEventListener("mousemove", (e) => {
  spotlight.style.left = e.clientX + "px";
  spotlight.style.top = e.clientY + "px";
});

menuOverlay.addEventListener("mouseenter", () => {
  spotlight.style.opacity = 1;
});

menuOverlay.addEventListener("mouseleave", () => {
  spotlight.style.opacity = 0;
});
