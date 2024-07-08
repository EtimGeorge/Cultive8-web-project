const body = document.querySelector('body');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.classList.remove('active');

  if (window.location.pathname === '/') {
    document.querySelector('nav a.active').classList.add('active');
  } else {
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      } 
    })
  }
})

const hamburgerOpen = document.getElementById('hamburgerOpen');
const hamburgerClose = document.getElementById('hamburgerClose');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerOpen.addEventListener('click', () => {
  mobileMenu.classList.toggle('active'); 
  hamburgerOpen.style.display = 'none';
  hamburgerClose.style.display = 'inline';
});

hamburgerClose.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  hamburgerOpen.style.display = 'inline';
  hamburgerClose.style.display = 'none';
});
