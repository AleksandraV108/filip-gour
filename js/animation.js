gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({Defaults: { Easing: Expo.EaseOut}});
     tl.from('.bg',{ opacity:0, duration:2, ease: Expo.easeOut,delay: 0.2 })
       .to('.text-reveal',{ opacity:1, stagger: .3, duration: 1.5}, "-=1.5")
       .to('.image-reveal', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',y:0, stagger: 1, opacity: 1, duration: 1} )