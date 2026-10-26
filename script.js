const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const header = document.getElementById("header");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("active"));
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
