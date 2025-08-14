// For Dynamic HTML.....
let itemsContainer = document.querySelector("#items-container");
let itemsElement = [];

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  onLoadeded();
  initializeCategories(items);
  onLoad();
  setupNavigation();
});

// Function to setup navigation with active state
function setupNavigation() {
  const navLinks = document.querySelectorAll("#navbar .item a");

  // Function to update active state
  function updateActiveLink() {
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");
      // Remove active class from all links
      link.classList.remove("active");

      // Add active class to current link
      if (currentPath.includes(linkPath) && linkPath !== "#") {
        link.classList.add("active");
      }

      // Special case for index.html or root path
      if (currentPath === "/" || currentPath.endsWith("index.html")) {
        const homeLink = document.querySelector('a[href="Home.html"]');
        if (homeLink) {
          homeLink.classList.add("active");
        }
      }
    });
  }

  // Update active state on page load
  updateActiveLink();

  // Update active state when clicking links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));
      // Add active class to clicked link
      this.classList.add("active");
    });
  });

  // Update active state when using browser back/forward buttons
  window.addEventListener("popstate", updateActiveLink);
}

let displayProduct = (myitem) => {
  if (!itemsContainer) {
    return;
  }
  let innerHTML = "";
  myitem.forEach((item, itemIndex) => {
    innerHTML += `
    <div class="item-container">
    <div class="rating-container">
    <div class="company-name">${item.companyName}</div>
    <div class="rating">
    <span class="rating-star">${item.rating.stars}<i class="fa-solid fa-star"></i></span>
    <span class="no-of-reviews">${item.rating.noOfReviews}</span>
  </div> 
  </div>

  <div class="info-item-container">
  <div class="info-container">
  <div class="item-name">${item.itemName}</div>
  <div class="prise">
  <span class="current-prise">₹${item.price.currentPrise}</span>
  <span class="original-prise">₹${item.price.originalPrise}</span>
  <span class=".discount">%${item.price.discount}</span> 
  </div>
  </div>

  <div class="image-container" id="image-container-${itemIndex}" data-item-id="${item.id}">
  <div class="image-box">
  <a href="items.html">
    <img src="${item.item_image1}" alt=""/>
    </a>
    </div>
    </div>
    </div>
    
    <div class="button-box" id="button-box-${itemIndex}"></div>

   
    <div class="button-container">
      <button class="btn-add-bag" data-item-id="${item.id}">Add to Wishlist</button>
    </div>
    </div>

    `;
  });
  itemsContainer.innerHTML = innerHTML;

  // Add event listeners after creating elements
  document.querySelectorAll(".image-container").forEach((container) => {
    container.addEventListener("click", function () {
      const itemId = this.getAttribute("data-item-id");
      addToItems(itemId);
    });
  });

  document.querySelectorAll(".btn-add-bag").forEach((button) => {
    button.addEventListener("click", function () {
      const itemId = this.getAttribute("data-item-id");
      addToWishlist(itemId);
    });
  });
};

//  Code For Filter Product....
let categoryList = document.querySelector("#categoryList");
let allCategories = [];
let initializeCategories = (items) => {
  if (!categoryList) {
    return;
  }
  items.forEach((item) => {
    if (!allCategories.includes(item.category)) {
      categoryList.innerHTML += `<label class="choose-item">
      <input type="checkbox" onclick="categoryFilter(event)" value="${item.category}">${item.category}
    </label>
    `;
      allCategories.push(item.category);
    }
  });
};
initializeCategories(items);

//
let selectedCategories = [];
let categoryFilter = (event) => {
  let category = event.target.value;

  if (event.target.checked) {
    selectedCategories.push(category);
  } else {
    selectedCategories = selectedCategories.filter((cat) => cat !== category);
  }

  let filteredItems = items.filter((item) =>
    selectedCategories.includes(item.category)
  );

  if (selectedCategories.length == 0) {
    filteredItems = items;
  }
  displayProduct(filteredItems);
};

// Code For Wishlist......

let wishlistItems;
onLoad();

function onLoad() {
  let wishlistItemStr = localStorage.getItem("wishlistItems");
  wishlistItems = wishlistItemStr ? JSON.parse(wishlistItemStr) : [];
  displayItemOnHomePage();
  displayWishlistIcon();
}

function addToWishlist(itemId) {
  if (!wishlistItems.includes(itemId)) {
    wishlistItems.push(itemId);
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    displayWishlistIcon();
  } else {
    alert("This Item is Alleady in Wishlist");
  }
}

// let buttonAddWishlist = document.querySelectorAll('.btn-add-bag')
// buttonAddWishlist.forEach((buttonItems)=>{
//     console.log(buttonItems)

// })

function displayWishlistIcon() {
  let wishlistItemCountElement = document.querySelector(".wishlist-count");
  if (wishlistItems.length > 0) {
    wishlistItemCountElement.innerText = wishlistItems.length;
    wishlistItemCountElement.style.visibility = "visible";
  } else {
    wishlistItemCountElement.style.visibility = "hidden";
  }
}

function displayItemOnHomePage() {
  if (!itemsContainer) {
    return;
  }
  displayProduct(items);
}

// Code For ItemElement Code.....
function onLoadeded() {
  let itemsElementStr = localStorage.getItem("itemsElement");
  itemsElement = itemsElementStr ? JSON.parse(itemsElementStr) : [];
}

function addToItems(itemId) {
  itemsElement = [itemId];
  localStorage.setItem("itemsElement", JSON.stringify(itemsElement));
}

// Initialize after all functions are defined
onLoadeded();

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
