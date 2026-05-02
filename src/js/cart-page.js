let cart = getCart();
let customBuilds = getCustomBuilds();

function buildPartsTotal(build) {
  return build.parts.reduce((sum, p) => sum + p.price, 0);
}

function renderCustomBuilds() {
  const container = document.getElementById('custom-builds');
  const section = document.getElementById('custom-builds-section');

  if (!customBuilds.length) {
    container.innerHTML = '';
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  container.innerHTML = customBuilds.map((build, idx) => {
    const partTotal = buildPartsTotal(build);
    const total = partTotal * build.qty;
    return `
      <div class="custom-build-card">
        <div class="custom-build-header">
          <div class="custom-build-title">
            <svg class="build-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
            </svg>
            Custom PC Build ${idx + 1}
          </div>
          <button class="remove-build-btn" onclick="removeBuild(${build.buildId})">Remove Build</button>
        </div>
        <div class="custom-build-parts">
          ${build.parts.map(p => `
            <div class="build-part-row">
              <img src="${p.img}" alt="${p.name}" onerror="this.src='https://placehold.co/48'">
              <span class="part-category">${p.category}</span>
              <span class="part-name">${p.name}</span>
              <span class="part-price">$${p.price.toFixed(2)}</span>
            </div>
          `).join('')}
        </div>
        <div class="custom-build-footer">
          <div class="build-qty-wrap">
            <span class="build-qty-label">Quantity</span>
            <div class="qty-selector build-qty-selector">
              <button onclick="updateBuildQty(${build.buildId}, -1)">-</button>
              <span>${build.qty}</span>
              <button onclick="updateBuildQty(${build.buildId}, 1)">+</button>
            </div>
          </div>
          <div class="build-total-wrap">
            Build Total: <strong>$${total.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const section = document.getElementById('regular-section');
  let regularTotal = 0;

  if (!cart.length) {
    container.innerHTML = '<p class="empty-msg">No regular items in cart.</p>';
    section.style.display = customBuilds.length ? 'none' : 'block';
  } else {
    section.style.display = 'block';
    container.innerHTML = cart.map(item => {
      const itemTotal = item.price * item.qty;
      regularTotal += itemTotal;
      return `
        <div class="cart-item">
          <div class="img-frame">
            <img src="${item.img}" alt="part" onerror="this.src='https://placehold.co/80'">
          </div>
          <div class="item-details">
            <h3>${item.name}</h3>
            <div class="qty-selector">
              <button onclick="updateQty(${item.id}, -1)">-</button>
              <span>${item.qty}</span>
              <button onclick="updateQty(${item.id}, 1)">+</button>
            </div>
            <div class="actions">
              <strong class="item-total-price">SubTotal : $${itemTotal.toFixed(2)}</strong>
              <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  const customTotal = customBuilds.reduce((sum, b) => sum + buildPartsTotal(b) * b.qty, 0);
  document.getElementById('grand-total').innerText = `$${(regularTotal + customTotal).toFixed(2)}`;
}

function updateQty(id, change) {
  const item = cart.find(p => p.id === id);
  if (item) {
    item.qty = Math.max(1, item.qty + change);
    saveCart(cart);
    renderAll();
  }
}

function removeItem(id) {
  cart = cart.filter(p => p.id !== id);
  saveCart(cart);
  renderAll();
}

function updateBuildQty(buildId, change) {
  const build = customBuilds.find(b => b.buildId === buildId);
  if (build) {
    build.qty = Math.max(1, build.qty + change);
    saveCustomBuilds(customBuilds);
    renderAll();
  }
}

function removeBuild(buildId) {
  customBuilds = customBuilds.filter(b => b.buildId !== buildId);
  saveCustomBuilds(customBuilds);
  renderAll();
}

function renderAll() {
  renderCustomBuilds();
  renderCart();
}

renderAll();
