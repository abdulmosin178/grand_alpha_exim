function toggleMenu() {
  var nav = document.getElementById("navbar");
  nav.classList.toggle("show");
}

// Set dynamic year in footer
document.addEventListener("DOMContentLoaded", function () {
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
