
gsap.registerPlugin(ScrollTrigger);

gsap.to(".imag",{
    x:-850,
    duration:1,
    scrollTrigger:{
        trigger:"#Skills",
        scrub:1, 
        start:"top 100%",
        end:"top 2%",
        pin:".imag",
    }
})



gsap.from(".skill_cont",{
    y:100,
    scrollTrigger:{
        trigger:"#Skills",
        scrub:4,
    }
})





var t1=gsap.timeline({
    scrollTrigger:{
        trigger:"#AboutMe",
        start:"50% 50%",
        end:"140% 50%",
        scrub:2,
        pin:true,
    }
})


t1.to("#top",{
    top:"-80%"
},'a')

t1.to("#bottom",{
    top:"110%"
},'a')



gsap.to(".exp_static",{
    x:-800,
    y:60,
    scrollTrigger:{
        trigger:".exp_var",
        start:"15% 50%",
        end:"90% 10%",
        pin:".exp_static",
        scrub:1,
    }
})



gsap.from(".edu_head",{
    x:-200,
    scrollTrigger:{
        trigger:".edu_cont",
        scrub:5
    }
})


var typed=new Typed(".auto-type",{
    strings:["Shanay Shukla","Web Developer","ML Enthusiast"],
    typeSpeed: 150,
    backSpeed:150,
    loop:true
})




