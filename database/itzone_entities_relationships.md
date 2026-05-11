# ITZone — Entities, Attributes & Relationships

---

## Entities & Attributes

### 1. CATEGORY
| Attribute | Type | Note |
|-----------|------|------|
| category_id | INT | PK, Auto Increment |
| category_name | VARCHAR(100) | e.g. "PC Components", "Gear" |
| parent_category_id | INT | FK → category (self-ref, nullable) |
| description | VARCHAR(255) | Optional |

---

### 2. CUSTOMER
| Attribute | Type | Note |
|-----------|------|------|
| customer_id | INT | PK, Auto Increment |
| name | VARCHAR(100) | Full name |
| email | VARCHAR(150) | Unique |
| phone_number | VARCHAR(20) | Optional |
| address | VARCHAR(255) | Optional |
| password_hash | VARCHAR(255) | Hashed password |
| created_at | DATETIME | Auto set |

---

### 3. PRODUCT
| Attribute | Type | Note |
|-----------|------|------|
| product_id | INT | PK |
| name | VARCHAR(200) | |
| description | TEXT | |
| price | DECIMAL(10,2) | |
| stock | INT | |
| brand | VARCHAR(100) | |
| image_url | VARCHAR(500) | |
| rating | DECIMAL(3,2) | Average rating |
| review_count | INT | |
| fps | INT | For component performance |
| hz | INT | For component performance |
| deal | BOOLEAN | Daily deal flag |
| category_id | INT | FK → category |

---

### 4. PC_BUILD
| Attribute | Type | Note |
|-----------|------|------|
| build_id | INT | PK |
| customer_id | INT | FK → customer |
| build_name | VARCHAR(150) | e.g. "My Gaming Rig" |
| total_price | DECIMAL(10,2) | Auto-calculated |
| status | ENUM | **draft → saved → in_cart → ordered** |
| created_at | DATETIME | |
| updated_at | DATETIME | Auto updates |

---

### 5. BUILD_COMPONENT
| Attribute | Type | Note |
|-----------|------|------|
| component_id | INT | PK |
| build_id | INT | FK → pc_build |
| product_id | INT | FK → product |
| type | ENUM | **CPU / GPU / Motherboard / RAM / SSD / HDD / PSU / Case / Cooling / Fan** |
| quantity | INT | Supports 2x RAM, 3x Fans, etc. |

---

### 6. COMPATIBILITY
| Attribute | Type | Note |
|-----------|------|------|
| compat_id | INT | PK |
| product1_id | INT | FK → product |
| product2_id | INT | FK → product |
| is_compatible | BOOLEAN | TRUE = compatible |
| notes | VARCHAR(255) | e.g. "Different socket type" |

---

### 7. CART
| Attribute | Type | Note |
|-----------|------|------|
| cart_id | INT | PK |
| customer_id | INT | FK → customer (UNIQUE — 1 cart per customer) |
| created_at | DATETIME | |
| updated_at | DATETIME | |

---

### 8. CART_ITEM
| Attribute | Type | Note |
|-----------|------|------|
| cart_item_id | INT | PK |
| cart_id | INT | FK → cart |
| item_type | ENUM | **product / build** |
| product_id | INT | FK → product (nullable) |
| build_id | INT | FK → pc_build (nullable) |
| quantity | INT | |

> Only ONE of the FK columns is set per row, based on item_type.

---

### 9. ORDERS
| Attribute | Type | Note |
|-----------|------|------|
| order_id | INT | PK |
| customer_id | INT | FK → customer |
| order_date | DATETIME | |
| total_amount | DECIMAL(10,2) | |
| status | ENUM | pending / confirmed / processing / shipped / delivered / cancelled |
| payment_method | ENUM | credit_card / KHQR |
| notes | TEXT | Optional delivery notes |

---

### 10. ORDER_ITEM
| Attribute | Type | Note |
|-----------|------|------|
| order_item_id | INT | PK |
| order_id | INT | FK → orders |
| item_type | ENUM | **product / build** |
| product_id | INT | FK → product (nullable) |
| build_id | INT | FK → pc_build (nullable) |
| quantity | INT | |
| price | DECIMAL(10,2) | **Price snapshot at purchase time** |

> Only ONE of the FK columns is set per row, based on item_type.

---

### 11. PAYMENT
| Attribute | Type | Note |
|-----------|------|------|
| payment_id | INT | PK |
| order_id | INT | FK → orders (UNIQUE) |
| method | ENUM | credit_card / KHQR |
| amount | DECIMAL(10,2) | |
| status | ENUM | pending / completed / failed / refunded |
| paid_at | DATETIME | Null until paid |

---

### 12. SHIPPING
| Attribute | Type | Note |
|-----------|------|------|
| shipping_id | INT | PK |
| order_id | INT | FK → orders (UNIQUE) |
| full_name | VARCHAR(150) | |
| phone | VARCHAR(20) | |
| address | VARCHAR(255) | |
| city | VARCHAR(100) | |
| country | VARCHAR(100) | Default: Cambodia |
| status | ENUM | pending / processing / shipped / delivered |
| shipped_at | DATETIME | |
| delivered_at | DATETIME | |

---

### 13. PRODUCT_REVIEW
| Attribute | Type | Note |
|-----------|------|------|
| review_id | INT | PK |
| product_id | INT | FK → product |
| customer_id | INT | FK → customer |
| rating | TINYINT | 1–5 only |
| comment | TEXT | Optional |
| created_at | DATETIME | |

---

## Relationships

| Relationship | Type | Description |
|---|---|---|
| CATEGORY → CATEGORY (self) | 1 : M | A category can have many sub-categories |
| CUSTOMER → PC_BUILD | 1 : M | One customer can save many builds |
| CUSTOMER → CART | 1 : 1 | One customer has one active cart |
| CUSTOMER → ORDERS | 1 : M | One customer can place many orders |
| CUSTOMER → PRODUCT_REVIEW | 1 : M | One customer can review many products |
| CATEGORY → PRODUCT | 1 : M | One category has many products |
| PRODUCT → BUILD_COMPONENT | 1 : M | One product can be used in many builds |
| PRODUCT ↔ PRODUCT (via COMPATIBILITY) | M : M | Products can be compatible/incompatible with each other |
| PRODUCT → PRODUCT_REVIEW | 1 : M | One product can have many reviews |
| PC_BUILD → BUILD_COMPONENT | 1 : M | One build has many component slots |
| CART → CART_ITEM | 1 : M | One cart holds many items |
| ORDERS → ORDER_ITEM | 1 : M | One order has many line items |
| ORDERS → PAYMENT | 1 : 1 | One order has one payment record |
| ORDERS → SHIPPING | 1 : 1 | One order has one shipping record |

---

## Purchase Flow

```
BROWSE              ADD TO CART           CHECKOUT
────────────────────────────────────────────────────────
Product/Gear   →   CART_ITEM          →  ORDERS
                   (item_type=product)   ORDER_ITEM  →  PAYMENT
                                         (price          →  SHIPPING
Custom Build   →   PC_BUILD (draft)       snapshot)
               →   PC_BUILD (saved)
               →   CART_ITEM (build_id)
               →   PC_BUILD (in_cart)
               →   PC_BUILD (ordered)
```
