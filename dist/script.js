const sideBar = document.getElementById("sideBar");
const hamburgerBtn = document.querySelector(".hamburger-btn");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  sideBar.classList.toggle("hidden");
});
