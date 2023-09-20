// Function to make an AJAX request
function fetchProducts() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://raw.githubusercontent.com/CynthiaEstherMetilda/Xhrdemo/main/products.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const products = JSON.parse(xhr.responseText);
      displayProducts(products);
    }
  };
  xhr.send();
}

// Function to display products
function displayProducts(products) {
  const productList = document.getElementById('productList');
  productList.innerHTML = ''; // Clear the existing product list

  // Get the sorting criteria
  const sortSelect = document.getElementById('sortSelect');
  const sortBy = sortSelect.value;

  // Get the search keyword
  const searchInput = document.getElementById('searchInput');
  const keyword = searchInput.value.toLowerCase();

  // Filter and sort products based on the search and sorting criteria
  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(keyword);
  }).sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price') {
      return a.price - b.price;
    }
  });

  // Generate HTML elements for each product and append them to the productList div
  filteredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productDescription);
    productDiv.appendChild(productPrice);

    productList.appendChild(productDiv);
  });
}

// Event listeners for search and sorting
document.getElementById('searchInput').addEventListener('input', fetchProducts);
document.getElementById('sortSelect').addEventListener('change', fetchProducts);

// Fetch products on page load
fetchProducts();