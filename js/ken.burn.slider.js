const images = [...document.querySelectorAll(".hero-slider-item")];
const numbOfImages = images.length;
let index = 0;
var currentImage;
var previousImage;

const root = document.querySelector(":root");
const rootStyle = getComputedStyle(root);
const animationDuration = parseInt(rootStyle.getPropertyValue('--animationDuration'));


function ChangeImage()
{

   images[index].style = 'display:none;';
   index++;
   if (index >= images.length)
   {
      index = 0;
   }
   images[index].style = 'display:block;';
}

document.addEventListener("DOMContentLoaded", () =>
{
   Start();
})

function Start()
{
   images[index].style = 'display:block;';
   setTimeout(setInterval(ChangeImage, animationDuration * 1000), animationDuration * 1000);
}
