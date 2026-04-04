// Navbar setup

const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

// homepage img side show 
let slideIndex = 0;
let slideTimer;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  // wrap around
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  // hide all slides
  slides.forEach(slide => {
    slide.style.display = "none";
  });

  // remove active from all dots
  dots.forEach(dot => {
    dot.classList.remove("active");
  });

  // show current slide
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function startSlideshow() {
  slideTimer = setInterval(() => {
    nextSlide();
  }, 3000);
}

function resetSlideshow() {
  clearInterval(slideTimer);
  startSlideshow();
}

function goToSlide(index) {
  showSlide(index);
  resetSlideshow();
}

// initialize
showSlide(slideIndex);
startSlideshow();