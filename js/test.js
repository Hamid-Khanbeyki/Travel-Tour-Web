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
