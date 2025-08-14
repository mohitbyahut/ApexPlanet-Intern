let bagItemObject;
onLoaded();

function onLoaded() {
  loadBagItemObject();
  displayBagItems();
  displayBagSummery();
}

function loadBagItemObject() {
  bagItemObject = bagItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  // console.log(bagItemObject)
}

function displayBagItems() {
  let bagItemContainerElement = document.querySelector(".bags-container");

  if (!bagItemContainerElement) {
    return;
  }
  let innerHTML = "";
  bagItemObject.forEach((bagItems) => {
    innerHTML += generateItemHTML(bagItems);
  });
  bagItemContainerElement.innerHTML = innerHTML;
}

function generateItemHTML(item) {
  return `
  <div class="bag-container">
  <div class="image-container">
    <a href="#"><img src="${item.item_image1}" alt="image-Error"/></a>
  </div>
  <div class="info-contaner">
    <div class="company-name">${item.companyName}</div>
    <div class="item-name">${item.itemName}</div>
    <div class="item-size">

  </div>
    <div class="prise">
      <span class="current-prise">₹${item.price.currentPrise}</span>
      <span class="original-prise">₹${item.price.originalPrise}</span>
      <span class="discount">(${item.price.discount} % OFF)</span>
    </div>
    <div class="item-Qty">


  </div>
  </div> 
  <button class="cancle-button" onClick="removeFromBag(${item.id})"><i class="fa-solid fa-xmark"></i></button>
 </div>
  `
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter((bagItemId) => bagItemId != itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  loadBagItemObject();
  displayBagIcon();
  displayBagItems();
  displayBagSummery();
}

function displayBagSummery() {
  let totalItem = bagItemObject.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let convenienceFee = 50;
  let finalPayment = 0;

  bagItemObject.forEach((bagItem) => {
    totalMRP = totalMRP + bagItem.price.originalPrise;
    totalDiscount += bagItem.price.originalPrise - bagItem.price.currentPrise;

    finalPayment = totalMRP - totalDiscount + convenienceFee;
  });

  let bagsInfoContainer = document.querySelector(".bags-info-container");
  if (!bagsInfoContainer) {
    return;
  }
  bagsInfoContainer.innerHTML = `

  <div class="apply-box">
  <div class="coupons">COUPONS</div>
  </div>
  <div class="apply-coupons-box">
  <span><i class="fa-solid fa-tag"></i>
  <span class="apply-coupons">Apply Coupons</span>
  </span>
  <span class="apply">APPLY</span>
  </div>
  <div class="prise-detail">
  <span class="prise-details">PRICE DETAILS</span><span class="items">(${totalItem} <span>Items</span>)</span>
</div>

<div class="prise-container">
  <div class="total-mrp-box">
    <span class="total-prise">Total MRP</span><span class="original-Prise">₹${totalMRP}</span>
  </div>
  <div class="box-discount">
      <span class="discount-on-mrp">Discount ON MRP</span>
        <span class="discount-prise"> -₹${totalDiscount}</span>
  </div>
  <div class="convenience-fee-box">
    <span class="convenience-fee">Convenience Fee</span>
    <span class="convenience-fee-prise">₹${convenienceFee}</span>
  </div>
  <div class="coupon-box">
  <span class="coupon-discount">Coupon Discount</span>
  <span class="apply-coupon">Apply Coupon</span>
  </div>
  <div class="total-amount-box">
    <span class="total-amount">Total Amount</span>
    <span class="total-amount-prise">₹${finalPayment}</span>
  </div>
</div>
<button class="order-now" onClick="placeOrder()">PLACE ORDER</button>
  `
}

function placeOrder() {
  alert(" 'Thank You', Your Order is Placed....");
}

{
  /* <button class="move-to-bag" onClick="addToBag()">MOVE TO BAG</button> */
}
