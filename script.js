let theme = document.querySelector('.theme')
let dark = ()=>{
    document.body.classList.remove('dark')
    document.body.classList.add('light')
    let heading = document.getElementById('my-services')
    let heading1 = document.getElementById('heading')
    let contactHeading = document.getElementById('contact-heading')
    heading.style.boxShadow ="5px 5px 18px white"
    heading1.style.boxShadow ="5px 5px 18px white"
    contactHeading.style.boxShadow ="5px 5px 18px white"
   
    
    theme.innerHTML = `<i onclick="light()"  class="fa-solid fa-sun light"></i>
    `

}
let light = ()=>{
    let heading = document.getElementById('my-services')
    let heading1 = document.getElementById('heading')
    let contactHeading = document.getElementById('contact-heading')
    document.body.classList.remove('light')
    document.body.classList.add('dark')
    theme.innerHTML = ` <i onclick="dark()" class="fa-solid fa-moon dark"></i>`
    heading.style.boxShadow ="5px 5px 18px black"
    heading1.style.boxShadow ="5px 5px 18px black"
    contactHeading.style.boxShadow ="5px 5px 18px black"
}
// ----------------------------------------LinkBtn Handler --------------------------
let linkBtn = document.querySelectorAll('.link-btn')
linkBtn.forEach(link=>{
    link.addEventListener('click',()=>{
        linkBtn.forEach(link=>{
            link.classList.remove('active')
        })
        link.classList.add('active')

    })
})
// -----------------------------------------Landing Name---------------------
let headingName = document.getElementById('name')
let text = headingName.innerText
idx= 1
let showName = ()=>{
headingName.innerHTML = text.slice(0,idx)
console.log(headingName.innerHTML)
console.log(idx)
idx++;
if(idx>text.length){
    idx = 0
}else{
setTimeout(showName,300)
}
}
setTimeout(() => {
    showName()
}, 1000);

//  -----------------------overlay addEventListener for projects-------------
let imageNode = document.querySelectorAll('.image')
let imageArray = Array.from(imageNode)
imageArray.forEach(image=>{
    image.addEventListener('mouseenter',()=>{
        
        console.log(image.previousElementSibling)
        let overlay = image.previousElementSibling
        overlay.style.height = '260px'
        
    })
    let projectOverlay = document.querySelectorAll('.projectOverlay')
    let projectoverlayArray = Array.from(projectOverlay)
   projectoverlayArray.forEach(singleOverlay=>{
     singleOverlay.addEventListener('mouseout',()=>{
        console.log(singleOverlay)
        singleOverlay.style.height = '0px'

     })
   }) 
})
// --------------------------------Menue  click Event ----------------------
let menuBtn = document.querySelector('.menu-btn')
let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let links = document.querySelector('.links')
burger=()=>{
    
    
    menuBtn.innerHTML= `<i onclick="cross()" class="fa-solid fa-xmark cross" ></i>`

    
  links.classList.add('active-links')
    // menu.style.display= 'block'
    menu.style.height = '400px'
}
// -----------------------------Scroll Reveal------------------------------------
ScrollReveal({ 
    reset: true,
    distance:'80px' ,
    duration: 1500,
    delay:200
});
ScrollReveal().reveal('.landing-container, .heading' , { origin: 'top' });
ScrollReveal().reveal('.landing-pic img' , { origin: 'bottom' });
ScrollReveal().reveal('.about-img' , { origin: 'left' });

function cross(){
menuBtn.innerHTML =`<i onclick="burger()" class="fa-solid fa-bars burger" ></i>`
// menu.style.display= 'none'
menu.style.height= '0px'
}
