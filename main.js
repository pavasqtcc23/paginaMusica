// main.js
document.addEventListener('DOMContentLoaded', () => {
  // año automático en footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // menu móvil
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', nav.classList.contains('active'));
  });
});
