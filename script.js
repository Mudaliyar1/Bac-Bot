document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-menu');
  
    navMenu.forEach(menu => {
      menu.addEventListener('click', function() {
        navMenu.forEach(navMenu => navMenu.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });