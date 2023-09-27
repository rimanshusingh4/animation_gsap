gsap.to(".imageContainer", {
    ease: Expo.easeInOut,
    width: "100%",
    stagger: 2,
    repeat:-1
    
})

gsap.to(".text h1", {
    ease: Expo.easeInOut,
    top: 0,
    stagger:2,
    repeat:-1
})

gsap.to(".text h1", {
    delay: 2,
    ease: Expo.easeInOut,
    top: "-100%",
    stagger:2,
    repeat:-1
})
gsap.to("#hu",{
    x:60,
    delay:1,
   
    duration:1.5,

})

gsap.to(" #ri",{
    x:60,
    duration:1.5,
    delay:1,
    repeat:-1,
    ease: Expo.ease   
})
