const hamburgerMenu = document.querySelector(".ham-menu");
const navCollapse = document.querySelector(".navigation-section__collapse");

hamburgerMenu.addEventListener("click", function () {
  navCollapse.classList.toggle("show-menu");
});
