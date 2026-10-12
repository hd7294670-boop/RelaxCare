document.addEventListener("DOMContentLoaded", function () {
    const productGrid = document.getElementById("productGrid");
    const sortSelect = document.getElementById("sortSelect");
    const resultCount = document.getElementById("resultCount");
    const catalogEmpty = document.getElementById("catalogEmpty");

    const couponTrack = document.getElementById("couponTrack");
    const couponNotice = document.getElementById("couponNotice");

    /* =====================================
       1. SẮP XẾP SẢN PHẨM
    ===================================== */

    if (productGrid && sortSelect) {
        sortSelect.addEventListener("change", function () {
            const cards = Array.from(
                productGrid.querySelectorAll(".product-card")
            );

            const sortType = sortSelect.value;

            cards.sort(function (a, b) {
                const priceA = Number(a.dataset.price || 0);
                const priceB = Number(b.dataset.price || 0);

                const discountA = Number(a.dataset.discount || 0);
                const discountB = Number(b.dataset.discount || 0);

                const nameA = a.dataset.name || "";
                const nameB = b.dataset.name || "";

                const orderA = Number(a.dataset.order || 0);
                const orderB = Number(b.dataset.order || 0);

                switch (sortType) {
                    case "price-asc":
                        return priceA - priceB;

                    case "price-desc":
                        return priceB - priceA;

                    case "name":
                        return nameA.localeCompare(nameB, "vi");

                    case "discount":
                        return discountB - discountA;

                    default:
                        return orderA - orderB;
                }
            });

            cards.forEach(function (card) {
                productGrid.appendChild(card);
            });

            updateProductCount();
        });
    }


    /* =====================================
       2. CẬP NHẬT SỐ LƯỢNG SẢN PHẨM
    ===================================== */

    function updateProductCount() {
        if (!productGrid || !resultCount) {
            return;
        }

        const visibleCards = Array.from(
            productGrid.querySelectorAll(".product-card")
        ).filter(function (card) {
            return card.style.display !== "none";
        });

        resultCount.textContent = visibleCards.length + " sản phẩm";

        if (catalogEmpty) {
            catalogEmpty.hidden = visibleCards.length !== 0;
        }
    }

    updateProductCount();


    /* =====================================
       3. CUỘN DANH SÁCH MÃ GIẢM GIÁ
    ===================================== */

    const couponPrev = document.getElementById("couponPrev");
    const couponNext = document.getElementById("couponNext");

    function scrollCoupons(direction) {
        if (!couponTrack) {
            return;
        }

        const card = couponTrack.querySelector(".coupon-card");

        if (!card) {
            return;
        }

        const distance = card.getBoundingClientRect().width + 18;

        couponTrack.scrollBy({
            left: direction * distance,
            behavior: "smooth"
        });
    }

    if (couponPrev) {
        couponPrev.addEventListener("click", function () {
            scrollCoupons(-1);
        });
    }

    if (couponNext) {
        couponNext.addEventListener("click", function () {
            scrollCoupons(1);
        });
    }


    /* =====================================
       4. LẤY MÃ GIẢM GIÁ
    ===================================== */

    document.querySelectorAll(".coupon-get").forEach(function (button) {
        button.addEventListener("click", async function () {
            const code = button.dataset.code;

            if (!code) {
                return;
            }

            try {
                await navigator.clipboard.writeText(code);

                if (couponNotice) {
                    couponNotice.textContent =
                        "Đã sao chép mã " + code +
                        ". Bạn có thể sử dụng mã khi đặt hàng.";
                }
            } catch (error) {
                if (couponNotice) {
                    couponNotice.textContent =
                        "Mã ưu đãi của bạn: " + code;
                }
            }

            const originalText = button.textContent;

            button.textContent = "Đã lấy mã";

            window.setTimeout(function () {
                button.textContent = originalText;
            }, 1800);
        });
    });


    /* =====================================
       5. THÊM SẢN PHẨM VÀO GIỎ HÀNG
       Dữ liệu lưu trong localStorage.
    ===================================== */

    function readCart() {
        try {
            const savedCart = JSON.parse(
                localStorage.getItem("relaxcareCart") || "[]"
            );

            return Array.isArray(savedCart) ? savedCart : [];
        } catch (error) {
            return [];
        }
    }

    function saveCart(cart) {
        localStorage.setItem("relaxcareCart", JSON.stringify(cart));
    }

    function updateCartBadge(cart) {
        const totalQuantity = cart.reduce(function (total, item) {
            return total + Number(item.quantity || 0);
        }, 0);

        document.querySelectorAll("[data-cart-count]").forEach(function (badge) {
            badge.textContent = totalQuantity;
        });
    }

    function addProductToCart(name, price) {
        const cart = readCart();

        const existingProduct = cart.find(function (item) {
            return item.name === name;
        });

        if (existingProduct) {
            existingProduct.quantity =
                Number(existingProduct.quantity || 0) + 1;
        } else {
            cart.push({
                name: name,
                price: Number(price),
                quantity: 1
            });
        }

        saveCart(cart);
        updateCartBadge(cart);
    }

    document.querySelectorAll(".add-cart").forEach(function (button) {
        button.addEventListener("click", function () {
            const name = button.dataset.product;
            const price = Number(button.dataset.price);

            if (!name || !Number.isFinite(price) || price <= 0) {
                alert("Không thể thêm sản phẩm vào giỏ hàng.");
                return;
            }

            addProductToCart(name, price);

            const originalHTML = button.innerHTML;

            button.innerHTML =
                '<i class="fa-solid fa-check"></i> Đã thêm';

            button.classList.add("added");

            window.setTimeout(function () {
                button.innerHTML = originalHTML;
                button.classList.remove("added");
            }, 1500);
        });
    });

    updateCartBadge(readCart());


    /* =====================================
       6. ĐĂNG KÝ NHẬN BẢN TIN
    ===================================== */

    const newsletterForm = document.getElementById("newsletterForm");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const emailInput =
                document.getElementById("newsletterEmail");

            if (!emailInput || !emailInput.checkValidity()) {
                if (emailInput) {
                    emailInput.reportValidity();
                }

                return;
            }

            alert(
                "Cảm ơn bạn đã đăng ký nhận bản tin từ RelaxCare!"
            );

            newsletterForm.reset();
        });
    }


    /* =====================================
       7. TÌM KIẾM SẢN PHẨM TRÊN TRANG
       Không thay thế chức năng tìm kiếm
       dùng chung của website.
    ===================================== */

    const searchInput = document.getElementById("searchInput");

    function filterProducts(keyword) {
        if (!productGrid) {
            return;
        }

        const normalizedKeyword = keyword
            .trim()
            .toLocaleLowerCase("vi");

        productGrid.querySelectorAll(".product-card").forEach(function (card) {
            const name = (card.dataset.name || "")
                .toLocaleLowerCase("vi");

            card.style.display =
                !normalizedKeyword || name.includes(normalizedKeyword)
                    ? ""
                    : "none";
        });

        updateProductCount();
    }

    if (searchInput) {
        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                filterProducts(searchInput.value);

                const catalog = document.querySelector(".catalog-toolbar");

                if (catalog) {
                    catalog.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    }

    const searchButton = document.getElementById("searchButton");

    if (searchButton && searchInput) {
        searchButton.addEventListener("click", function () {
            filterProducts(searchInput.value);

            const catalog = document.querySelector(".catalog-toolbar");

            if (catalog) {
                catalog.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }
});