const title = document.querySelector("title");

const container = document.querySelector(".jacket-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://boedesign.no/RainyDays/wp-json/wc/v3/products/";

const key =
  "?consumer_key=ck_b149536d7817b91138e879251189789ed33a8ea5&consumer_secret=cs_a53cbc23d3f158c31773e1c6e5340e33d9838e70";

async function fetchProduct() {
  try {
    const response = await fetch(url + id + key);
    const product = await response.json();

    console.log(product);

    container.innerHTML = "";

    title.innerHTML = `${product.name} | Rainydays`;

    container.innerHTML += `<div class="product-content">
                  <h1>${product.name}</h1>
                  <h2>${product.short_description}</h2>
                  <p class="title">${product.description}</p>
                  <img src="${product.images[0].src}" class="product-image-jacket" alt="${product.name}">
                  <p class="price">${product.price_html}</p>
                  <p>Product is ${product.stock_status}</p>
                  <select class="product-selector">
                    <option>${product.attributes[0].name}</option>
                    <option>${product.attributes[0].options[0]}</option>
                    <option>${product.attributes[0].options[1]}</option>
                    <option>${product.attributes[0].options[2]}</option>
                    <option>${product.attributes[0].options[3]}</option>
                    <option>${product.attributes[0].options[4]}</option>
                    <option>${product.attributes[0].options[5]}</option>
                  </select>
                  <select class="product-selector">
                    <option>${product.attributes[1].name}</option>
                    <option>${product.attributes[1].options[0]}</option>
                    <option>${product.attributes[1].options[1]}</option>
                    <option>${product.attributes[1].options[2]}</option>
                    <option>${product.attributes[1].options[3]}</option>
                    <option>${product.attributes[1].options[4]}</option>
                  </select>
                  <input type="submit" class="the-button" value="ADD TO CART" class="button">
                                                  </div>`;
  } catch (error) {
    console.log(error);
    container.innerHTML =
      "<div class=error>Oh no.. Something went wrong, give us a minute while we fetch the product details.</div>";
  }
}

fetchProduct();
