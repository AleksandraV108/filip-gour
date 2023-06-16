const sections = gsap.utils.toArray('.wrapper-book section')

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length -1),
    ease:"none",
    scrollTrigger:{
        trigger:".wrapper-book",
        pin:true,
        scrub:1,
         snap: 1 / (sections.length - 1),
       
    start: "top =250px",
    end: '+=3000 90%',
    }
});
