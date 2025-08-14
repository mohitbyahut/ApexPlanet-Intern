let wishlistItemObject;
onLoad();

function onLoad() {
  loadWishlistItemsObject();
  displayWishlistItems();
  displayWishlistItemCount();
}

// 1
function displayWishlistItems() {
  let containerElement = document.querySelector(".wishlists-container");
  if (!containerElement) {
    return;
  }
  let innerHTML = "";
  wishlistItemObject.forEach((wishlistItem) => {
    innerHTML += generateItemHTML(wishlistItem);
  });
  containerElement.innerHTML = innerHTML;
}

// 2
function generateItemHTML(item) {
  return `
  <div class="wishlist-container">
  <div class="image-container">
    <a href="#"><img src="${item.item_image1}" alt="image-Error"/></a>
    
  <button class="cancle-button" onClick="removeFromWishlist(${item.id})"><i class="fa-solid fa-xmark"></i></button>
  </div>
  <div class="info-contaner">
    <div class="company-name">${item.companyName}</div>
    <div class="item-name">${item.itemName}</div>
    <div class="prise">
      <span class="current-prise">₹${item.price.currentPrise}</span>
      <span class="original-prise">₹${item.price.originalPrise}</span>
      <span class="discount">%${item.price.discount}</span>
    </div>
    <div class="button-container">
    <button class="move-to-bag" onClick="addToBag(${item.id})">MOVE TO BAG</button>
    </div>
  </div> 
 </div>
`
}

// 3
function loadWishlistItemsObject() {
  // console.log(wishlistItems)

  wishlistItemObject = wishlistItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  // console.log(wishlistItemObject)
}

// 4
function removeFromWishlist(itemId) {
  wishlistItems = wishlistItems.filter(
    (wishlistItemId) => wishlistItemId != itemId
  );
  localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  loadWishlistItemsObject();
  displayWishlistIcon();
  displayWishlistItems();
  displayWishlistItemCount();
}

function displayWishlistItemCount() {
  let myWishlistItemCount = document.querySelector(".my-wishlist-item-count");
  if (!myWishlistItemCount) {
    return;
  }
  if (wishlistItems.length > 0) {
    myWishlistItemCount.innerText = wishlistItems.length;
    myWishlistItemCount.style.visibility = "visible";
  } else {
    myWishlistItemCount.style.visibility = "hidden";
  }
}

let bagItems;
onLoaded();

function onLoaded() {
  let bagItemStr = localStorage.getItem("bagItems");
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  displayBagIcon();
}

function addToBag(itemId) {
  if (!bagItems.includes(itemId)) {
    bagItems.push(itemId);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    displayBagIcon();
  } else {
    alert("This Item is Allready in Bag");
  }
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-count");
  if (bagItems.length > 0) {
    bagItemCountElement.innerText = bagItems.length;
    bagItemCountElement.style.visibility = "visible";
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}


