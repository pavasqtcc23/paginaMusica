const header = document.getElementById('header');
const headerIcon = document.getElementById('header-icon');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

headerIcon.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
  header.classList.add('shrink');
  setTimeout(() => {
    if(window.scrollY < 50){
      header.classList.remove('shrink');
    }
  }, 600);
});
