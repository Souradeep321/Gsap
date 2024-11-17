var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove" , (dets) => {
  // console.log(dets.x,dets.y);
  gsap.to("#cursor",{
    x:dets.x,
    y:dets.y,
    duration : 1,
    ease: "back.out(1.7)",
    backgroundColor: "#f8d8d8a2"
  })
})

imageDiv.addEventListener("mouseenter" , (dets) => {
  cursor.innerHTML = `View more`
  console.log("heyyy");
  gsap.to(cursor , {
    scale : 3
  })
})
imageDiv.addEventListener("mouseleave" , (dets) => {
  cursor.innerHTML = ``
  console.log("heyyy");
  gsap.to(cursor , {
    scale : 1
  })
})
