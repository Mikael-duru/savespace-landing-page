const navBar = document.querySelector('#navBar');
const menuOpen = document.querySelector('#menuOpen');
const menuClose = document.querySelector('#menuClose');

// show navbar
menuOpen.addEventListener('click', openMenu);

// hide navbar
menuClose.addEventListener('click', closeMenu);

function openMenu(){
  menuOpen.classList.add('hidden');
  navBar.classList.remove('hidden');
  menuClose.classList.remove('hidden');
}

function closeMenu(){
  navBar.classList.add('hidden');
  menuClose.classList.add('hidden');
  menuOpen.classList.remove('hidden')
}