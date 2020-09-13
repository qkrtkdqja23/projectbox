"use strict";
/* arrow up */

const arrow__up = document.querySelector(".arrow--up");
document.addEventListener("scroll", () => {
  if (window.scrollY < 538) {
    arrow__up.classList.remove("visible");
  } else {
    arrow__up.classList.add("visible");
  }
});
const nav__wrap = document.querySelector(".nav__wrap");
arrow__up.addEventListener("click", () => {
  goToScrollTarget(".body__wrap");
});

function goToScrollTarget(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
