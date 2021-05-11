burger = document.querySelector('.burger')
logo = document.querySelector('.logo')
nav = document.querySelector('.nav-menu')
search = document.querySelector('.search')
navbar = document.querySelector('.navbar')



burger.addEventListener('click',() => {
      logo.classList.toggle('V-responsive');
      nav.classList.toggle('V-responsive');
      search.classList.toggle('V-responsive');
      search.classList.toggle('H-responsive');
      
})
