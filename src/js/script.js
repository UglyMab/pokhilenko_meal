const selects = document.querySelectorAll(".select-placeholder");
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

mobileMenuBtn.addEventListener("click", (e) => {
  mobileMenu.classList.remove("hidden");
});
document.addEventListener("click", (e) => {
  if (e.target != mobileMenuBtn && e.target != mobileMenuImage) {
    mobileMenu.classList.add("hidden");
  }
  if (
    e.target.classList.contains("select-item") ||
    !e.target.classList.contains("select-placeholder")
  ) {
    selects.forEach((select) => {
      const list = select.nextElementSibling;
      list.classList.add("hidden");
    });
  }
});
const topBtn = document.querySelector(".footer-top-button");

topBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

selects.forEach((select) => {
  const list = select.nextElementSibling;
  const input = select.previousElementSibling;
  list.addEventListener("click", (e) => {
    const value = e.target.innerText;
    select.innerText = value;
    input.value = value;
  });
  select.addEventListener("click", (e) => {
    list.classList.remove("hidden");
  });
});
const buttons = document.querySelectorAll(".products-item__buttons");

buttons.forEach((elem) => {
  const minus = elem.querySelector(".button-minus");
  const result = elem.querySelector(".result");
  const plus = elem.querySelector(".button-plus");
  const count = +result.dataset.count;

  minus.addEventListener("click", () => {
    if (+result.innerText > count) {
      result.innerText = +result.innerText - count;
    }
  });
  plus.addEventListener("click", () => {
    result.innerText = +result.innerText + count;
  });
});
const deliveryOpen = document.querySelector("#deliveryOpen");
const cartOpen = document.querySelector("#cartOpen");

cartOpen.addEventListener("click", () => {
  document.querySelectorAll(".main-inner").forEach((elem) => {
    if (!elem.classList.contains("cart-inner")) {
      elem.classList.add("hidden");
    } else {
      elem.classList.remove("hidden");
    }
  });
});

deliveryOpen.addEventListener("click", () => {
  document.querySelectorAll(".main-inner").forEach((elem) => {
    if (!elem.classList.contains("delivery-inner")) {
      elem.classList.add("hidden");
    } else {
      elem.classList.remove("hidden");
    }
  });
});
