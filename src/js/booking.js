import flatpickr from "flatpickr";
import "../../node_modules/flatpickr/dist/flatpickr.min.css";
import { bookingHTML } from "./html";

const flatPicker = () => {
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

const displayBooking = (container, navHTML) => {
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", bookingHTML);
  container.insertAdjacentHTML("beforeend", navHTML);

  flatPicker();
};

export default displayBooking;
