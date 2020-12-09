export const headerHTML = `<header class="header">
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

export const bookingHTML = `<section class="footer-booking">
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

export const menuHTML = `<section class="discover" id="menu">
  <div class="center-header discover__header">
    <h3 class="h-small">discover</h3>
    <h2 class="h-large">our food menu</h2>
  </div>
  <div class="discover__content">
    <div class="discover__main">
      <h3 class="h-medium">main course</h3>
      <div class="menu-item">
        <span>super delicious zuppa toscana</span><span class="underline"></span
        ><span>$40</span>
      </div>
      <p class="menu-detail">chicken + rice + sausage + spinach</p>
      <p class="menu-item">
        bacon coli baked australian beef<span class="underline"></span>$40
      </p>
      <p class="menu-detail">chicken + rice + sausage + spinach</p>
    </div>
    <div class="discover__soup">
      <h3 class="h-medium">soups & salads</h3>
      <p class="menu-item">
        <span>salat banana flower</span><span class="underline"></span
        ><span>$40</span>
      </p>
      <p class="menu-detail">chicken + rice + sausage + spinach</p>
      <p class="menu-item">
        gourmet mushroom risotto<span class="underline"></span>$40
      </p>
      <p class="menu-detail">chicken + rice + sausage + spinach</p>
    </div>
    <div class="discover__dessert">
      <h3 class="h-medium">desserts</h3>
      <p class="menu-item">
        <span>ice cream tarte apple</span><span class="underline"></span
        ><span>$40</span>
      </p>
      <p class="menu-detail">chicken + rice + sausage + spinach</p>
      <p class="menu-item">
        fruit mile feuile<span class="underline"></span>$40
      </p>
      <p class="menu-detail">chicken + rice + sausage + spinach</p>
    </div>
    <div class="discover__drinks">
      <h3 class="h-medium">drinks</h3>
      <p class="menu-item">
        <span>double chocolate mud pie</span><span class="underline"></span
        ><span>$40</span>
      </p>
      <p class="menu-detail">chicken + rice + sausage + spinach</p>
      <p class="menu-item">
        panmacotte cream cake<span class="underline"></span>$40
      </p>
      <p class="menu-detail">chicken + rice + sausage + spinach</p>
    </div>
  </div>
</section>`;
