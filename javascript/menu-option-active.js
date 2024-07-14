document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.nav-links .menu-item');
  
  function setActivePage(page) {
      menuItems.forEach(item => {
          item.parentElement.classList.remove('active');
          if (item.getAttribute('data-page') === page) {
              item.parentElement.classList.add('active');
          }
      });
      localStorage.setItem('activePage', page);
  }

  menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
          const page = this.getAttribute('data-page');
          setActivePage(page);
      });
  });
  
  // Set active state based on current page or localStorage
  const currentPage = window.location.pathname.split('/').pop().split('.')[0];
  const activePage = currentPage === 'index' ? 'home' : currentPage;
  const storedPage = localStorage.getItem('activePage');

  setActivePage(storedPage || activePage);
});