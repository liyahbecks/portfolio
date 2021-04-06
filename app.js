console.log ("wouldn't you feel better knowing that hiring me will allow me to support 2 cats and a shoe addiction, do the right thing plsss, think of the CATS")

const navBar = document.querySelector('.navBar')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')





openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);



function show() {
    navBar.style.display = "flex";
    navBar.style.top = "0";
}
function close() {
    navBar.style.top = "100%";
}

