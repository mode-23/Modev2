const home = document.getElementById("home");
const about = document.getElementById("about");
const srv = document.getElementById("srv");
const port = document.getElementById("port");
const cont = document.getElementById("cont");
const logo = document.getElementById("logo");
const homepress = document.getElementById("homepress");
const aboutpress = document.getElementById("aboutpress");
const srvpress = document.getElementById("srvpress");
const portpress = document.getElementById("portpress");
const contactpress = document.getElementById("contactpress");
const closed = document.querySelector(".closed");
const opend = document.querySelector(".opend");
const leftSide = document.querySelector(".left-side");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const pone = document.getElementById("pone");
const ptwo = document.getElementById("ptwo");
const pthree = document.getElementById("pthree");
const pfour = document.getElementById("pfour");
const mind = document.getElementById("mind");
const formulaire = document.querySelector(".formulaire");
const flesh = document.querySelector(".flesh");
const flesh2 = document.querySelector(".flesh2");
const section = document.querySelectorAll(".section");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () =>{
  preloader.classList.add("finished");
})

/*LOCALSTORAGE*/
let lightMode = localStorage.getItem("lightMode"); // 0. Main LocalStorage
const body = document.getElementById("body");
const moon = document.getElementById("moon");

const enableLightMode = () => {
  body.classList.add("light"); //1. add the class light to the body
  body.classList.add("colors"); //2. add the class colors to the body
  moon.classList.add("active"); //3. add the class active to the toggle
  localStorage.setItem("lightMode", "enabled"); //4. update lightMode in the localstorage
};

const disableLightMode = () => {
  body.classList.remove("light"); //1. remove the class light to the body
  body.classList.remove("colors"); //2. add the class active to the body
  moon.classList.remove("active"); //3. remove the class active to the toggle
  localStorage.setItem("lightMode", "disabled"); //4. update lightMode in the localstorage
};

if (lightMode === "enabled") {
  enableLightMode();
}

moon.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");
  if (lightMode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
/*LOCALSTORAGE*/

/*GALLERY*/
let switcher = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".gallery-holder .box-con");

switcher.forEach((li) =>{
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImg);
});

function removeActive(){
  switcher.forEach((li) =>{
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageImg() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.web).forEach((els) => {
    els.style.display = "block";
  });
}
/*GALLERY*/
/*FAGS*/

const faqs = document.querySelectorAll(".faq");
const arrow = document.querySelectorAll(".down-faq");

faqs.forEach(faq =>{
  faq.addEventListener("click", () =>{
    faq.classList.toggle("open");
  })
});

/*FAQS*/

flesh.addEventListener("click", (eo) => {
  leftSide.classList.add("activated");
  flesh2.classList.add("active");
  home.classList.add("activemode");
  about.classList.add("activemode");
  srv.classList.add("activemode");
  port.classList.add("activemode");
  cont.classList.add("activemode");
});

flesh2.addEventListener("click", (eo) => {
  leftSide.classList.remove("activated");
  flesh2.classList.remove("active");
  home.classList.remove("activemode");
  about.classList.remove("activemode");
  srv.classList.remove("activemode");
  port.classList.remove("activemode");
  cont.classList.remove("activemode");

});

// const carouselSlide = document.querySelector(".carousel__slide");
// const previous = document.getElementById("previous");
// const next = document.getElementById("next");
// const carouselButtons = document.querySelectorAll(".carousel__button");
// const numberOfImages = document.querySelectorAll(".carousel__slide .box").length;
// let imageIndex = 1;
// let translateX = 0;
// let slideWidth = 250;

// carouselButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.id === "previous") {
//       if (imageIndex !== 1) {
//         imageIndex--;
//         translateX += slideWidth;
//       }
//     } else {
//       if (imageIndex !== numberOfImages) {
//         imageIndex++;
//         translateX -= slideWidth;
//       }
//     }
//     carouselSlide.style.transform = `translateX(${translateX}px)`;
//   });
// });
// let imgSlides = document.querySelectorAll(".carousel__slide .box img");
// const overlay = document.querySelector(".overlay");
// const popupImg = document.getElementById("popupimg");
// imgSlides.forEach((img) =>{
//     img.addEventListener('click', ()=>{
//         overlay.style.display = 'block';
//         popupImg.src = img.src;
//     })
// });
// overlay.addEventListener('click', (e)=>{
//     if(e.target.classList.contains('overlay')){
//     overlay.style.display = 'none';
//     }
// });

closed.addEventListener("click", () => {
  leftSide.classList.add("show");
});
opend.addEventListener("click", () => {
  leftSide.classList.remove("show");
});

homepress.addEventListener("click", () => {
  leftSide.classList.add("show");
});
aboutpress.addEventListener("click", () => {
  leftSide.classList.add("show");
});
srvpress.addEventListener("click", () => {
  leftSide.classList.add("show");
});
portpress.addEventListener("click", () => {
  leftSide.classList.add("show");
});
contactpress.addEventListener("click", () => {
  leftSide.classList.add("show");
});


homepress.addEventListener("click", () => {
  home.classList.add("active");
  about.classList.remove("active");
  srv.classList.remove("active");
  port.classList.remove("active");
  cont.classList.remove("active");

  homepress.classList.add("active");
  contactpress.classList.remove("active");
  portpress.classList.remove("active");
  srvpress.classList.remove("active");
  aboutpress.classList.remove("active");
});
logo.addEventListener("click", () => {
  home.classList.add("active");
  about.classList.remove("active");
  srv.classList.remove("active");
  port.classList.remove("active");
  cont.classList.remove("active");

  homepress.classList.add("active");
  contactpress.classList.remove("active");
  portpress.classList.remove("active");
  srvpress.classList.remove("active");
  aboutpress.classList.remove("active");
});

aboutpress.addEventListener("click", () => {
  about.classList.add("active");
  home.classList.remove("active");
  srv.classList.remove("active");
  port.classList.remove("active");
  cont.classList.remove("active");

  aboutpress.classList.add("active");
  contactpress.classList.remove("active");
  portpress.classList.remove("active");
  srvpress.classList.remove("active");
  homepress.classList.remove("active");
});

srvpress.addEventListener("click", () => {
  srv.classList.add("active");
  home.classList.remove("active");
  about.classList.remove("active");
  port.classList.remove("active");
  cont.classList.remove("active");

  srvpress.classList.add("active");
  contactpress.classList.remove("active");
  portpress.classList.remove("active");
  aboutpress.classList.remove("active");
  homepress.classList.remove("active");
});

portpress.addEventListener("click", () => {
  port.classList.add("active");
  home.classList.remove("active");
  about.classList.remove("active");
  srv.classList.remove("active");
  cont.classList.remove("active");

  portpress.classList.add("active");
  contactpress.classList.remove("active");
  aboutpress.classList.remove("active");
  srvpress.classList.remove("active");
  homepress.classList.remove("active");
});

contactpress.addEventListener("click", () => {
  cont.classList.add("active");
  home.classList.remove("active");
  about.classList.remove("active");
  srv.classList.remove("active");
  port.classList.remove("active");

  contactpress.classList.add("active");
  srvpress.classList.remove("active");
  portpress.classList.remove("active");
  aboutpress.classList.remove("active");
  homepress.classList.remove("active");
});

let hire = document.querySelector(".hire");
hire.addEventListener("click", () => {
  cont.classList.add("active");
  home.classList.remove("active");
  about.classList.remove("active");
  srv.classList.remove("active");
  port.classList.remove("active");

  contactpress.classList.add("active");
  srvpress.classList.remove("active");
  portpress.classList.remove("active");
  aboutpress.classList.remove("active");
  homepress.classList.remove("active");
});

window.localStorage.removeItem("mkl");
window.localStorage.removeItem("test");


let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
document.addEventListener('mousemove', (e)=>{
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


let links = document.querySelectorAll(".links li a");
links.forEach(link =>{
  link.addEventListener('mouseover', ()=>{
    cursor.classList.add("hover");
  });
});
links.forEach(link =>{
  link.addEventListener('mouseout', ()=>{
    cursor.classList.remove("hover");
  });
});

switcher.forEach(swit =>{
  swit.addEventListener('mouseover', ()=>{
    cursor.classList.add("hover");
  });
});
switcher.forEach(swit =>{
  swit.addEventListener('mouseout', ()=>{
    cursor.classList.remove("hover");
  });
});

imgs.forEach(img =>{
  img.addEventListener('mouseover', ()=>{
    cursor.classList.add("hover");
  });
});
imgs.forEach(img =>{
  img.addEventListener('mouseout', ()=>{
    cursor.classList.remove("hover");
  });
});
hire.addEventListener('mouseover', () =>{
  cursor.classList.add("hover");
});
hire.addEventListener('mouseout', () =>{
  cursor.classList.remove("hover");
});

moon.addEventListener('mouseover', () =>{
  cursor.classList.add("hover");
});
moon.addEventListener('mouseout', () =>{
  cursor.classList.remove("hover");
});

logo.addEventListener('mouseover', () =>{
  cursor.classList.add("hover");
});
logo.addEventListener('mouseout', () =>{
  cursor.classList.remove("hover");
});

flesh.addEventListener('mouseover', () =>{
  cursor.classList.add("hover");
});
flesh.addEventListener('mouseout', () =>{
  cursor.classList.remove("hover");
});

flesh2.addEventListener('mouseover', () =>{
  cursor.classList.add("hover");
});
flesh2.addEventListener('mouseout', () =>{
  cursor.classList.remove("hover");
});

let inputs = document.querySelectorAll(".hover-input");


inputs.forEach(input =>{
  input.addEventListener('mouseout', ()=>{
    cursor.classList.remove("inputed");
    cursor2.classList.remove("inputed");
  });
});

inputs.forEach(input =>{
  input.addEventListener('mouseover', ()=>{
    cursor.classList.add("inputed");
    cursor2.classList.add("inputed");
  });
});