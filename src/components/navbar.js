(function () {
  // ── Page transitions ──────────────────────────────────────────────────────
  // This runs as a blocking script before any content is painted, so setting
  // opacity:0 here prevents a flash of unstyled content on every page load.
  document.documentElement.style.opacity = '0';
  document.documentElement.style.transition = 'opacity 0.25s ease';

  window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.opacity = '1';
  });

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || link.target === '_blank') return;
    e.preventDefault();
    document.documentElement.style.opacity = '0';
    setTimeout(() => { window.location.href = href; }, 220);
  });

  // ── Inject HTML ───────────────────────────────────────────────────────────
  document.body.insertAdjacentHTML('afterbegin', `
    <nav class="navbar">
      <div class="nav-container">

        <!-- Logo -->
        <a href="Main.html" class="nav-logo">ITZONE</a>

        <!-- Nav Links -->
        <div class="nav-links">
          <a href="gear.html" class="nav-link">Gear</a>
          <a href="custompc.html" class="nav-link">Custom PC</a>
          <a href="pc-components.html" class="nav-link">PC Components</a>
          <a href="prebuilt.html" class="nav-link">Prebuilt PCs</a>
          <a href="gaming-laptop.html" class="nav-link">Gaming Laptops</a>
        </div>

        <!-- Icons -->
        <div class="nav-icons">

          <button class="nav-icon-btn" aria-label="Search">
            <svg class="nav-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>

          <button class="nav-icon-btn" aria-label="Account" onclick="window.location.href='signin.html'">
            <svg class="nav-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>

          <button class="nav-icon-btn nav-cart-btn" aria-label="Cart" onclick="window.location.href='cart.html'">
            <svg class="nav-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span class="cart-badge">3</span>
          </button>

        </div>
      </div>
    </nav>
  `);
})();
