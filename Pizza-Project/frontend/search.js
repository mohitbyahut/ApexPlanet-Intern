// Search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-product");
  if (!searchInput) return;

  // Get all product data
  const products = [
    {
      name: "Chile Limon",
      page: "login.html",
      image: "lays1-removebg-preview.png",
    },
    {
      name: "Tomato Tango",
      page: "login.html",
      image: "lays8-removebg-preview.png",
    },
    {
      name: "Macho Chilli",
      page: "login.html",
      image: "lays11-removebg-preview.png",
    },
    { name: "Classic", page: "login.html", image: "p10-removebg-preview.png" },
    {
      name: "Magic Masala",
      page: "login.html",
      image: "layss3-removebg-preview.png",
    },
    {
      name: "Tangy Treat",
      page: "login.html",
      image: "layss10-removebg-preview.png",
    },
  ];

  // Create search results container
  const searchResults = document.createElement("div");
  searchResults.className = "search-results";
  searchResults.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        max-height: 300px;
        overflow-y: auto;
        display: none;
        z-index: 1000;
    `;

  // Insert search results after search input
  searchInput.parentNode.insertBefore(searchResults, searchInput.nextSibling);

  // Handle search input
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase().trim();

    if (searchTerm.length < 2) {
      searchResults.style.display = "none";
      return;
    }

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );

    if (filteredProducts.length > 0) {
      searchResults.innerHTML = filteredProducts
        .map(
          (product) => `
                <div class="search-result-item" style="
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                ">
                    <img src="${product.image}" alt="${product.name}" style="
                        width: 40px;
                        height: 40px;
                        object-fit: contain;
                    ">
                    <div>
                        <h4 style="
                            margin: 0;
                            color: #333;
                            font-size: 14px;
                        ">${product.name}</h4>
                    </div>
                </div>
            `
        )
        .join("");

      // Add click event to search results
      searchResults.querySelectorAll(".search-result-item").forEach((item) => {
        item.addEventListener("click", function () {
          const productName = this.querySelector("h4").textContent;
          const product = products.find((p) => p.name === productName);
          if (product) {
            window.location.href = product.page;
          }
        });
      });

      searchResults.style.display = "block";
    } else {
      searchResults.innerHTML = `
                <div style="
                    padding: 10px;
                    text-align: center;
                    color: #666;
                ">
                    No products found
                </div>
            `;
      searchResults.style.display = "block";
    }
  });

  // Close search results when clicking outside
  document.addEventListener("click", function (e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = "none";
    }
  });
});
