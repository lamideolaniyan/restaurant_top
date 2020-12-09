import displayBooking from "./booking";
import { headerHTML, navHTML } from "./html";
import displayMenu from "./menu";

const container = document.querySelector(".container");

window.addEventListener("load", () => {
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", headerHTML);
  container.insertAdjacentHTML("beforeend", navHTML);
});

container.addEventListener("click", (e) => {
  if (e.target.id === "home") {
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", headerHTML);
    container.insertAdjacentHTML("beforeend", navHTML);
  } else if (e.target.id === "menu-nav") {
    displayMenu(container, navHTML);
  } else if (e.target.id === "booking-nav" || e.target.id === "contact-nav") {
    displayBooking(container, navHTML);
  }
});
