/*import flatpickr from "flatpickr";
import "../../node_modules/flatpickr/dist/flatpickr.min.css";

const fp = () => {
  const today = new Date();

  flatpickr("#booking-date", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    defaultDate: today,
    minDate: today,
  });
  flatpickr("#booking-time", {
    noCalendar: true,
    enableTime: true,
    dateFormat: "H:i",
    time_24hr: false,
  });
};

window.addEventListener("load", fp);

document.querySelector(".ii").addEventListener("click", (e) => {
  console.log(document.querySelector(".booking-date").classList);
});

const imgArray = Array.from(
  document.querySelectorAll(".gallery__image--small")
);

imgArray.forEach((img) => {
  img.addEventListener("mouseover", (e) => {
    const imgSrc = e.target.getAttribute("src");
    document
      .querySelector(".gallery__image--large")
      .setAttribute("src", imgSrc);
  });
});
*/

import displayBooking from "./booking";
import displayMenu from "./menu";

const headerHTML = `<header class="header">
      <div class="header__text">
        <div class="line">&nbsp;</div>
        <p>Discover your taste</p>
        <div class="content">
          <h1>Eat healthy and Natural Food</h1>
          <a class="btn header__btn">
            <span>Discover menu </span>
            <svg class="icon icon-arrow">
              <use xlink:href="img/sprite.svg#icon-keyboard_arrow_right"></use>
            </svg>
          </a>
        </div>

        <div class="header__contact">
          <div class="line">&nbsp;</div>
          <svg class="icon icon-contact">
            <use
              xlink:href="img/sprite.svg#icon-social-twitter-circular"
            ></use></svg
          ><svg class="icon icon-contact">
            <use
              xlink:href="img/sprite.svg#icon-social-github-circular"
            ></use></svg
          ><svg class="icon icon-contact">
            <use
              xlink:href="img/sprite.svg#icon-social-facebook-circular"
            ></use>
          </svg>
        </div>
      </div>

      <figure class="header__img">
        <!-- <img src="./img/hero.jpg" alt="restaurant hero" /> -->
      </figure>

      <div class="header__slider">
        <div class="header__slider-hbg">
          <svg class="icon icon-hbg">
            <use xlink:href="img/sprite.svg#icon-menu"></use>
          </svg>
        </div>
        <div class="header__slider-pins">
          <svg class="icon icon-pin icon-pin-1">
            <use xlink:href="img/sprite.svg#icon-dot-single"></use></svg
          ><svg class="icon icon-pin icon-pin-2">
            <use xlink:href="img/sprite.svg#icon-dot-single"></use></svg
          ><svg class="icon icon-pin icon-pin-3">
            <use xlink:href="img/sprite.svg#icon-dot-single"></use></svg
          ><svg class="icon icon-pin icon-pin-4">
            <use xlink:href="img/sprite.svg#icon-dot-single"></use></svg
          ><svg class="icon icon-pin icon-pin-5">
            <use xlink:href="img/sprite.svg#icon-dot-single"></use>
          </svg>
        </div>
        <div class="header__slider-btn">
          <div class="header__slider-btn--all header__slider-btn--left">
            <svg class="icon icon-slider-btn icon-slider-btn-left">
              <use xlink:href="img/sprite.svg#icon-keyboard_arrow_left"></use>
            </svg>
          </div>
          <div class="header__slider-btn--all header__slider-btn--right">
            <svg class="icon icon-slider-btn icon-slider-btn-right">
              <use xlink:href="img/sprite.svg#icon-keyboard_arrow_right"></use>
            </svg>
          </div>
        </div>
      </div>
    </header>`;

export const navHTML = `  <nav class="nav">
      <!-- <div class="divider">&nbsp</div> -->
      <ul class="nav__list">
        <li id="home" class="nav__item">
         home
        </li>
        <li id="menu-nav" class="nav__item">
         menu
        </li>
        <li id="specialities-nav" class="nav__item">
         specialities
        </li>
        <li id="booking-nav" class="nav__item booking-nav">
         reservations
        </li>
        <li id="contact-nav" class="nav__item contact">
         contact
        </li>
        <li class="nav__item">
          <svg class="icon search-icon">
            <use xlink:href="img/sprite.svg#icon-search"></use>
          </svg>
        </li>
      </ul>

      <!-- <div class="hbg">
        <svg class="icon icon-hbg">
          <use xlink:href="img/sprite.svg#icon-menu"></use>
        </svg>
      </div> -->
    </nav>`;

const container = document.querySelector(".container");

window.addEventListener("load", () => {
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", headerHTML);
  container.insertAdjacentHTML("beforeend", navHTML);

  const menu = document.querySelector(".menu-nav");
  displayMenu(container, navHTML);

  displayBooking(container, navHTML);
});

container.addEventListener("click", (e) => {
  if (e.target.id === "home") {
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", headerHTML);
    container.insertAdjacentHTML("beforeend", navHTML);
  }
});
