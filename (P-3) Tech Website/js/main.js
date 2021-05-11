burger = document.querySelector('.burger') 
nav_bar = document.querySelector('.nav_bar') 
nav_list = document.querySelector('.nav_list') 
search = document.querySelector('.search') 


burger.addEventListener('click', ()=>{
      nav_bar.classList.toggle('H-Responsive');
      nav_list.classList.toggle('V-Responsive');
      search.classList.toggle('V-Responsive');



} )
