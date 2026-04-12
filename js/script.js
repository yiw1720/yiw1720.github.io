// Navbar setup
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// homepage img side show
let slideIndex = 0;
let slideTimer;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (slides.length === 0 || dots.length === 0) return;

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  if (slides[slideIndex]) {
    slides[slideIndex].style.display = "block";
  }

  if (dots[slideIndex]) {
    dots[slideIndex].classList.add("active");
  }
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function startSlideshow() {
  if (slides.length === 0 || dots.length === 0) return;

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
if (slides.length > 0 && dots.length > 0) {
  showSlide(slideIndex);
  startSlideshow();
}