/* =====================================================
   RELAXCARE - GIỎ HÀNG
   Dùng chung cho index.html và tranggiohang.html
===================================================== */

(function () {
    "use strict";

    const CART_KEY = "relaxcare_cart_v1";

    /* 1. DANH SÁCH SẢN PHẨM */

    const PRODUCTS = {
        "massage-cam-tay": {
            id: "massage-cam-tay",
            name: "Máy massage cầm tay RelaxCare - 3 Chế Độ, 6 Đầu Thay",
            price: 1290000,
            image: "images/may-massage-cam-tay.jpg"
        },

        "massage-chan": {
            id: "massage-chan",
            name: "Máy massage chân RelaxCare - Day Huyệt & Hồng Ngoại",
            price: 2120000,
            image: "images/may-massage-chan.jpg"
        },

        "massage-bung": {
            id: "massage-bung",
            name: "Máy massage bụng RelaxCare - Đai Massage & Chườm Ấm",
            price: 1690000,
            image: "images/may-massage-bung.jpg"
        },

        "dau-nong-massage": {
            id: "dau-nong-massage",
            name: "Dầu nóng massage RelaxCare Thảo Mộc Tự Nhiên 100ml",
            price: 149000,
            image: "images/dau-nong-massage.jpg"
        },

        "cao-dan-giam-dau": {
            id: "cao-dan-giam-dau",
            name: "Cao dán giảm đau thảo dược RelaxCare - Hộp 10 Miếng",
            price: 119000,
            image: "images/cao-dan-giam-dau.jpg"
        }
    };


    /* 2. ĐỌC GIỎ HÀNG */

    function getCart() {
        try {
            const savedCart = localStorage.getItem(CART_KEY);

            if (!savedCart) {
                return {};
            }

            const cart = JSON.parse(savedCart);

            if (
                !cart ||
                typeof cart !== "object" ||
                Array.isArray(cart)
            ) {
                return {};
            }

            return cart;

        } catch (error) {
            console.error("Không thể đọc giỏ hàng:", error);
            return {};
        }
    }


    /* 3. LƯU GIỎ HÀNG */

    function saveCart(cart) {
        try {
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
            updateCartBadge();
            return true;

        } catch (error) {
            console.error("Không thể lưu giỏ hàng:", error);

            alert("Không thể lưu giỏ hàng. Vui lòng kiểm tra trình duyệt.");

            return false;
        }
    }


    /* 4. ĐỊNH DẠNG TIỀN */

    function formatMoney(amount) {
        return Number(amount).toLocaleString("vi-VN") + "₫";
    }


    /* 5. ĐẾM SỐ SẢN PHẨM TRÊN ICON */

    function updateCartBadge() {
        const cart = getCart();

        let totalQuantity = 0;

        Object.values(cart).forEach(function (item) {
            totalQuantity += Number(item.quantity) || 0;
        });

        document.querySelectorAll("[data-cart-count]").forEach(function (badge) {
            badge.textContent = totalQuantity;
            badge.style.display = "";
        });
    }


    /* 6. THÊM SẢN PHẨM */

    function addToCart(productId) {
        const product = PRODUCTS[productId];

        if (!product) {
            console.error("Không tìm thấy sản phẩm:", productId);

            alert("Không tìm thấy thông tin sản phẩm. Vui lòng kiểm tra mã sản phẩm.");

            return;
        }

        const cart = getCart();

        if (cart[productId]) {
            cart[productId].quantity += 1;

        } else {
            cart[productId] = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            };
        }

        if (saveCart(cart)) {
            alert("Đã thêm sản phẩm vào giỏ hàng!");
        }
    }


    /* 7. THAY ĐỔI SỐ LƯỢNG */

    function changeQuantity(productId, amount) {
        const cart = getCart();

        if (!cart[productId]) {
            return;
        }

        cart[productId].quantity += amount;

        if (cart[productId].quantity <= 0) {
            delete cart[productId];
        }

        if (saveCart(cart)) {
            renderCart();
        }
    }


    /* 8. XÓA SẢN PHẨM */

    function removeFromCart(productId) {
        const cart = getCart();

        delete cart[productId];

        if (saveCart(cart)) {
            renderCart();
        }
    }


    /* 9. HIỂN THỊ GIỎ HÀNG */

    function renderCart() {
        const cartContent = document.getElementById("cartContent");

        // Không phải trang giỏ hàng thì chỉ cập nhật icon.
        if (!cartContent) {
            updateCartBadge();
            return;
        }

        const cart = getCart();
        const items = Object.values(cart);

        if (items.length === 0) {
            cartContent.innerHTML = `
                <div class="cart-empty">
                    <h2>Giỏ hàng của bạn đang trống</h2>
                    <p>Bạn chưa có sản phẩm nào trong giỏ hàng.</p>
                    <a href="san-pham.html" class="btn-primary">
                        Tiếp tục mua sắm
                    </a>
                </div>
            `;

            return;
        }

        let subtotal = 0;
        let totalQuantity = 0;

        const productHTML = items.map(function (item) {
            const quantity = Math.max(1, Number(item.quantity) || 1);
            const price = Number(item.price) || 0;
            const lineTotal = price * quantity;

            subtotal += lineTotal;
            totalQuantity += quantity;

            return `
                <div class="cart-item"
                     style="display:flex; gap:16px; align-items:center;
                            padding:16px; border-bottom:1px solid #ddd;">

                    <img
                        src="${item.image}"
                        alt=""
                        style="width:90px;height:90px;object-fit:cover;"
                        onerror="this.style.display='none';"
                    >

                    <div style="flex:1;">
                        <h3>${escapeHTML(item.name)}</h3>

                        <p>Đơn giá: ${formatMoney(price)}</p>

                        <div style="display:flex;gap:10px;align-items:center;">
                            <button type="button"
                                    data-cart-decrease="${item.id}">
                                −
                            </button>

                            <span>${quantity}</span>

                            <button type="button"
                                    data-cart-increase="${item.id}">
                                +
                            </button>
                        </div>
                    </div>

                    <div>
                        <strong>${formatMoney(lineTotal)}</strong>

                        <br><br>

                        <button type="button"
                                data-cart-remove="${item.id}">
                            Xóa
                        </button>
                    </div>
                </div>
            `;
        }).join("");

        const shippingFee = subtotal >= 699000 ? 0 : 30000;
        const total = subtotal + shippingFee;

        cartContent.innerHTML = `
            <h2>Giỏ hàng của bạn</h2>

            <p>Bạn đang có ${totalQuantity} sản phẩm trong giỏ hàng.</p>

            <div class="cart-products">
                ${productHTML}
            </div>

            <div style="margin-top:24px;padding:20px;
                        border:1px solid #ddd;border-radius:8px;">

                <p>
                    Tạm tính:
                    <strong>${formatMoney(subtotal)}</strong>
                </p>

                <p>
                    Phí vận chuyển:
                    <strong>
                        ${shippingFee === 0 ? "Miễn phí" : formatMoney(shippingFee)}
                    </strong>
                </p>

                <h3>
                    Tổng cộng: ${formatMoney(total)}
                </h3>

                <button type="button" data-cart-clear>
                    Xóa toàn bộ giỏ hàng
                </button>

            </div>
        `;
    }


    /* 10. TRÁNH ĐƯA TÊN SẢN PHẨM THẲNG VÀO HTML */

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };

            return entities[character];
        });
    }


    /* 11. BẮT SỰ KIỆN CÁC NÚT */

    document.addEventListener("click", function (event) {
        const addButton = event.target.closest("[data-cart-add]");

        if (addButton) {
            event.preventDefault();

            const productId = addButton.getAttribute("data-cart-add");

            addToCart(productId);
            return;
        }

        const increaseButton = event.target.closest("[data-cart-increase]");

        if (increaseButton) {
            changeQuantity(
                increaseButton.getAttribute("data-cart-increase"),
                1
            );
            return;
        }

        const decreaseButton = event.target.closest("[data-cart-decrease]");

        if (decreaseButton) {
            changeQuantity(
                decreaseButton.getAttribute("data-cart-decrease"),
                -1
            );
            return;
        }

        const removeButton = event.target.closest("[data-cart-remove]");

        if (removeButton) {
            removeFromCart(
                removeButton.getAttribute("data-cart-remove")
            );
            return;
        }

        const clearButton = event.target.closest("[data-cart-clear]");

        if (clearButton) {
            if (confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng không?")) {
                if (saveCart({})) {
                    renderCart();
                }
            }
        }
    });


    /* 12. KHỞI ĐỘNG */

    function init() {
        updateCartBadge();
        renderCart();

        console.log("RelaxCare cart.js đã hoạt động.");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();

