// Ensure you include cart.js before this script
function loadOrderSummary() {
    const orderContainer = document.getElementById('dynamic-order-items');
    const totalElement = document.getElementById('checkout-grand-total');
    const qrTextTotal = document.querySelector('#qr-section p');

    const cart = JSON.parse(localStorage.getItem('itzone_cart') || '[]');
    const builds = JSON.parse(localStorage.getItem('itzone_custom_builds') || '[]');
    let total = 0;

    if (cart.length === 0 && builds.length === 0) {
        orderContainer.innerHTML = '<div class="item">Your cart is empty</div>';
        return;
    }

    orderContainer.innerHTML = '';

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        const itemRow = document.createElement('div');
        itemRow.className = 'item';
        itemRow.innerHTML = `
            <span>${item.name}</span>
            <span>${item.qty}x $${itemTotal.toFixed(2)}</span>
        `;
        orderContainer.appendChild(itemRow);
    });

    builds.forEach((build, idx) => {
        const partTotal = build.parts.reduce((sum, p) => sum + p.price, 0);
        const buildTotal = partTotal * build.qty;
        total += buildTotal;

        const buildRow = document.createElement('div');
        buildRow.className = 'item';
        buildRow.innerHTML = `
            <span>Custom PC Build ${idx + 1}</span>
            <span>${build.qty}x $${buildTotal.toFixed(2)}</span>
        `;
        orderContainer.appendChild(buildRow);
    });

    const formattedTotal = total.toFixed(2);
    totalElement.innerText = `$${formattedTotal}`;

    if (qrTextTotal) {
        qrTextTotal.innerText = `Scan to pay $${formattedTotal} instantly`;
    }
}

document.addEventListener('DOMContentLoaded', loadOrderSummary);
