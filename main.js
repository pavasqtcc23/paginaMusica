/* main.js: smooth scroll, mobile menu and video modal + simple contact handler */

document.addEventListener('DOMContentLoaded', function(){
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // smooth scroll for nav
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav if open
        if(window.innerWidth < 820) toggleMenu(false);
      }
    });
  });

  // mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  if(menuToggle){
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      toggleMenu(!expanded);
    });
  }

  function toggleMenu(open){
    const nav = document.querySelector('.nav');
    if(!nav) return;
    if(open){
      nav.style.display = 'flex';
      document.querySelector('.menu-toggle').setAttribute('aria-expanded','true');
    } else {
      nav.style.display = '';
      document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
    }
  }

  // media modal: open when clicking .btn-link that has data-type=video
  const modal = document.getElementById('mediaModal');
  const mediaWrap = document.getElementById('mediaWrap');

  document.querySelectorAll('.btn-link[data-type="video"]').forEach(btn => {
    btn.addEventListener('click', function(e){
      e.preventDefault();
      const src = this.dataset.src;
      if(!src) return;
      openModalWithSrc(src);
    });
  });

  function openModalWithSrc(src){
    mediaWrap.innerHTML = `<iframe src="${src}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  // close modal
  modal.querySelectorAll('[data-close], .modal-close').forEach(el => {
    el.addEventListener('click', closeModal);
  });
  modal.addEventListener('click', (e) => {
    if(e.target === modal.querySelector('.modal-backdrop')) closeModal();
  });

  function closeModal(){
    mediaWrap.innerHTML = '';
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
});

// simple contact handler (demo)
function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  // For a real site, send via fetch to your backend or to a service (Netlify, Formspree, etc.)
  // Here we show a simple confirmation
  alert('Gracias — el formulario se ha enviado (demo). Sustituye handleContact por tu envío real.');
  form.reset();
  return false;
}
