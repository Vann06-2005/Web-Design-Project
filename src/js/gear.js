const gearCategories = [
  {
    title: 'Headphone',
    products: [
      { name: 'Blue Yeti X',              price: 44.99, img: '../assets/images/headphone1.png' },
      { name: 'Elgato Wave 3',            price: 39.99, img: '../assets/images/headphone2.png' },
      { name: 'Rode NT-USB Mini',         price: 34.99, img: '../assets/images/headphone3.png' },
      { name: 'HyperX SoloCast',          price: 26.99, img: '../assets/images/headphone4.png' },
      { name: 'Shure MV7',               price: 49.99, img: '../assets/images/headphone5.png' },
      { name: 'Audio-Technica AT2020',    price: 31.99, img: '../assets/images/headset3.png'   },
      { name: 'Samson Go Mic',            price: 22.99, img: '../assets/images/headset2.png'   },
      { name: 'Blue Snowball ICE',        price: 27.99, img: '../assets/images/headset1.png'   },
    ],
  },
  {
    title: 'Mouse',
    products: [
      { name: 'Logitech G502 Hero',       price: 19.99, img: '../assets/images/headset1.png' },
      { name: 'Razer DeathAdder V3',      price: 24.99, img: '../assets/images/headset2.png' },
      { name: 'SteelSeries Rival 600',    price: 29.99, img: '../assets/images/headset3.png' },
      { name: 'HyperX Pulsefire',         price: 22.99, img: '../assets/images/headset1.png' },
      { name: 'Zowie EC2',               price: 27.99, img: '../assets/images/headset2.png' },
      { name: 'Finalmouse Ultralight',    price: 34.99, img: '../assets/images/headset3.png' },
      { name: 'Endgame Gear XM1',         price: 31.99, img: '../assets/images/headset1.png' },
      { name: 'Dream Machines DM7',       price: 26.99, img: '../assets/images/headset2.png' },
    ],
  },
  {
    title: 'Keyboard',
    products: [
      { name: 'Logitech G Pro TKL',       price: 32.99, img: '../assets/images/keyboard1.png' },
      { name: 'Razer Huntsman V3',        price: 38.99, img: '../assets/images/keyboard2.png' },
      { name: 'SteelSeries Apex Pro',     price: 42.99, img: '../assets/images/keyboard3.png' },
      { name: 'HyperX Alloy Origins',     price: 28.99, img: '../assets/images/keyboard4.png' },
      { name: 'Corsair K70 RGB',          price: 45.99, img: '../assets/images/keyboard5.png' },
      { name: 'Cooler Master CK552',      price: 24.99, img: '../assets/images/keyboard6.png' },
      { name: 'Roccat Vulcan 120',        price: 39.99, img: '../assets/images/keyboard7.png' },
      { name: 'Ducky One 3 Mini',         price: 35.99, img: '../assets/images/keyboard.png'  },
    ],
  },
  {
    title: 'MousePad',
    products: [
      { name: 'Logitech G840 XL',         price: 15.99, img: '../assets/images/keyboard.png' },
      { name: 'Razer Gigantus V2',        price: 18.99, img: '../assets/images/keyboard.png' },
      { name: 'SteelSeries QcK XL',       price: 16.99, img: '../assets/images/keyboard.png' },
      { name: 'HyperX Fury Ultra',        price: 14.99, img: '../assets/images/keyboard.png' },
      { name: 'Corsair MM700 XL',         price: 22.99, img: '../assets/images/keyboard.png' },
      { name: 'Cooler Master MP510',      price: 17.99, img: '../assets/images/keyboard.png' },
      { name: 'Roccat Taito Control',     price: 13.99, img: '../assets/images/keyboard.png' },
      { name: 'Artisan Hien Soft',        price: 28.99, img: '../assets/images/keyboard.png' },
    ],
  },
  {
    title: 'Webcam',
    products: [
      { name: 'Logitech C920 Pro',        price: 21.99, img: '../assets/images/headset1.png' },
      { name: 'Razer Kiyo Pro',           price: 26.99, img: '../assets/images/headset2.png' },
      { name: 'Elgato Facecam',           price: 32.99, img: '../assets/images/headset3.png' },
      { name: 'Blue Yeto Nano',           price: 24.99, img: '../assets/images/headset1.png' },
      { name: 'Avermedia AM310',          price: 19.99, img: '../assets/images/headset2.png' },
      { name: 'HyperX Cam 200',           price: 23.99, img: '../assets/images/headset3.png' },
      { name: 'SteelSeries Arctis',       price: 27.99, img: '../assets/images/headset1.png' },
      { name: 'Corsair HD60 Pro',         price: 29.99, img: '../assets/images/headset2.png' },
    ],
  },
  {
    title: 'Microphone',
    products: [
      { name: 'Blue Yeti X',              price: 44.99, img: '../assets/images/headphone1.png' },
      { name: 'Elgato Wave 3',            price: 39.99, img: '../assets/images/headphone2.png' },
      { name: 'Rode NT-USB Mini',         price: 34.99, img: '../assets/images/headphone3.png' },
      { name: 'HyperX SoloCast',          price: 26.99, img: '../assets/images/headphone4.png' },
      { name: 'Shure MV7',               price: 49.99, img: '../assets/images/headphone5.png' },
      { name: 'Audio-Technica AT2020',    price: 31.99, img: '../assets/images/headphone6.png' },
      { name: 'Samson Go Mic',            price: 22.99, img: '../assets/images/headphone7.png' },
      { name: 'Blue Snowball ICE',        price: 27.99, img: '../assets/images/headset1.png'   },
    ],
  },
];

function renderGear() {
  const main = document.getElementById('gear-main');
  main.innerHTML = gearCategories.map(category => `
    <h2 class="title">${category.title}</h2>
    <div class="grid">
      ${category.products.map(p => `
        <div class="card">
          <img src="${p.img}" alt="${p.name}" />
          <h4>${p.name}</h4>
          <span>${p.price.toFixed(2)}$</span>
          <button onclick="addToCartFromCard(this)">Buy</button>
        </div>
      `).join('')}
    </div>
  `).join('');
}

renderGear();
