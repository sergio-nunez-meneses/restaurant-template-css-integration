/* VARIABLES */

/* FUNCTIONS */

// smooth scrolling navigation
const smoothScroll = () => {
  const navLinks = document.querySelectorAll(".navbar-item");
  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  }
}
smoothScroll();
// scrollspy
const scrollSpy = () => {
  const sections = document.getElementsByTagName("article");

  window.onscroll = () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (var s in sections) {
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPosition) {
        const id = sections[s].id;
        document.querySelector(".active-item").classList.remove(".active-item");

        document.querySelector('a[href*=${id}]').parentNode.classList.add(".active-item");
      }
    }
  }
}
scrollSpy();

// collapsible navbar
const responsiveNavbar = () => {
  document.getElementsByClassName("hamburger-icon")[0].addEventListener("click", e => {
    if (document.getElementById("headerNavbar").className === "navbar-content") {
      document.getElementById("headerNavbar").className += " responsive";
    } else {
      document.getElementById("headerNavbar").className = "navbar-content";
    }
  });
}
responsiveNavbar();


/* EVENT LISTENERS */

// shrink navigation menu on scroll
window.addEventListener("scroll", e => {

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.cssText = "width: calc(7em + 1.5vw); transition: all 2s ease-out";
  } else {
    document.getElementById("logo").style.cssText = "width: calc(10em + 0.5vw); transition: all 2s ease-out";
  }
});
