const manu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const collaps = document.querySelector('#contact-2');
const mobileDrop = document.querySelector('.mobile-links');
const navblock = document.querySelector('.block');

function toggleMenu()
{
    manu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
   document.body.classList.toggle('no-scroll');
	navblock.classList.toggle('nav-block');
}

function toggleDrop()
{
	//mobileDrop.classList.toggle('active-drop');
   var click = document.querySelector("#mobile-open");  
         if(click.style.display ==="none") {  
            click.style.display ="block";  
         } else {  
            click.style.display ="none";  
         }   
      } 



 