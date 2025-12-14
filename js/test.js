let lastScroll = 0;

window.addEventListener("scroll", () => {
  const nav = document.getElementById("mainNav");
  const currentScroll = window.scrollY;

  if (currentScroll > 30) {
    // Activate sticky nav
    nav.classList.add("fixed");

    // If scrolling DOWN, hide it
    if (currentScroll > lastScroll) {
      nav.classList.add("hidden");
    }
    // If scrolling UP, show it
    else {
      nav.classList.remove("hidden");
    }
  } else {
    // back to normal
    nav.classList.remove("fixed");
    nav.classList.remove("hidden");
  }

  lastScroll = currentScroll;
});

/* code for slider */

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let slideInterval = setInterval(nextSlide, 5000); // 5 seconds

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(index);

  // Reset timer when clicking dots
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

//BORDER-BOTTOM FOR LINKS ON NAV

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));

        const activeLink = document.querySelector(
          `.nav__link[href="#${entry.target.id}"]`
        );
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  {
    threshold: 0.6, // section must be ~60% visible
  }
);

sections.forEach((section) => observer.observe(section));
