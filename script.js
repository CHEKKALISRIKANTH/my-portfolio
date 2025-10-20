// Handle Contact Form
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
});

// Go Back Button Function
function goBack() {
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
}