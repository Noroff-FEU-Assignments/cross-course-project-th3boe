const container = document.querySelector(".new-jackets");
const saleContainer = document.querySelector(".sale-jackets");
const menContainer = document.querySelector(".jackets");
const womenContainer = document.querySelector(".jackets");

const url = "https://boedesign.no/RainyDays/wp-json/wc/v3/products?per_page=15";

const key =
  "&consumer_key=ck_b149536d7817b91138e879251189789ed33a8ea5&consumer_secret=cs_a53cbc23d3f158c31773e1c6e5340e33d9838e70";

const featured = "&category=19";
const saleCategory = "&category=18";
const menCategory = "&category=17";
const womenCategory = "&category=16";

async function newarrivals() {
  try {
    const response = await fetch(url + featured + key);
    const result = await response.json();

    console.log(result);

    container.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      if (i === 3) {
        break;
      }
      container.innerHTML += `<a href="jacket.html?id=${result[i].id}"><div class="jacket-one">
      <img src="${result[i].images[0].src}" alt="${result[i].name}" class="img-one" />
                  <h3>${result[i].name}</h3>
                  <p>${result[i].short_description}</p>
                  <p>${result[i].price_html}</p>
                                                        </div></a>`;
    }
  } catch (error) {
    container.innerHTML =
      "<div class=error>Oh no.. Something went wrong, could not load the products.</div>";
  }
}

newarrivals();

async function sale() {
  try {
    const saleResponse = await fetch(url + saleCategory + key);
    const sale = await saleResponse.json();

    console.log(sale);

    saleContainer.innerHTML = "";

    for (let c = 0; c < sale.length; c++) {
      if (c === 3) {
        break;
      }
      saleContainer.innerHTML += `<a href="jacket.html?id=${sale[c].id}"><div class="sale-one">
        <img src="${sale[c].images[0].src}" alt="${sale[c].name}" class="img-one" />
                    <h3>${sale[c].name}</h3>
                    <p>${sale[c].short_description}</p>
                    <p>${sale[c].price_html}</p>
                                                          </div></a>`;
    }
  } catch (error) {
    saleContainer.innerHTML =
      "<div class=error>Oh no.. Something went wrong, could not load the products.</div>";
  }
}

sale();

async function men() {
  try {
    const menResponse = await fetch(url + menCategory + key);
    const menJackets = await menResponse.json();

    console.log(menJackets);

    menContainer.innerHTML = "";

    menJackets.forEach(function (men) {
      menContainer.innerHTML += `<a href="jacket.html?id=${men.id}"><div class="sale-one">
        <img src="${men.images[0].src}" alt="${men.name}" class="img-one" />
                    <h3>${men.name}</h3>
                    <p>${men.short_description}</p>
                    <p>${men.price_html}</p>
                                                          </div></a>`;
    });
  } catch (error) {
    menContainer.innerHTML =
      "<div class=error>Oh no.. Something went wrong, could not load the products.</div>";
  }
}

men();

async function women() {
  try {
    const womenResponse = await fetch(url + womenCategory + key);
    const womenJackets = await womenResponse.json();

    console.log(womenJackets);

    womenContainer.innerHTML = "";

    womenJackets.forEach(function (women) {
      womenContainer.innerHTML += `<a href="jacket.html?id=${women.id}"><div class="sale-one">
        <img src="${women.images[0].src}" alt="${women.name}" class="img-one" />
                    <h3>${women.name}</h3>
                    <p>${women.short_description}</p>
                    <p>${women.price_html}</p>
                                                          </div></a>`;
    });
  } catch (error) {
    womenContainer.innerHTML =
      "<div class=error>Oh no.. Something went wrong, could not load the products.</div>";
  }
}

women();
