burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')
nav_menu = document.querySelector('.nav_menu')
nav_search = document.querySelector('.nav_search')



burger.addEventListener('click', ()=>{
      navbar.classList.toggle('H-Responsive');
      logo.classList.toggle('V-responsive');
      nav_menu.classList.toggle('V-responsive');
      nav_search.classList.toggle('V-responsive');

})