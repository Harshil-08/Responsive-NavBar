const sideBar = document.getElementById("sideBar");
// sideBar.style.backgroundColor = "red";

const hamburgerBtn = document.querySelector(".hamburger-btn");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    sideBar.classList.toggle("hidden");
});