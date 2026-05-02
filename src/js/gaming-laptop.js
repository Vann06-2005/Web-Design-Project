const featured = [
  {
    name: "ASUS TUF Gaming A16 – FA608UM-NS73",
    specs: "Windows 11 Home · 16.0\" 1920x1200 · GeForce RTX 5060 · AMD Ryzen 200 Series · 16GB DDR5 · 512GB SSD",
    brand: "ASUS",
    gpu: "RTX 5060",
    memory: "16GB",
    rating: 4,
    reviews: 186,
    fps: 90,
    hz: 144,
    price: 1449,
    img: "../assets/images/gaming-laptop-images/laptop-featured1.png",
    deal: true,
  },
  {
    name: "ASUS ROG Strix G16 – G614JIR-AS94",
    specs: "Windows 11 Home · 16.0\" 2560x1600 · GeForce RTX 4070 · Intel Core i9-14900HX · 32GB DDR5 · 1TB NVMe SSD",
    brand: "ASUS",
    gpu: "RTX 4070",
    memory: "32GB",
    rating: 5,
    reviews: 243,
    fps: 110,
    hz: 165,
    price: 1799,
    img: "../assets/images/gaming-laptop-images/laptop-featured2.png",
    deal: false,
  },
  {
    name: "MSI Titan GT77 – GT77HX-13VH",
    specs: "Windows 11 Home · 17.3\" 3840x2160 · GeForce RTX 4090 · Intel Core i9-13980HX · 64GB DDR5 · 2TB NVMe SSD",
    brand: "MSI",
    gpu: "RTX 4090",
    memory: "64GB",
    rating: 5,
    reviews: 312,
    fps: 130,
    hz: 240,
    price: 2999,
    img: "../assets/images/gaming-laptop-images/laptop-featured3.png",
    deal: false,
  },
];

const allLaptops = [
  {
    name: "Lenovo Legion 5i – 82RB00BEUS",
    specs: "Windows 11 Home · 15.6\" 1920x1080 · GeForce RTX 4060 · Intel Core i7-14650HX · 16GB DDR5 · 512GB NVMe SSD",
    brand: "Lenovo",
    gpu: "RTX 4060",
    memory: "16GB",
    rating: 4,
    reviews: 178,
    fps: 80,
    hz: 144,
    price: 1099,
    img: "../assets/images/gaming-laptop-images/laptop1.png",
    deal: false,
  },
  {
    name: "HP Omen 16 – 16-xf0013dx",
    specs: "Windows 11 Home · 16.1\" 1920x1080 · GeForce RTX 4070 · AMD Ryzen 7 7745HX · 16GB DDR5 · 512GB NVMe SSD",
    brand: "HP",
    gpu: "RTX 4070",
    memory: "16GB",
    rating: 4,
    reviews: 134,
    fps: 90,
    hz: 165,
    price: 1299,
    img: "../assets/images/gaming-laptop-images/laptop2.png",
    deal: false,
  },
  {
    name: "Acer Predator Helios 16 – PHN16-72-99Y4",
    specs: "Windows 11 Home · 16.0\" 2560x1600 · GeForce RTX 4080 · Intel Core i9-14900HX · 32GB DDR5 · 1TB NVMe SSD",
    brand: "Acer",
    gpu: "RTX 4080",
    memory: "32GB",
    rating: 5,
    reviews: 201,
    fps: 115,
    hz: 240,
    price: 1999,
    img: "../assets/images/gaming-laptop-images/laptop3.png",
    deal: false,
  },
  {
    name: "Razer Blade 15 – RZ09-0485",
    specs: "Windows 11 Home · 15.6\" 2560x1440 · GeForce RTX 4070 Ti · Intel Core i9-13950HX · 32GB DDR5 · 1TB NVMe SSD",
    brand: "Razer",
    gpu: "RTX 4070 Ti",
    memory: "32GB",
    rating: 5,
    reviews: 287,
    fps: 105,
    hz: 240,
    price: 2499,
    img: "../assets/images/gaming-laptop-images/laptop4.png",
    deal: true,
  },
  {
    name: "MSI Katana 15 – B13VGK-1415US",
    specs: "Windows 11 Home · 15.6\" 1920x1080 · GeForce RTX 4070 · Intel Core i7-13620H · 16GB DDR5 · 512GB NVMe SSD",
    brand: "MSI",
    gpu: "RTX 4070",
    memory: "16GB",
    rating: 4,
    reviews: 156,
    fps: 88,
    hz: 144,
    price: 1199,
    img: "../assets/images/gaming-laptop-images/laptop5.png",
    deal: false,
  },
  {
    name: "Dell G16 – G7620-7748BLK-PUS",
    specs: "Windows 11 Home · 16.0\" 2560x1600 · GeForce RTX 4060 · Intel Core i7-13650HX · 16GB DDR5 · 512GB NVMe SSD",
    brand: "Dell",
    gpu: "RTX 4060",
    memory: "16GB",
    rating: 4,
    reviews: 98,
    fps: 75,
    hz: 165,
    price: 1149,
    img: "../assets/images/gaming-laptop-images/laptop6.png",
    deal: false,
  },
  {
    name: "Gigabyte AORUS 15 – BKF-73US754SH",
    specs: "Windows 11 Home · 15.6\" 2560x1440 · GeForce RTX 4070 · Intel Core i7-13700H · 32GB DDR5 · 1TB NVMe SSD",
    brand: "Gigabyte",
    gpu: "RTX 4070",
    memory: "32GB",
    rating: 4,
    reviews: 167,
    fps: 95,
    hz: 240,
    price: 1599,
    img: "../assets/images/gaming-laptop-images/laptop7.png",
    deal: false,
  },
  {
    name: "Samsung Galaxy Book4 Ultra – NP960XGL",
    specs: "Windows 11 Home · 16.0\" 2880x1800 · GeForce RTX 4070 · Intel Core Ultra 9 185H · 32GB LPDDR5 · 1TB NVMe SSD",
    brand: "Samsung",
    gpu: "RTX 4070",
    memory: "32GB",
    rating: 4,
    reviews: 89,
    fps: 90,
    hz: 120,
    price: 2199,
    img: "../assets/images/gaming-laptop-images/laptop8.png",
    deal: false,
  },
  {
    name: "LG UltraGear 17 – 17G90Q-K",
    specs: "Windows 11 Home · 17.0\" 2560x1600 · GeForce RTX 3080 Ti · Intel Core i9-12900H · 32GB DDR5 · 2TB NVMe SSD",
    brand: "LG",
    gpu: "RTX 3080 Ti",
    memory: "32GB",
    rating: 4,
    reviews: 112,
    fps: 120,
    hz: 165,
    price: 2799,
    img: "../assets/images/gaming-laptop-images/laptop9.png",
    deal: true,
  },
  {
    name: "Alienware m18 R2 – AWM18R2-9376BLK",
    specs: "Windows 11 Home · 18.0\" 2560x1600 · GeForce RTX 4090 · Intel Core i9-14900HX · 64GB DDR5 · 2TB NVMe SSD",
    brand: "Alienware",
    gpu: "RTX 4090",
    memory: "64GB",
    rating: 5,
    reviews: 342,
    fps: 135,
    hz: 240,
    price: 3499,
    img: "../assets/images/gaming-laptop-images/laptop10.png",
    deal: true,
  },
];

let _renderedLaptops = [];

function viewDetail() {
  window.location.href = 'product-detail.html';
}

function starsHTML(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function matchPrice(price, filter) {
  if (filter === "under1000") return price < 1000;
  if (filter === "1000-2000") return price >= 1000 && price <= 2000;
  if (filter === "2000-3000") return price > 2000 && price <= 3000;
  if (filter === "over3000") return price > 3000;
  return true;
}

function renderFeatured() {
  document.getElementById("featured-grid").innerHTML = featured
    .map(
      (p, idx) => `
    <div class="featured-card">
      ${p.deal ? '<span class="deal-badge">Hot Pick</span>' : ""}
      <div class="featured-card-img">
        <img src="${p.img}" alt="${p.name}" onclick="viewDetail('featured',${idx})" style="cursor:pointer" onerror="this.parentElement.style.background='#e8e8e8'">
      </div>
      <div class="featured-card-name">${p.name}</div>
      <div class="featured-card-specs">${p.specs}</div>
      <div class="featured-card-bottom">
        <span class="card-price">${p.price.toLocaleString()}<span>$</span></span>
        <button class="btn-shop" onclick="addToCart('${p.name}', ${p.price}, '${p.img}', this)">Shop</button>
      </div>
    </div>
  `
    )
    .join("");
}

function renderGrid(products) {
  _renderedLaptops = products;
  const grid = document.getElementById("product-grid");
  if (!products.length) {
    grid.innerHTML = '<div class="no-results">No laptops match your filters.</div>';
    return;
  }
  grid.innerHTML = products
    .map(
      (p, idx) => `
    <div class="product-card">
      ${p.deal ? '<span class="deal-badge">Hot Pick</span>' : ""}
      <div class="product-card-img">
        <img src="${p.img}" alt="${p.name}" onclick="viewDetail('grid',${idx})" style="cursor:pointer" onerror="this.parentElement.style.background='#e8e8e8'">
      </div>
      <div class="product-card-sep"></div>
      <div class="product-card-name">${p.name}</div>
      <div class="product-card-specs">${p.specs}</div>
      <div class="product-card-bottom">
        <span class="product-price">${p.price.toLocaleString()}$</span>
        <button class="btn-shop" onclick="addToCart('${p.name}', ${p.price}, '${p.img}', this)">Shop</button>
      </div>
    </div>
  `
    )
    .join("");
}

function applyFilters() {
  const price  = document.getElementById("f-price").value;
  const brand  = document.getElementById("f-brand").value;
  const gpu    = document.getElementById("f-gpu").value;
  const memory = document.getElementById("f-memory").value;
  const sort   = document.getElementById("f-sort").value;

  let result = allLaptops.filter((p) => {
    if (price  && !matchPrice(p.price, price)) return false;
    if (brand  && p.brand  !== brand)          return false;
    if (gpu    && p.gpu    !== gpu)            return false;
    if (memory && p.memory !== memory)         return false;
    return true;
  });

  if (sort === "price-asc")  result.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
  if (sort === "rating")     result.sort((a, b) => b.rating - a.rating);

  renderGrid(result);
}

function clearFilters() {
  ["f-price", "f-brand", "f-gpu", "f-memory", "f-sort"].forEach((id) => {
    document.getElementById(id).value = id === "f-sort" ? "featured" : "";
  });
  renderGrid(allLaptops);
}

renderFeatured();
renderGrid(allLaptops);
