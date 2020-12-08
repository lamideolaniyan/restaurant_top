const bookingHTML = `<section class="footer-booking">
  <section class="booking">
    <div class="booking__header">
      <div class="left-header--top">
        <div class="line">&nbsp;</div>
        <h3 class="h-small">lets</h3>
      </div>
      <h2 class="left-header--bottom h-large white">Book a Table</h2>
    </div>

    <form action="" class="booking__content" id="booking">
      <div class="booking__date">
        <label for="booking-date" class="form-label ii">
          date
          <svg class="icon icon-arrow icon-arrow-down">
            <use xlink:href="img/sprite.svg#icon-keyboard_arrow_down"></use>
          </svg>
        </label>
        <input
          type="text"
          name="booking-date"
          id="booking-date"
          class="form-input booking-date"
          required
        />
      </div>

      <div class="booking__time">
        <label for="booking-time" class="form-label">
          time
          <svg class="icon icon-arrow icon-arrow-down">
            <use xlink:href="img/sprite.svg#icon-keyboard_arrow_down"></use>
          </svg>
        </label>
        <input
          type="text"
          name="booking-time"
          id="booking-time"
          class="form-input"
          required
        />
      </div>

      <div class="booking__guests">
        <label for="booking-guests" class="form-label">
          guest
          <svg class="icon icon-arrow icon-arrow-down">
            <use xlink:href="img/sprite.svg#icon-keyboard_arrow_down"></use>
          </svg>
        </label>
        <input
          type="number"
          name="booking-guests"
          id="booking-guests"
          class="form-input"
          required
        />
      </div>

      <input
        type="email"
        name="booking-email"
        id="booking-email"
        placeholder="Enter your email"
        class="form-input form-input-long"
        required
      />

      <button type="submit" value="Check availability" class="btn form-btn">
        <span>Check availability</span>
        <svg class="icon icon-arrow">
          <use xlink:href="img/sprite.svg#icon-keyboard_arrow_right"></use>
        </svg>
      </button>
    </form>
  </section>
  <footer class="footer" id="contact">
    <div class="footer__blur">&nbsp</div>
    <h2 class="footer__header"><span>the</span> restro</h2>
    <div class="footer__content">
      <div class="footer__about">
        <h3 class="h-small">about us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          architecto ad deserunt id, nisi possimus animi impedit perferendis.
        </p>
      </div>
      <div class="footer__newsletter">
        <h3 class="h-small">get news & offers</h3>
        <form action="" class="footer__newsletter-form">
          <input
            type="email"
            class="newsletter-email"
            name="newsletter-email"
            placeholder="Enter your email"
            required
          />
          <button class="newsletter-btn" type="submit">
            <svg class="icon icon-arrow">
              <use xlink:href="img/sprite.svg#icon-keyboard_arrow_right"></use>
            </svg>
          </button>
        </form>
      </div>
      <div class="footer__contact">
        <h3 class="h-small">contact us</h3>
        <div class="contact-grid">
          <p>46, Salako Street<br />Oluyole Estate. Ibadan</p>
          <p>
            +234 8130884044 <br />
            olaniyanolamide@gmail.com
          </p>
          <p>
            Monday - Wednesday <br />
            7:00AM - 9:00PM
          </p>
          <p>
            Wednesday - Sunday <br />
            8:00AM - 10:30PM
          </p>
        </div>
      </div>
    </div>
  </footer>
</section>`;

import flatpickr from "flatpickr";
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

const displayBooking = (container, navHTML) => {
  container.addEventListener("click", (e) => {
    if (e.target.id === "booking-nav") {
      container.innerHTML = "";
      container.insertAdjacentHTML("beforeend", bookingHTML);
      container.insertAdjacentHTML("beforeend", navHTML);

      fp();
    }
  });
};

export default displayBooking;
