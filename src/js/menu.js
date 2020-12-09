import { menuHTML } from "./html";

const displayMenu = (container, navHTML) => {
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", menuHTML);
  container.insertAdjacentHTML("beforeend", navHTML);
};

export default displayMenu;
