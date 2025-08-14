function clickme(smallImg) {
  let mainImg = document.querySelector("#main-img");
  mainImg.src = smallImg.src;
}

let itemsObject;
onLoadeded();
function onLoadeded() {
  loadItemsElement();
  displayItemElement();
  displayInfoElement();
  displaySimilarProducts(); // Added this line to display similar products
}

function loadItemsElement() {
  itemsObject = itemsElement.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  // console.log(itemsObject)
}

function displayItemElement() {
  let itemElementContainer = document.querySelector(".items-container");
  let innerHTML = "";
  itemsObject.forEach((itemsElement) => {
    innerHTML += generateItemHTML(itemsElement);
  });
  itemElementContainer.innerHTML = innerHTML;
}

function generateItemHTML(item) {
  return `
<div class="item-container">

<div class="items-box">
  <div class="item1">
    <img src="${item.item_image1}" alt=""
    onclick="clickme(this)"/>
  </div>
</div>
<div class="main-item">
  <img src="${item.item_image1}" alt="" id="main-img"/>
</div>
</div>

<div class="button-container">
<button class="bag-button" onClick="addToBag(${item.id})">ADD TO BAG</button>
<button class="wishlist-button" onClick="addToWishlist(${item.id})"> WISHLIST</button>
</div>
`;
}

function displayInfoElement() {
  let infoContainerElement = document.querySelector(".infos-container");
  let innerHTML = "";
  itemsObject.forEach((itemsElement) => {
    innerHTML += generateItemmHTML(itemsElement);
  });
  infoContainerElement.innerHTML = innerHTML;
}
function generateItemmHTML(item) {
  return `
  <div class="info-container">

  <div class="company-name">${item.companyName}</div>
  <div class="item-name">${item.itemNameLong}</div>

  <div class="itemSize-and-Qty">
    <span class="item-Qty">
      <span class="size-name">Qty | </span>
      <select name="Qty" id="Qty-list">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    </span>
  </div>
  <div class="rating-box">
    <span class="rating">${item.rating.stars} ⭐️ |</span>
    <span class="rating-count">${item.rating.noOfReviews} Rating</span>
  </div>
    <div class="prise">
      <span class="current-prise">₹${item.price.currentPrise}</span>
      <span class="original-prise">₹${item.price.originalPrise}</span>
      <span class=".discount">%${item.price.discount} OFF</span>
      </div>
      <span class="taxeHeading">
      <p>inclusive of all taxes</p>
    </span>
   
    <div class="delivery-content">
      <div class="delivery-option">DELIVERY OPTION</div>
      <input type="text" class="pincode-input" placeholder="Enter pincode" />
      <div class="pinNote">Please enter PIN code to check delivery time & Pay on Delivery Availability</div>
    </div>
    <div class="note">100% Original Products</div>
    <div class="note">Pay on delivery might be available</div>

  <div class="dropdown">
  <button onclick="toggleDropdown()" class="dropbtn">View all coupons</button>
  <div id="myDropdown" class="dropdown-content">
  <div class="coupons-box1"></div>
  <div class="coupons-box1"></div>
  <div class="coupons-box1"></div>
  <div class="coupons-box1"></div>
  </div>
</div>

<h1 class="Highlights-text">Highlights</h1>

<div class="product-detels">
<div class="product-detels-container1">

<div class="box1">
<div class="product-item-name-box">
<p class="product-item-name">Product Type</p>
</div>
<div class="product-box">
<p class="product">${item.productDetels.ProductType}</p>
</div>
</div>

<div class="box1">
<div class="product-item-name-box">
<p class="product-item-name">Is Perishable</p>
</div>
<div class="product-box">
<p class="product">${item.productDetels.IsPerishable}</p>
</div>
</div>

<div class="box1">
<div class="product-item-name-box">
<p class="product-item-name">Flavour</p>
</div>
<div class="product-box">
<p class="product">${item.productDetels.Flavour}</p>
</div>
</div>

<div class="box1">
<div class="product-item-name-box">
<p class="product-item-name">AllergenInformation</p>
</div>
<div class="product-box">
<p class="product">${item.productDetels.AllergenInformation}</p>
</div>
</div>

<div class="box1">
<div class="product-item-name-box">
<p class="product-item-name">Brand</p>
</div>
<div class="product-box">
<p class="product">${item.productDetels.Brand}</p>
</div>
</div>

<div class="box1">
<div class="product-item-name-box">
<p class="product-item-name">Weight</p>
</div>
<div class="product-box">
<p class="product">${item.productDetels.Weight}</p>
</div>
</div>

<div class="box1">
<div class="product-item-name-box">
<p class="product-item-name">Dietary Preference</p>
</div>
<div class="product-box">
<p class="product">${item.productDetels.DietaryPreference}</p>
</div>
</div>

<div class="box1">
<div class="product-item-name-box">
<p class="product-item-name">Ingredients</p>
</div>
<div class="product-box">
<p class="product">${item.productDetels.Ingredients}</p>
</div>
</div>

<div class="box1">
<div class="product-item-name-box">
<p class="product-item-name">Key Features</p>
</div>
<div class="product-box">
<p class="product">${item.productDetels.KeyFeatures}</p>
</div>
</div>

<div class="box1">
<div class="product-item-name-box">
<p class="product-item-name">Nutrition Information</p>
</div>
<div class="product-box">
<p class="product">${item.productDetels.NutritionInformation}</p>
</div>
</div>

<div class="box1">
<div class="product-item-name-box">
<p class="product-item-name">Packaging Type</p>
</div>
<div class="product-box">
<p class="product">${item.productDetels.PackagingType}</p>
</div>
</div>

<div class="box1">
<div class="product-item-name-box">
<p class="product-item-name">Storage Instruction</p>
</div>
<div class="product-box">
<p class="product">${item.productDetels.StorageInstruction}</p>
</div>
</div>



</div>
</div>
</div>
  `;
}

let sizeChart = document.querySelectorAll(".item1");
sizeChart.forEach((sizeElement) => {
  sizeElement.addEventListener("click", () => {
    sizeChart.forEach((sizeChartt) => {
      sizeChartt.style.border = "1px solid rgb(229, 226, 226)";
    });

    sizeElement.style.border = "2px solid black";
  });
});

function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close dropdown if user clicks outside
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function toggleDropdown1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}



// New function to display similar products
function displaySimilarProducts() {
  // Only proceed if we have a current product
  if (!itemsObject || itemsObject.length === 0) return;

  const currentProduct = itemsObject[0]; // Get the current product being viewed
  const similarProductsContainer = document.getElementById(
    "similar-products-container"
  );

  if (!similarProductsContainer) return;

  // Find similar products (same category but different product)
  let similarProducts = items.filter(
    (item) =>
      item.category === currentProduct.category && // Same category
      item.id !== currentProduct.id // Different product
  );

  // Also include some products with similar price range
  const priceThreshold = 10; // Price difference threshold
  let priceSimilarProducts = items.filter(
    (item) =>
      Math.abs(item.price.currentPrise - currentProduct.price.currentPrise) <=
        priceThreshold && // Similar price
      item.id !== currentProduct.id && // Different product
      item.category !== currentProduct.category // Different category to avoid duplicates
  );

  // Combine both lists and limit to a reasonable number (8)
  similarProducts = [...similarProducts, ...priceSimilarProducts].slice(0, 8);

  // Shuffle the array to mix category and price-based similar products
  similarProducts = shuffleArray(similarProducts);

  // Generate HTML for similar products
  let innerHTML = "";
  similarProducts.forEach((product) => {
    innerHTML += generateSimilarProductHTML(product);
  });

  similarProductsContainer.innerHTML = innerHTML;
}

// Function to generate HTML for a similar product card
function generateSimilarProductHTML(product) {
  return `
    <div class="similar-product-card">
      <a href="items.html" onclick="addToItems(${product.id}); return true;">
        <div class="similar-product-image">
          <img src="${product.item_image1}" alt="${product.itemName}">
        </div>
        </a>
        <div class="similar-product-details">
          <div class="similar-product-company">${product.companyName}</div>
          <div class="similar-product-name">${product.itemNameLong}</div>
          <div class="similar-product-price">
            <span class="similar-price-current">₹${product.price.currentPrise}</span>
            <span class="similar-price-original">₹${product.price.originalPrise}</span>
            <span class="similar-price-discount">${product.price.discount}% OFF</span>
          </div>
          <div class="similar-product-rating">
            <span class="similar-product-stars">${product.rating.stars} ⭐</span>
            <span class="similar-product-reviews">(${product.rating.noOfReviews})</span>
          </div>
        </div>
    
      <button class="view-product-btn" onclick="addToItems(${product.id}); window.location.href='items.html';">View Product</button>
    </div>
  `;
}

// Utility function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
