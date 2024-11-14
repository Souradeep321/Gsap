//gsap.to

// gsap.from("#box1",{
//     x : 800,
//     duration : 2,
//     delay : 1,
//     rotate : 360,
//     backgroundColor : "blue",
//     borderRadius : "50%",
// })

//gsap.from property and Stagger 

// gsap.from("h1", {
//     opacity: 0,
//     duration: 1,
//     y:30,
//     delay: 1,
//     stagger : 0.3
// })

//About [Repeat,Yoyo] property

// gsap.to("#box", {
//     x:800,
//     duration: 1,
//     delay: 1,
//     rotate : 360,
//     repeat : -1, 
//     yoyo : true
// })

//About Timeline

// gsap.to("#box1", {
//     x: 1000,
//     rotate : 360,
//     duration : 1.5,
//     delay : 1
// })

// gsap.to("#box2" , {
//     x:1000,
//     backgroundColor : "yellow",
//     duration:1.5,
//     delay:2.5
// })

// gsap.to("#box3" , {
//     x:1000,
//     scale : 0.5,
//     borderRadius : "50%",
//     duration:1.5,
//     delay:4
// })

// var tl = gsap.timeline()

// tl.to("#box1" , {
//     x: 1000,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1
// })

// tl.to("#box2" , {
//     x:1000,
//     backgroundColor : "yellow",
//     duration:1.5,
// })

// tl.to("#box3" , {
//     x:1000,
//     scale : 0.5,
//     borderRadius : "50%",
//     duration:1.5,
// })

//Navbar using Timeline
 var tl = gsap.timeline()

tl.from("h2" , {
    y:-20,
    opacity : 0,
    duration : 1,
    delay : 0.3
})

tl.from("h4" , {
    y:-20,
    opacity : 0,
    duration : 1,
    stagger : 0.3
})

tl.from("h1" , {
    y:20,
    opacity:0,
    duration :1,
    scale :.2
})
