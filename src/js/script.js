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
