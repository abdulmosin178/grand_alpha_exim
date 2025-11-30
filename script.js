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
function sendToWhatsApp(e) {
  e.preventDefault(); // stop page refresh

  let name = document.querySelector('input[placeholder="Your Name"]').value;
  let email = document.querySelector('input[placeholder="Your Email"]').value;
  let country = document.querySelector('input[placeholder="Your Country"]').value;
  let message = document.querySelector('textarea').value;

  let whatsappNumber = "917305153682"; // your WhatsApp number

  let text =
    "📩 *New Export Enquiry*\n\n" +
    "*Name:* " + name + "\n" +
    "*Email:* " + email + "\n" +
    "*Country:* " + country + "\n" +
    "*Message:* " + message;

  let url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);

  window.open(url, "_blank"); // open WhatsApp
}
