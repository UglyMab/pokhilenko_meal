const headerLogo = document.querySelector(".header-logo-link");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 10) {
    headerLogo.style.width = "80px";
    headerLogo.style.height = "80px";
    headerLogo.style.marginRight = "80px";
  } else {
    headerLogo.style.width = "";
    headerLogo.style.height = "";
    headerLogo.style.marginRight = "";
  }
});

const mobileMenuBtn = document.querySelector(".header-menu-button");
const mobileMenuImage = document.querySelector(".header-menu-image");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");

mobileMenuBtn.addEventListener("click", (e) => {
  mobileMenu.classList.remove("hidden");
});
document.addEventListener("click", (e) => {
  if (e.target != mobileMenuBtn && e.target != mobileMenuImage) {
    mobileMenu.classList.add("hidden");
  }
});
