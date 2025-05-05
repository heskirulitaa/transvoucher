// === Manual Scroll per dynamic number of cards based on screen size ===
const categories = document.querySelector(".categories");
const card = document.querySelector(".categories-card");
const cards = document.querySelectorAll(".categories-card");
const indicatorBar = document.getElementById("indicator-bar");

// Responsive function to calculate the number of cards per page
function getItemsPerPage() {
  const containerWidth = categories.offsetWidth;
  const cardWidth = card.offsetWidth;
  return Math.floor(containerWidth / cardWidth); // Returns number of cards that fit in the container
}

// Function to update indicator based on current page
function updateIndicators() {
  const itemsPerPage = getItemsPerPage();
  const totalCards = cards.length;
  const totalPages = Math.ceil(totalCards / itemsPerPage);

  // Clear and recreate the indicator bar
  indicatorBar.innerHTML = "";
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("indicator");
    if (i === 0) dot.classList.add("active");
    indicatorBar.appendChild(dot);
  }

  // Re-select the indicators after they are created
  indicators = document.querySelectorAll(".indicator");
}

// Update the active indicator based on scroll position
let currentPage = 0;
function updateIndicator(index) {
  indicators.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  currentPage = index;
}

// Scroll manual detection
let scrollStop;
categories.addEventListener("scroll", () => {
  clearTimeout(scrollStop);

  scrollStop = setTimeout(() => {
    const cardWidth = card.offsetWidth;
    const itemsPerPage = getItemsPerPage();
    const pageIndex = Math.round(categories.scrollLeft / (cardWidth * itemsPerPage));
    updateIndicator(pageIndex);
  }, 100);
});

// Initial setup
updateIndicators(); // Calls to create the indicator based on the initial screen size

// Update indicators when window is resized
window.addEventListener("resize", () => {
  updateIndicators();
});

// === Voucher Rotation ===
const vouchers = document.querySelectorAll(".box .rectangle");
let currentIndex = 0;

function showVoucher(index) {
  vouchers.forEach((v, i) => {
    v.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % vouchers.length;
  showVoucher(currentIndex);
}, 4000); // Changes voucher every 4 seconds

// Show first voucher initially
showVoucher(currentIndex);

// === Continue Button Event ===
document.addEventListener("DOMContentLoaded", function () {
  const continueButton = document.getElementById("continue-button");

  continueButton.addEventListener("click", function () {
    window.location.href = "signup.html";
  });
});

// === Display Current Year ===
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});

// === Toggle Password Visibility ===
function togglePassword() {
  const passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

// === Google Button Click ===
document.querySelector(".google-btn").addEventListener("click", function () {
  window.location.href = "https://google.com";
});
