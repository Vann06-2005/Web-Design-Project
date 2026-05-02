const categories = [
  "cpu",
  "gpu",
  "mb",
  "case",
  "cooling",
  "memory",
  "storage",
  "fans",
  "psu",
];

const products = {
  cpu: [
    {
      name: "Intel Core Ultra 7 Desktop Processor 265K",
      brand: "Intel",
      price: "250.99$",
      img: "../assets/images/customPC_Images/cpu1.png",
    },
    {
      name: "AMD Ryzen 7 7800X3D 8-Core, 16-Thread Desktop Processor",
      brand: "AMD",
      price: "270.99$",
      img: "../assets/images/customPC_Images/cpu2.png",
    },
    {
      name: "AMD Ryzen™ 9 9900X 12-Core, 24-Thread Unlocked Desktop Processor",
      brand: "ADM",
      price: "301.99$",
      img: "../assets/images/customPC_Images/cpu3.png",
    },
    {
      name: "Intel Core® i5-14600K Desktop Processor",
      brand: "Intel",
      price: "280.99$",
      img: "../assets/images/customPC_Images/cpu4.png",
    },
    {
      name: "AMD RYZEN 7 9800X3D 8-Core, 16-Thread Desktop Processor",
      brand: "ADM",
      price: "370.99$",
      img: "../assets/images/customPC_Images/cpu5.png",
    },
    {
      name: "AMD Ryzen 5 5500 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler",
      brand: "ADM",
      price: "75.99$",
      img: "../assets/images/customPC_Images/cpu6.png",
    },
    {
      name: "AMD Ryzen™ 5 9600X 6-Core, 12-Thread Unlocked Desktop Processor",
      brand: "ADM",
      price: "89.99$",
      img: "../assets/images/customPC_Images/cpu7.png",
    },
    {
      name: "Intel BX80677G3930 7th Gen Celeron Desktop Processors",
      brand: "intel",
      price: "450.99$",
      img: "../assets/images/customPC_Images/cpu8.png",
    },
  ],
  gpu: [
    {
      name: "NVIDIA GeForce RTX 4090 24GB GDDR6X Graphics Card",
      brand: "NVIDIA",
      price: "1599.99$",
      img: "../assets/images/customPC_Images/gpu1.png",
    },
    {
      name: "AMD Radeon RX 7900 XTX 24GB GDDR6 Graphics Card",
      brand: "AMD",
      price: "899.99$",
      img: "../assets/images/customPC_Images/gpu2.png",
    },
    {
      name: "NVIDIA GeForce RTX 4080 Super 16GB GDDR6X",
      brand: "NVIDIA",
      price: "999.99$",
      img: "../assets/images/customPC_Images/gpu3.png",
    },
    {
      name: "AMD Radeon RX 7800 XT 16GB GDDR6",
      brand: "AMD",
      price: "449.99$",
      img: "../assets/images/customPC_Images/gpu4.png",
    },
    {
      name: "NVIDIA GeForce RTX 4070 Ti Super 16GB",
      brand: "NVIDIA",
      price: "749.99$",
      img: "../assets/images/customPC_Images/gpu5.png",
    },
    {
      name: "AMD Radeon RX 7600 8GB GDDR6",
      brand: "AMD",
      price: "259.99$",
      img: "../assets/images/customPC_Images/gpu6.png",
    },
    {
      name: "NVIDIA GeForce RTX 4060 8GB GDDR6",
      brand: "NVIDIA",
      price: "299.99$",
      img: "../assets/images/customPC_Images/gpu7.png",
    },
    {
      name: "Intel Arc A770 16GB Limited Edition",
      brand: "Intel",
      price: "349.99$",
      img: "../assets/images/customPC_Images/gpu8.png",
    },
  ],
  mb: [
    {
      name: "MSI PRO B650-P WiFi ATX Motherboard",
      brand: "MSI",
      price: "179.99$",
      img: "../assets/images/customPC_Images/mb1.png",
    },
    {
      name: "ASUS ROG Strix X670E-E Gaming WiFi",
      brand: "ASUS",
      price: "499.99$",
      img: "../assets/images/customPC_Images/mb2.png",
    },
    {
      name: "Gigabyte B650 AORUS Elite AX Motherboard",
      brand: "Gigabyte",
      price: "219.99$",
      img: "../assets/images/customPC_Images/mb3.png",
    },
    {
      name: "MSI MAG Z790 Tomahawk WiFi DDR4",
      brand: "MSI",
      price: "269.99$",
      img: "../assets/images/customPC_Images/mb4.png",
    },
    {
      name: "ASUS Prime B760M-A WiFi Motherboard",
      brand: "ASUS",
      price: "139.99$",
      img: "../assets/images/customPC_Images/mb5.png",
    },
    {
      name: "ASRock B650M Pro RS WiFi Motherboard",
      brand: "ASRock",
      price: "159.99$",
      img: "../assets/images/customPC_Images/mb6.png",
    },
    {
      name: "Gigabyte Z790 AORUS Master Motherboard",
      brand: "Gigabyte",
      price: "599.99$",
      img: "../assets/images/customPC_Images/mb7.png",
    },
    {
      name: "MSI MEG Z790 ACE Gaming Motherboard",
      brand: "MSI",
      price: "649.99$",
      img: "../assets/images/customPC_Images/mb8.png",
    },
  ],
  case: [
    {
      name: "Lian Li PC-O11 Dynamic EVO XL Full Tower",
      brand: "Lian Li",
      price: "189.99$",
      img: "../assets/images/customPC_Images/case1.png",
    },
    {
      name: "Fractal Design Torrent Compact ATX Case",
      brand: "Fractal",
      price: "149.99$",
      img: "../assets/images/customPC_Images/case2.png",
    },
    {
      name: "NZXT H9 Flow ATX Mid Tower Case",
      brand: "NZXT",
      price: "149.99$",
      img: "../assets/images/customPC_Images/case3.png",
    },
    {
      name: "Corsair 5000D Airflow Tempered Glass Mid-Tower",
      brand: "Corsair",
      price: "174.99$",
      img: "../assets/images/customPC_Images/case4.png",
    },
    {
      name: "Sapphire PURE X850A WIFI 7 Case",
      brand: "Sapphire",
      price: "129.99$",
      img: "../assets/images/customPC_Images/case5.png",
    },
    {
      name: "be quiet! Dark Base Pro 901 Full Tower",
      brand: "be quiet!",
      price: "249.99$",
      img: "../assets/images/customPC_Images/case6.png",
    },
    {
      name: "Phanteks Eclipse G360A D-RGB Mid Tower",
      brand: "Phanteks",
      price: "99.99$",
      img: "../assets/images/customPC_Images/case7.png",
    },
    {
      name: "Cooler Master HAF 700 EVO Full Tower",
      brand: "Cooler Master",
      price: "299.99$",
      img: "../assets/images/customPC_Images/case8.png",
    },
  ],
  cooling: [
    {
      name: "Noctua NH-D15 chromax.black CPU Cooler",
      brand: "Noctua",
      price: "99.99$",
      img: "../assets/images/customPC_Images/cool1.png",
    },
    {
      name: "Corsair iCUE H150i Elite Capellix XT 360mm AIO",
      brand: "Corsair",
      price: "199.99$",
      img: "../assets/images/customPC_Images/cool2.png",
    },
    {
      name: "NZXT Kraken Elite 360 RGB LCD AIO",
      brand: "NZXT",
      price: "229.99$",
      img: "../assets/images/customPC_Images/cool3.png",
    },
    {
      name: "DeepCool AK620 Zero Dark CPU Cooler",
      brand: "DeepCool",
      price: "69.99$",
      img: "../assets/images/customPC_Images/cool4.png",
    },
    {
      name: "be quiet! Dark Rock Pro 4 CPU Cooler",
      brand: "be quiet!",
      price: "89.99$",
      img: "../assets/images/customPC_Images/cool5.png",
    },
    {
      name: "Thermalright Peerless Assassin 120 SE CPU Cooler",
      brand: "Thermalright",
      price: "44.99$",
      img: "../assets/images/customPC_Images/cool6.png",
    },
    {
      name: "Arctic Liquid Freezer III 360mm AIO",
      brand: "Arctic",
      price: "139.99$",
      img: "../assets/images/customPC_Images/cool7.png",
    },
    {
      name: "EK-Nucleus AIO CR360 Lux D-RGB Liquid Cooler",
      brand: "EK",
      price: "179.99$",
      img: "../assets/images/customPC_Images/cool8.png",
    },
  ],
  memory: [
    {
      name: "Corsair Vengeance DDR5 32GB 6000MHz CL30",
      brand: "Corsair",
      price: "109.99$",
      img: "../assets/images/customPC_Images/ram1.png",
    },
    {
      name: "G.Skill Trident Z5 RGB 32GB DDR5 6400MHz",
      brand: "G.Skill",
      price: "139.99$",
      img: "../assets/images/customPC_Images/ram2.png",
    },
    {
      name: "Kingston Fury Beast DDR5 32GB 5200MHz",
      brand: "Kingston",
      price: "99.99$",
      img: "../assets/images/customPC_Images/ram3.png",
    },
    {
      name: "Teamgroup T-Force Delta RGB 32GB DDR5 6000MHz",
      brand: "Teamgroup",
      price: "89.99$",
      img: "../assets/images/customPC_Images/ram4.png",
    },
    {
      name: "VENGEANCE® 32GB (2×16GB) DDR5 5600MHz",
      brand: "Corsair",
      price: "119.99$",
      img: "../assets/images/customPC_Images/ram5.png",
    },
    {
      name: "G.Skill Ripjaws V 32GB DDR4 3600MHz CL16",
      brand: "G.Skill",
      price: "69.99$",
      img: "../assets/images/customPC_Images/ram6.png",
    },
    {
      name: "Kingston Fury Renegade 64GB DDR5 6000MHz",
      brand: "Kingston",
      price: "189.99$",
      img: "../assets/images/customPC_Images/ram7.png",
    },
    {
      name: "Crucial RAM 32GB Kit (2×16GB) DDR5 4800MHz",
      brand: "Crucial",
      price: "79.99$",
      img: "../assets/images/customPC_Images/ram8.png",
    },
  ],
  storage: [
    {
      name: "Samsung 990 Pro 2TB NVMe M.2 PCIe 4.0 SSD",
      brand: "Samsung",
      price: "179.99$",
      img: "../assets/images/customPC_Images/ssd1.png",
    },
    {
      name: "WD Black SN850X 2TB NVMe Gen4 M.2 SSD",
      brand: "WD",
      price: "159.99$",
      img: "../assets/images/customPC_Images/ssd2.png",
    },
    {
      name: "Seagate FireCuda 530 2TB M.2 NVMe SSD",
      brand: "Seagate",
      price: "189.99$",
      img: "../assets/images/customPC_Images/ssd3.png",
    },
    {
      name: "Kingston Fury Renegade 2TB PCIe 4.0 NVMe SSD",
      brand: "Kingston",
      price: "149.99$",
      img: "../assets/images/customPC_Images/ssd4.png",
    },
    {
      name: "Crucial P5 Plus 1TB NVMe M.2 PCIe 4.0 SSD",
      brand: "Crucial",
      price: "79.99$",
      img: "../assets/images/customPC_Images/ssd5.png",
    },
    {
      name: "Sabrent Rocket 4 Plus 2TB NVMe Gen4 SSD",
      brand: "Sabrent",
      price: "139.99$",
      img: "../assets/images/customPC_Images/ssd6.png",
    },
    {
      name: 'Seagate Barracuda 4TB 3.5" SATA HDD',
      brand: "Seagate",
      price: "79.99$",
      img: "../assets/images/customPC_Images/hdd1.png",
    },
    {
      name: "WD Red Plus 4TB NAS Hard Drive",
      brand: "WD",
      price: "99.99$",
      img: "../assets/images/customPC_Images/hdd2.png",
    },
  ],
  fans: [
    {
      name: "Noctua NF-F12 iPPC-3000 PWM 120mm Case Fan",
      brand: "Noctua",
      price: "29.99$",
      img: "../assets/images/customPC_Images/fan1.png",
    },
    {
      name: "Corsair LL120 RGB 120mm Fan 3-Pack",
      brand: "Corsair",
      price: "59.99$",
      img: "../assets/images/customPC_Images/fan2.png",
    },
    {
      name: "be quiet! Silent Wings 4 140mm PWM Fan",
      brand: "be quiet!",
      price: "24.99$",
      img: "../assets/images/customPC_Images/fan3.png",
    },
    {
      name: "Lian Li Uni Fan SL-Infinity 120mm 3-Pack",
      brand: "Lian Li",
      price: "89.99$",
      img: "../assets/images/customPC_Images/fan4.png",
    },
    {
      name: "Arctic P12 PWM PST 120mm Value Pack (5 Fans)",
      brand: "Arctic",
      price: "34.99$",
      img: "../assets/images/customPC_Images/fan5.png",
    },
    {
      name: "Phanteks D30-120 D-RGB 120mm Fan",
      brand: "Phanteks",
      price: "19.99$",
      img: "../assets/images/customPC_Images/fan6.png",
    },
    {
      name: "DeepCool FC120 3-in-1 ARGB 120mm Fan Kit",
      brand: "DeepCool",
      price: "44.99$",
      img: "../assets/images/customPC_Images/fan7.png",
    },
    {
      name: "Thermaltake SWAFAN EX12 ARGB 3-Pack",
      brand: "Thermaltake",
      price: "69.99$",
      img: "../assets/images/customPC_Images/fan8.png",
    },
  ],
  psu: [
    {
      name: "Corsair RM750x SHIFT 80 PLUS Gold Fully Modular",
      brand: "Corsair",
      price: "124.99$",
      img: "../assets/images/customPC_Images/psu1.png",
    },
    {
      name: "Seasonic Prime TX-1000 80+ Titanium Modular",
      brand: "Seasonic",
      price: "239.99$",
      img: "../assets/images/customPC_Images/psu2.png",
    },
    {
      name: "be quiet! Dark Power 13 1000W 80+ Titanium",
      brand: "be quiet!",
      price: "209.99$",
      img: "../assets/images/customPC_Images/psu3.png",
    },
    {
      name: "NZXT C850 80+ Gold Fully Modular ATX PSU",
      brand: "NZXT",
      price: "124.99$",
      img: "../assets/images/customPC_Images/psu4.png",
    },
    {
      name: "EVGA SuperNOVA 850 G7 80+ Gold Modular",
      brand: "EVGA",
      price: "139.99$",
      img: "../assets/images/customPC_Images/psu5.png",
    },
    {
      name: "Corsair HX1000i 80+ Platinum Fully Modular",
      brand: "Corsair",
      price: "199.99$",
      img: "../assets/images/customPC_Images/psu6.png",
    },
    {
      name: "Lian Li SP850 SFX 80+ Gold 850W Modular",
      brand: "Lian Li",
      price: "129.99$",
      img: "../assets/images/customPC_Images/psu7.png",
    },
    {
      name: "Thermaltake Toughpower GF3 1000W 80+ Gold",
      brand: "Thermaltake",
      price: "149.99$",
      img: "../assets/images/customPC_Images/psu8.png",
    },
  ],
};

let currentIndex = 0;
let _currentCategory = '';

function viewDetail() {
  window.location.href = 'product-detail.html';
}

function renderGrid(category) {
  _currentCategory = category;
  const grid = document.getElementById("pc-grid");
  const items = products[category] || [];
  grid.innerHTML = items
    .map(
      (p, idx) => `
    <div class="pc-card">
      <div class="pc-card-img-wrap">
        <img src="${p.img}" alt="${p.name}" onclick="viewDetail(${idx})" style="cursor:pointer" onerror="this.parentElement.style.background='#e8e8e8'">
      </div>
      <div class="pc-card-separator"></div>
      <p class="pc-card-name">${p.name}</p>
      <div class="pc-card-bottom">
        <span class="pc-card-brand">${p.brand}</span>
        <span class="pc-card-price">${p.price}</span>
      </div>
      <button class="btn-shop">Shop</button>
    </div>
  `,
    )
    .join("");
}

function setActiveCategory(index) {
  currentIndex = index;
  const cat = categories[index];
  document.querySelectorAll(".pc-menu-item[data-category]").forEach((li) => {
    li.classList.toggle("active", li.dataset.category === cat);
  });
  renderGrid(cat);
}

document.querySelectorAll(".pc-menu-item[data-category]").forEach((li) => {
  li.addEventListener("click", () => {
    const idx = categories.indexOf(li.dataset.category);
    if (idx !== -1) setActiveCategory(idx);
  });
});

setActiveCategory(0);
