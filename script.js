/* VARIABLES */
var aboutHeight = document.getElementById('aboutSection').scrollHeight;

/* EVENT LISTENERS */

// scroll
window.addEventListener("scroll", function(e) {
  currentPosition = window.scrollY;
  if (currentPosition >= aboutHeight) {
    alert("about section!");
    /*
    document.getElementById("navbarSection").style.background = "#333";
    document.getElementById("navbarSection").style.transition = "all 0.5s";
    */
  } else {
    /*
    document.getElementById("navbarSection").style.background = "transparent";
    document.getElementById("navbarSection").style.transition = "all 0.5s";
    */
  }
});
