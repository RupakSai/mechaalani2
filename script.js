function toggleMenu() {
    var navbarItems = document.querySelector('.navbar-items');
    var navbarToggler = document.querySelector('.navbar-toggler');
  
    navbarItems.classList.toggle('active');
    navbarToggler.classList.toggle('active');
  }