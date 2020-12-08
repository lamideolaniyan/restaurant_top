const menuHTML = `<section class="discover" id="menu">
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

const displayMenu = (container, navHTML) => {
  container.addEventListener("click", (e) => {
    if (e.target.id === "menu-nav") {
      container.innerHTML = "";
      container.insertAdjacentHTML("beforeend", menuHTML);
      container.insertAdjacentHTML("beforeend", navHTML);
    }
  });
};

export default displayMenu;
