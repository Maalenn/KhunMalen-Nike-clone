// function for scroll in nav bar
var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-bar").style.top = "0";
  } else {
    document.querySelector(".nav-bar").style.top = "-115px";
  }
  prevScrollpos = currentScrollPos;
};

const slideShow = function () {
  document.query;
};

// Nav hamburger when open
function openNav() {
  document.querySelector(".nav-hamburger").classList.add("openNavBar");
  document.querySelector(".nav-hamburger").classList.remove("closeNavBar");
  document.querySelector("html").classList.add("overflow-y-hidden")
  document.getElementById('background-blur').classList.remove('hidden');
}
// nav Hamburger when close
function closeNav() {
  document.querySelector(".nav-hamburger").classList.add("closeNavBar");
  document.querySelector(".nav-hamburger").classList.remove("openNavBar");
  document.querySelector("html").classList.remove("overflow-y-hidden")
  document.getElementById('background-blur').classList.add('hidden');
}

// slideshow fucntion 
let currentSlide = 0;
function pushArrow(n) {
  const carousel = document.querySelector(" .slideShow ");
  const images = carousel.querySelectorAll(".slide-list");
  const imageWidth = images[0].clientWidth;

  currentSlide = Math.max(0, Math.min(currentSlide + n, images.length - 1));
  carousel.scrollTo({ left: currentSlide * imageWidth, behavior: "smooth" });
}
// function pushArrow(carouselIndex, n) {
//   const carousels = document.querySelectorAll(".slideShow");

//   if (!currentSlide[carouselIndex]) {
//     currentSlide[carouselIndex] = 0;
//   }

//   const carousel = carousels[carouselIndex];
//   const images = carousel.querySelectorAll(".slide-list");
//   const imageWidth = images[0].clientWidth;

//   currentSlide[carouselIndex] = Math.max(0, Math.min(currentSlide[carouselIndex] + n, images.length - 1));
//   carousel.scrollTo({ left: currentSlide[carouselIndex] * imageWidth, behavior: "smooth" });
// }


// Function for arrow dropdown
let accordionBtn = document.querySelectorAll("#accordion-btn");
let accordionDropdown = document.querySelectorAll("#accordion-dropdown");
let plusIcon = document.querySelectorAll("#plus-icon");
let closeIcon = document.querySelectorAll("#close-icon");

accordionBtn.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    accordionDropdown[i].classList.toggle("max-h-[200px]");
    plusIcon[i].classList.toggle("hidden");
    closeIcon[i].classList.toggle("hidden");
  });
});

