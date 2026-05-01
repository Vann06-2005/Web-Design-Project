let cart = getCart();

function renderCart() {
    const container = document.getElementById('cart-items');
    let total = 0;
    container.innerHTML = '';

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        container.innerHTML += `
            <div class="cart-item">
                <div class="img-frame">
                    <img src="${item.img}" alt="part" onerror="this.src='https://placehold.co/80'">
                </div>
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <div class="actions">
                        <div class="qty-selector">
                            <button onclick="updateQty(${item.id}, -1)">-</button>
                            <span>${item.qty}</span>
                            <button onclick="updateQty(${item.id}, 1)">+</button>
                        </div>
                        <strong class="item-total-price">SubTotal : $${itemTotal}</strong>
                        <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById('grand-total').innerText = `$${total}`;
}

function updateQty(id, change) {
    const item = cart.find(p => p.id === id);
    if (item) {
        item.qty = Math.max(1, item.qty + change);
        saveCart(cart);
        renderCart();
    }
}

function removeItem(id) {
    cart = cart.filter(p => p.id !== id);
    saveCart(cart);
    renderCart();
}

renderCart();
