function getCart() {
  return JSON.parse(localStorage.getItem('itzone_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('itzone_cart', JSON.stringify(cart));
}

function addToCart(name, price, img, btn) {
  const cart = getCart();
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: Date.now(), name, price, qty: 1, img: img || '' });
  }
  saveCart(cart);
  if (btn) {
    const original = btn.textContent;
    btn.textContent = '✓ Added!';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 1000);
  }
}

function addToCartFromCard(btn) {
  const card = btn.closest('.card');
  const name = card.querySelector('h4').textContent;
  const priceText = card.querySelector('span').textContent;
  const price = parseFloat(priceText.replace('$', ''));
  const img = card.querySelector('img') ? card.querySelector('img').src : '';
  addToCart(name, price, img, btn);
}
