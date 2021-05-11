burger = document.querySelector('.burger')
navlist = document.querySelector('.navlist')
call = document.querySelector('.call')
navbar = document.querySelector('.navbar')





burger.addEventListener('click',()=>{
      navbar.classList.toggle('h-responsive');
      navlist.classList.toggle('v-Responsive');
      call.classList.toggle('v-Responsive');
      burger.class.toggle('responsiveX')


})