// Ensure you include your cart.js before this script to use getCart()
function loadOrderSummary() {
    const orderContainer = document.getElementById('dynamic-order-items');
    const totalElement = document.getElementById('checkout-grand-total');
    const qrTextTotal = document.querySelector('#qr-section p'); // The text under QR code
    
    const cart = JSON.parse(localStorage.getItem('itzone_cart') || '[]');
    let total = 0;

    if (cart.length === 0) {
        orderContainer.innerHTML = '<div class="item">Your cart is empty</div>';
        return;
    }

    orderContainer.innerHTML = ''; // Clear hardcoded items

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        const itemRow = document.createElement('div');
        itemRow.className = 'item';
        itemRow.innerHTML = `
            <span>${item.name}</span>
            <span>${item.qty}x $${item.price}</span>
        `;
        orderContainer.appendChild(itemRow);
    });

    // Update Totals
    const formattedTotal = total.toFixed(2);
    totalElement.innerText = `$${formattedTotal}`;
    
    // Also update the QR code text if it exists
    if (qrTextTotal) {
        qrTextTotal.innerText = `Scan to pay $${formattedTotal} instantly`;
    }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', loadOrderSummary);