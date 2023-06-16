const manu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const collaps = document.querySelector('#contact-2')

function toggleMenu()
{
    manu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
   document.body.classList.toggle('no-scroll');
}