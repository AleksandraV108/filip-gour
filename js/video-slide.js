const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

let i = 1;
const numberOfSlides = slides.length;
const slideWidth = slides[0].clientWidth;

let firstSlide = document.querySelector(".first-slide");
let lastSlide = document.querySelector(".last-slide");

let touchStartPosition;
let touchEndPosition;
let lastDelta = 0;

carousel.appendChild(firstSlide.cloneNode(true));
carousel.insertBefore(lastSlide.cloneNode(true), carousel.children[0]);
carousel.appendChild(slides[1].cloneNode(true));

const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.prev');

let currentSlidePosition = -slideWidth;
carousel.style.transform = `translateX(${currentSlidePosition}px)`;

document.addEventListener("DOMContentLoaded", function (event) 
{
   Initialize();
});

function Initialize()
{
   carousel.addEventListener('transitionend', () =>
   {
      if (i >= numberOfSlides + 1)
      {
         carousel.style.transition = 'none';
         i = 1;
         carousel.style.transform = `translateX(${-slideWidth * i}px)`;
         currentSlidePosition = -slideWidth * i;
      }

      if (i <= 0)
      {
         carousel.style.transition = 'none';
         i = numberOfSlides;
         carousel.style.transform = `translateX(${-slideWidth * numberOfSlides}px)`;
         currentSlidePosition = -slideWidth * numberOfSlides;
      }

   })

   //Button functions
   nextBtn.forEach(element =>
   {
      element.addEventListener("click", () =>
      {
         NextSlide();
      });
   });

   prevBtn.forEach(element =>
   {
      element.addEventListener("click", () =>
      {
         PreviusSlide();
      });
   });

   //Touch functions
   slides.forEach(element =>
   {
      element.addEventListener("touchstart", (e) =>
      {
         touchStartPosition = e.touches[0].clientX;

      })

      element.addEventListener("touchend", (e) =>
      {
         touchEndPosition = e.changedTouches[0].clientX;
         var deltaPosition = touchStartPosition - touchEndPosition;

         if (deltaPosition > slideWidth * 0.5)
         {
            NextSlide();
         }
         else if (Math.abs(deltaPosition) < slideWidth * 0.5)
         {
            carousel.style.transform = `translateX(${currentSlidePosition}px)`;
         }
         else if (deltaPosition < -slideWidth * 0.5)
         {
            PreviusSlide();
         }
         else return;
      })

      element.addEventListener("touchmove", (e) =>
      {
         var deltaPosition = touchStartPosition - e.changedTouches[0].clientX;
         var moveToPosition = currentSlidePosition - deltaPosition;

         if (Math.abs(deltaPosition) < slideWidth * 0.9)
         {
            carousel.style.transition = '200ms ease-in-out transform';
            carousel.style.transform = `translateX(${moveToPosition}px)`;

         }

      })
   })

   function NextSlide()
   {
      if (i > numberOfSlides) return;
      carousel.style.transition = '200ms ease-in-out transform';
      i++;
      currentSlidePosition = -slideWidth * i;
      carousel.style.transform = `translateX(${currentSlidePosition}px)`;

   }

   function PreviusSlide()
   {
      if (i < 0) return;
      carousel.style.transition = '200ms ease-in-out transform';
      i--;
      currentSlidePosition = -slideWidth * i;
      carousel.style.transform = `translateX(${currentSlidePosition}px)`;

   }


   console.log("Initialized");
}



// JavaScript Document