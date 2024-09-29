// Select the start button and section2
document.querySelector(".start").addEventListener("click", function () {
  // Scroll to section2 with smooth behavior
  document.querySelector(".section2").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Select the button
const learnMoreButton = document.getElementById("mine");

// Add click event listener for the "mine" button
learnMoreButton.addEventListener("click", () => {
  window.open("https://www.minecraft.net/en-us/about-minecraft", "_blank"); // Open the URL in a new tab
});

// Select the button for "dungeon"
const learnMoreButton1 = document.getElementById("dungeon");

// Add click event listener for the "dungeon" button
learnMoreButton1.addEventListener("click", () => {
  window.open("https://www.minecraft.net/en-us/about-dungeons", "_blank"); // Open the URL in a new tab
});

// Select the button for "legend"
const learnMoreButton2 = document.getElementById("legend");

// Add click event listener for the "legend" button
learnMoreButton2.addEventListener("click", () => {
  window.open("https://www.minecraft.net/en-us/about-legends", "_blank"); // Open the URL in a new tab
});

// Select the button for "education"
const learnMoreButton3 = document.getElementById("education");

// Add click event listener for the "education" button
learnMoreButton3.addEventListener("click", () => {
  window.open("https://education.minecraft.net/en-us", "_blank"); // Open the URL in a new tab
});

// Dapatkan semua tombol dan div dengan class 'info-trailer'
const buttons = document.querySelectorAll(".minecraft");
const trailers = document.querySelectorAll(".info-trailer");

// Fungsi untuk menyembunyikan semua trailer
function hideAllTrailers() {
  trailers.forEach((trailer) => {
    trailer.style.display = "none";
  });
}

// Fungsi untuk mengatur tombol aktif
function setActiveButton(index) {
  buttons.forEach((button, btnIndex) => {
    if (btnIndex === index) {
      button.classList.add("button-active"); // Tambahkan kelas aktif
    } else {
      button.classList.remove("button-active"); // Hapus kelas aktif dari tombol lain
    }
  });
}

// Tambahkan event listener untuk setiap tombol
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    hideAllTrailers(); // Sembunyikan semua trailer
    setActiveButton(index); // Atur tombol aktif

    if (index === 0) {
      document.getElementById("mine").style.display = "block"; // Show mine trailer
    } else if (index === 1) {
      document.getElementById("dungeon").style.display = "block"; // Show dungeon trailer
    } else if (index === 2) {
      document.getElementById("legend").style.display = "block"; // Show legend trailer
    } else if (index === 3) {
      document.getElementById("education").style.display = "block"; // Show education trailer
    }
  });
});

// Sembunyikan semua trailer saat halaman dimuat
hideAllTrailers();

// Show the mine trailer on page load
document.getElementById("mine").style.display = "block"; // Show mine trailer initially
