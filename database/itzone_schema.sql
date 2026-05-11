-- ============================================================
--  ITZone — Full Database Schema (Refined)
--  Database Management System Project · Group 09
--
--  Tables: 13
--  1.  category
--  2.  customer
--  3.  product
--  4.  pc_build
--  5.  build_component
--  6.  compatibility
--  7.  cart
--  8.  cart_item
--  9.  orders
--  10. order_item
--  11. payment
--  12. shipping
--  13. product_review
-- ============================================================

CREATE DATABASE IF NOT EXISTS itzone;
USE itzone;

-- ============================================================
-- 1. CATEGORY
--    Supports sub-categories via self-referential FK.
--    e.g. "PC Components" → "CPU", "GPU", etc.
-- ============================================================
CREATE TABLE category (
    category_id        INT          PRIMARY KEY AUTO_INCREMENT,
    category_name      VARCHAR(100) NOT NULL,
    parent_category_id INT          DEFAULT NULL,
    description        VARCHAR(255) DEFAULT NULL,
    FOREIGN KEY (parent_category_id) REFERENCES category(category_id)
        ON DELETE SET NULL
);

-- ============================================================
-- 2. CUSTOMER
--    Registered user accounts.
-- ============================================================
CREATE TABLE customer (
    customer_id   INT           PRIMARY KEY AUTO_INCREMENT,
    name          VARCHAR(100)  NOT NULL,
    email         VARCHAR(150)  NOT NULL UNIQUE,
    phone_number  VARCHAR(20)   DEFAULT NULL,
    address       VARCHAR(255)  DEFAULT NULL,
    password_hash VARCHAR(255)  NOT NULL,
    created_at    DATETIME      DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 3. PRODUCT
--    All individual items sold: PC components, gear, etc.
-- ============================================================
CREATE TABLE product (
    product_id   INT            PRIMARY KEY AUTO_INCREMENT,
    name         VARCHAR(200)   NOT NULL,
    description  TEXT           DEFAULT NULL,
    price        DECIMAL(10,2)  NOT NULL,
    stock        INT            NOT NULL DEFAULT 0,
    brand        VARCHAR(100)   DEFAULT NULL,
    image_url    VARCHAR(500)   DEFAULT NULL,
    rating       DECIMAL(3,2)   DEFAULT 0.00,
    review_count INT            DEFAULT 0,
    fps          INT            DEFAULT NULL,
    hz           INT            DEFAULT NULL,
    deal         BOOLEAN        DEFAULT FALSE,
    category_id  INT            NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(category_id)
        ON DELETE RESTRICT
);

-- ============================================================
-- 4. PC_BUILD
--    A custom PC build created by a customer.
--    status tracks the full lifecycle:
--      draft     → customer is still selecting parts
--      saved     → customer saved but not yet in cart
--      in_cart   → build has been added to cart
--      ordered   → build was purchased
-- ============================================================
CREATE TABLE pc_build (
    build_id    INT            PRIMARY KEY AUTO_INCREMENT,
    customer_id INT            NOT NULL,
    build_name  VARCHAR(150)   DEFAULT 'My Custom Build',
    total_price DECIMAL(10,2)  DEFAULT 0.00,
    status      ENUM('draft','saved','in_cart','ordered') DEFAULT 'draft',
    created_at  DATETIME       DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
        ON DELETE CASCADE
);

-- ============================================================
-- 5. BUILD_COMPONENT
--    Each component slot inside a custom PC build.
--    type uses ENUM — clarifies exactly which part category
--    goes into each slot (fixes teacher feedback).
--    quantity supports: 2x RAM sticks, 3x case fans, etc.
-- ============================================================
CREATE TABLE build_component (
    component_id INT  PRIMARY KEY AUTO_INCREMENT,
    build_id     INT  NOT NULL,
    product_id   INT  NOT NULL,
    type         ENUM('CPU','GPU','Motherboard','RAM','SSD',
                      'HDD','PSU','Case','Cooling','Fan') NOT NULL,
    quantity     INT  DEFAULT 1,
    FOREIGN KEY (build_id)   REFERENCES pc_build(build_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE RESTRICT,
    UNIQUE KEY unique_build_type (build_id, type, product_id)
);

-- ============================================================
-- 6. COMPATIBILITY
--    Defines whether two products are compatible with each other.
--    References product pairs directly (not build instances).
--    UNIQUE KEY prevents duplicate pairs.
-- ============================================================
CREATE TABLE compatibility (
    compat_id     INT          PRIMARY KEY AUTO_INCREMENT,
    product1_id   INT          NOT NULL,
    product2_id   INT          NOT NULL,
    is_compatible BOOLEAN      NOT NULL DEFAULT TRUE,
    notes         VARCHAR(255) DEFAULT NULL,
    FOREIGN KEY (product1_id) REFERENCES product(product_id) ON DELETE CASCADE,
    FOREIGN KEY (product2_id) REFERENCES product(product_id) ON DELETE CASCADE,
    UNIQUE KEY unique_pair (product1_id, product2_id)
);

-- ============================================================
-- 7. CART
--    One active cart per customer (UNIQUE on customer_id).
-- ============================================================
CREATE TABLE cart (
    cart_id     INT      PRIMARY KEY AUTO_INCREMENT,
    customer_id INT      NOT NULL UNIQUE,
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
        ON DELETE CASCADE
);

-- ============================================================
-- 8. CART_ITEM
--    Items inside a cart.
--    item_type determines which FK is set — only ONE FK is
--    non-null per row:
--      'product' → product_id is set (components, gear)
--      'build'   → build_id is set (custom PC build)
-- ============================================================
CREATE TABLE cart_item (
    cart_item_id INT  PRIMARY KEY AUTO_INCREMENT,
    cart_id      INT  NOT NULL,
    item_type    ENUM('product','build') NOT NULL,
    product_id   INT  DEFAULT NULL,
    build_id     INT  DEFAULT NULL,
    quantity     INT  NOT NULL DEFAULT 1,
    FOREIGN KEY (cart_id)    REFERENCES cart(cart_id)       ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE,
    FOREIGN KEY (build_id)   REFERENCES pc_build(build_id)  ON DELETE CASCADE
);

-- ============================================================
-- 9. ORDERS
--    Created when a customer checks out their cart.
--    Named 'orders' because ORDER is a reserved SQL keyword.
-- ============================================================
CREATE TABLE orders (
    order_id       INT            PRIMARY KEY AUTO_INCREMENT,
    customer_id    INT            NOT NULL,
    order_date     DATETIME       DEFAULT CURRENT_TIMESTAMP,
    total_amount   DECIMAL(10,2)  NOT NULL,
    status         ENUM('pending','confirmed','processing',
                        'shipped','delivered','cancelled') DEFAULT 'pending',
    payment_method ENUM('credit_card','KHQR') DEFAULT NULL,
    notes          TEXT           DEFAULT NULL,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
        ON DELETE RESTRICT
);

-- ============================================================
-- 10. ORDER_ITEM
--     Line items for each order. Mirrors CART_ITEM structure.
--     price stores a snapshot of the price at purchase time
--     so historical totals stay accurate if prices change.
-- ============================================================
CREATE TABLE order_item (
    order_item_id INT           PRIMARY KEY AUTO_INCREMENT,
    order_id      INT           NOT NULL,
    item_type     ENUM('product','build') NOT NULL,
    product_id    INT           DEFAULT NULL,
    build_id      INT           DEFAULT NULL,
    quantity      INT           NOT NULL DEFAULT 1,
    price         DECIMAL(10,2) NOT NULL,  -- snapshot at purchase time
    FOREIGN KEY (order_id)   REFERENCES orders(order_id)    ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE SET NULL,
    FOREIGN KEY (build_id)   REFERENCES pc_build(build_id)  ON DELETE SET NULL
);

-- ============================================================
-- 11. PAYMENT
--     One payment record per order (UNIQUE on order_id).
--     paid_at is NULL until payment is confirmed.
-- ============================================================
CREATE TABLE payment (
    payment_id INT           PRIMARY KEY AUTO_INCREMENT,
    order_id   INT           NOT NULL UNIQUE,
    method     ENUM('credit_card','KHQR') NOT NULL,
    amount     DECIMAL(10,2) NOT NULL,
    status     ENUM('pending','completed','failed','refunded') DEFAULT 'pending',
    paid_at    DATETIME      DEFAULT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
        ON DELETE CASCADE
);

-- ============================================================
-- 12. SHIPPING
--     Delivery address and status per order (UNIQUE on order_id).
--     shipped_at and delivered_at are set as status progresses.
-- ============================================================
CREATE TABLE shipping (
    shipping_id  INT          PRIMARY KEY AUTO_INCREMENT,
    order_id     INT          NOT NULL UNIQUE,
    full_name    VARCHAR(150) NOT NULL,
    phone        VARCHAR(20)  NOT NULL,
    address      VARCHAR(255) NOT NULL,
    city         VARCHAR(100) DEFAULT NULL,
    country      VARCHAR(100) DEFAULT 'Cambodia',
    status       ENUM('pending','processing','shipped','delivered') DEFAULT 'pending',
    shipped_at   DATETIME     DEFAULT NULL,
    delivered_at DATETIME     DEFAULT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
        ON DELETE CASCADE
);

-- ============================================================
-- 13. PRODUCT_REVIEW
--     One review per customer per product (UNIQUE constraint).
--     rating must be between 1 and 5.
-- ============================================================
CREATE TABLE product_review (
    review_id   INT      PRIMARY KEY AUTO_INCREMENT,
    product_id  INT      NOT NULL,
    customer_id INT      NOT NULL,
    rating      TINYINT  NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment     TEXT     DEFAULT NULL,
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id)  REFERENCES product(product_id)   ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE,
    UNIQUE KEY one_review_per_customer (product_id, customer_id)
);

-- ============================================================
-- SAMPLE CATEGORY DATA
-- ============================================================
INSERT INTO category (category_name, parent_category_id, description) VALUES
('PC Components', NULL, 'Individual hardware parts for building a PC'),
('Gear',          NULL, 'Gaming peripherals and accessories'),
('CPU',           1,    'Processors'),
('GPU',           1,    'Graphics cards'),
('Motherboard',   1,    'Motherboards'),
('RAM',           1,    'Memory modules'),
('SSD',           1,    'Solid state drives'),
('HDD',           1,    'Hard disk drives'),
('PSU',           1,    'Power supply units'),
('Case',          1,    'PC cases'),
('Cooling',       1,    'CPU coolers and AIO'),
('Fan',           1,    'Case fans'),
('Headset',       2,    'Gaming headsets'),
('Mouse',         2,    'Gaming mice'),
('Keyboard',      2,    'Gaming keyboards'),
('Webcam',        2,    'Webcams'),
('Microphone',    2,    'Microphones');
