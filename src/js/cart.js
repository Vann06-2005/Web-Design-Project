function getCart() {
  return JSON.parse(localStorage.getItem('itzone_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('itzone_cart', JSON.stringify(cart));
}

function getCustomBuilds() {
  return JSON.parse(localStorage.getItem('itzone_custom_builds') || '[]');
}

function saveCustomBuilds(builds) {
  localStorage.setItem('itzone_custom_builds', JSON.stringify(builds));
}

function requireAuth() {
  if (localStorage.getItem('itzone_user')) return true;
  sessionStorage.setItem('itzone_login_redirect', window.location.href);
  window.location.href = 'signin.html';
  return false;
}

function addCustomBuild(parts) {
  if (!requireAuth()) return;
  const builds = getCustomBuilds();
  builds.push({ buildId: Date.now(), qty: 1, parts });
  saveCustomBuilds(builds);
}

function addToCart(name, price, img, btn) {
  if (!requireAuth()) return;
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
  if (!requireAuth()) return;
  const card = btn.closest('.card');
  const name = card.querySelector('h4').textContent;
  const priceText = card.querySelector('span').textContent;
  const price = parseFloat(priceText.replace('$', ''));
  const img = card.querySelector('img') ? card.querySelector('img').src : '';
  addToCart(name, price, img, btn);
}
