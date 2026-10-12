<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RelaxCare - Thiết Bị Massage & Chăm Sóc Sức Khỏe Tại Nhà</title>
    <!-- LIÊN KẾT ĐỒNG BỘ VỚI INDEX.CSS DÙNG CHUNG -->
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
      <!-- Logo RelaxCare trên tab trình duyệt -->
<link rel="icon" type="image/png" href="b223c319-9565-4deb-a6e3-780d776867d7-Photoroom.png">
</head>
<body>

    <!-- 1. TOPBAR THÔNG BÁO TRÊN CÙNG -->
    <div class="topbar">
        Miễn phí vận chuyển cho đơn hàng từ 699.000₫ | Cam kết 1 đổi 1 trong 30 ngày | Bảo hành 12 tháng
    </div>
    
<!-- MAIN HEADER: MENU & LOGO BÊN TRÁI, TÁC VỤ BÊN PHẢI -->
    <header class="main-header">
        <div class="header-container">
            <!-- Cụm bên trái: Nút ☰ và Logo đứng sát nhau -->
            <div class="header-left">
                <button class="menu-toggle" aria-label="Menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>

<a href="index.html" class="logo" aria-label="RelaxCare - Trang chủ">
    <img
        src="b223c319-9565-4deb-a6e3-780d776867d7-Photoroom.png"
        alt="RelaxCare - Healthy & Wellness"
        class="logo-image"
    >
</a>
            </div>

            <!-- Cụm bên phải: Thanh tác vụ (Tìm kiếm, Tài khoản, Giỏ hàng) -->
            <!-- Cụm bên phải: Thanh tác vụ (Thứ 2 từ trái qua là icon Liên hệ) -->
            <div class="header-actions">
                <!-- 1. Icon Tìm kiếm -->
                <!-- 1. TÌM KIẾM -->
<div class="search-wrapper" id="searchWrapper">

    <!-- Icon kính lúp -->
    <button class="action-btn search-toggle" id="searchToggle" title="Tìm kiếm">
        <svg width="24" height="24" viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    </button>

    <!-- Thanh tìm kiếm mở rộng -->
    <div class="search-box" id="searchBox">

        <div class="search-input-row">

            <input
                type="text"
                id="searchInput"
                placeholder="Từ khóa tìm kiếm"
                autocomplete="off"
            >

            <button id="searchButton" class="search-submit" type="button">
                <svg width="25" height="25" viewBox="0 0 24 24"
                     fill="none"
                     stroke="white"
                     stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>

        </div>

        <!-- Kết quả tìm kiếm -->
        <div class="search-results" id="searchResults"></div>

    </div>

</div>

                <!-- 2. Icon Liên hệ (Vị trí thứ 2 từ trái qua phải, dẫn sang tranglienhe.html) -->
                <a href="tranglienhe.html" class="action-btn" title="Liên hệ hỗ trợ">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </a>

                <!-- 3. Icon Tài khoản -->
                <a href="trangtaikhoandangnhap.html" class="action-btn" title="Tài khoản">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </a>

                <!-- 4. Icon Giỏ hàng kèm Badge đỏ -->
                <a href="tranggiohang.html" class="action-btn cart-icon" title="Giỏ hàng">
    <svg width="22" height="22" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>

    <span class="badge" data-cart-count>0</span>
</a>
            </div>
        </div>
    </header>

    <!-- 3. BANNER SLIDER TỰ ĐỘNG & CHỦ ĐỘNG -->
    <section class="banner-slider-wrapper">
        <div class="slider-container" id="sliderContainer">
            <!-- Slide 1: Thư giãn toàn diện -->
            <div class="slide active">
                <div class="slide-content">
                    <span class="sub-badge">Giải pháp chăm sóc tại nhà</span>
                    <h1>Thư giãn toàn diện<br><span class="highlight">Sống khỏe tự nhiên</span></h1>
                    <p>Thiết bị massage trị liệu kết hợp thảo dược lành tính, xua tan đau mỏi cổ vai gáy và phục hồi cơ bắp hiệu quả.</p>
                    <a href="trangsanphamchitiet1.html" class="btn-primary">Tìm hiểu thêm →</a>
                </div>
                <div class="slide-image">
                    <img src="vn-11134207-81ztc-mtpfbej30g089d.webp" alt="Máy massage cầm tay RelaxCare">
                </div>
            </div>

            <!-- Slide 2: Máy massage chân -->
            <div class="slide">
                <div class="slide-content">
                    <span class="sub-badge">Chăm sóc đôi chân mỗi ngày</span>
                    <h1>Xua tan nhức mỏi<br><span class="highlight">Bước chân nhẹ tênh</span></h1>
                    <p>Máy massage chân chuyên sâu công nghệ túi khí và chườm ấm hồng ngoại, liệu trình chuẩn spa tại nhà.</p>
                    <a href="trangsanphamchitiet2.html" class="btn-primary">Mua ngay →</a>
                </div>
                <div class="slide-image">
                    <img src="vn-11134207-81ztc-mtpf8gzp6tj699.webp" alt="Máy massage chân RelaxCare">
                </div>
            </div>

            <!-- Slide 3: Thảo mộc thiên nhiên -->
            <div class="slide">
                <div class="slide-content">
                    <span class="sub-badge">Thảo mộc thiên nhiên an toàn</span>
                    <h1>Dầu nóng & Cao dán<br><span class="highlight">Giảm đau nhanh chóng</span></h1>
                    <p>Chiết xuất gừng, quế, bạc hà thẩm thấu sâu, giải tỏa căng cứng cơ khớp cho người bận rộn và người lớn tuổi.</p>
                    <a href="trangsanphamchitiet3.html" class="btn-primary">Xem ưu đãi →</a>
                </div>
                <div class="slide-image">
                    <img src="vn-11134207-81ztc-mtpfiz6cuu4kd9@resize_w900_nl.webp" alt="Dầu nóng massage thảo dược">
                </div>
            </div>
        </div>

        <!-- Mũi tên điều khiển slide chủ động -->
        <button class="slider-arrow prev-btn" id="prevSlide" aria-label="Slide trước">&#10094;</button>
        <button class="slider-arrow next-btn" id="nextSlide" aria-label="Slide tiếp theo">&#10095;</button>

        <!-- Dấu chấm chỉ báo slide -->
        <div class="slider-dots" id="sliderDots">
            <span class="dot active" data-index="0"></span>
            <span class="dot" data-index="1"></span>
            <span class="dot" data-index="2"></span>
        </div>
    </section>

    <!-- 4. THANH THỐNG KÊ & CHÍNH SÁCH NỔI BẬT (CSNB) -->
    <section class="stat-highlight-section">
        <div class="container stat-grid">
            <div class="stat-card primary-stat">
                <div class="stat-number">10.000+</div>
                <div class="stat-label">Khách hàng tin chọn</div>
            </div>
            <div class="stat-card">
                <div class="icon-circle">🛡️</div>
                <div class="stat-label">Bảo hành 12 tháng</div>
            </div>
            <div class="stat-card">
                <div class="icon-circle">🔄</div>
                <div class="stat-label">1 đổi 1 trong 30 ngày</div>
            </div>
            <div class="stat-card">
                <div class="icon-circle">🚚</div>
                <div class="stat-label">Freeship từ 699.000₫</div>
            </div>
        </div>
    </section>

    <!-- 5. GIỚI THIỆU DOANH NGHIỆP, TẦM NHÌN - SỨ MỆNH -->
    <section class="about-section">
        <div class="container about-wrapper">
            <div class="about-content">
                <h2>Giới thiệu <span>RelaxCare</span></h2>
                <p>
                    <strong>RelaxCare</strong> là sự kết hợp hài hòa giữa <em>"Relax"</em> (thư giãn, giải tỏa căng thẳng sau học tập, làm việc) và <em>"Care"</em> (chăm sóc, quan tâm và nâng cao sức khỏe).
                </p>
                <p>
                    Với sứ mệnh mang liệu trình chăm sóc cơ thể chuẩn spa về từng mái ấm, RelaxCare cung cấp các dòng máy massage tay, chân, bụng và sản phẩm giảm đau thiên nhiên an toàn, tiện lợi.
                </p>
                <div class="about-metrics">
                    <div class="metric-item">
                        <span class="metric-val">5+</span>
                        <span class="metric-name">Sản phẩm cốt lõi</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-val">100%</span>
                        <span class="metric-name">Chính hãng an toàn</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-val">30</span>
                        <span class="metric-name">Ngày đổi trả an tâm</span>
                    </div>
                </div>
            </div>
            <div class="about-media">
                <img src="48640002-0435-4a7c-a24c-b1acfae13c15.png" alt="Không gian thư giãn RelaxCare">
            </div>
        </div>
    </section>

    <!-- 6. HÀNG MÃ GIẢM GIÁ / VOUCHER ƯU ĐÃI -->
    <section class="voucher-section">
        <div class="container voucher-grid">
            <!-- Voucher 1 -->
            <div class="voucher-card">
                <div class="voucher-left">MÃ: FREESHIP699</div>
                <div class="voucher-right">
                    <div class="voucher-title">Miễn phí giao hàng toàn quốc</div>
                    <div class="voucher-desc">Áp dụng cho đơn hàng giá trị từ 699.000₫</div>
                    <div class="voucher-actions">
                        <button class="btn-detail" onclick="openVoucherModal('FREESHIP699', 'Miễn phí 100% phí vận chuyển cho tất cả đơn hàng từ 699.000₫ trên cả nước.')">Điều kiện</button>
                        <button class="btn-copy" onclick="copyCode('FREESHIP699')">Sao chép</button>
                    </div>
                </div>
            </div>
            <!-- Voucher 2 -->
            <div class="voucher-card">
                <div class="voucher-left green-v">MÃ: RELAX300K</div>
                <div class="voucher-right">
                    <div class="voucher-title">Tiết kiệm 300.000₫ cho Combo 1</div>
                    <div class="voucher-desc">Máy cầm tay + Dầu nóng + Cao dán giảm đau</div>
                    <div class="voucher-actions">
                        <button class="btn-detail" onclick="openVoucherModal('RELAX300K', 'Giảm trực tiếp 300.000₫ khi quý khách chọn đặt mua trọn bộ Combo 1.')">Điều kiện</button>
                        <button class="btn-copy" onclick="copyCode('RELAX300K')">Sao chép</button>
                    </div>
                </div>
            </div>
            <!-- Voucher 3 -->
            <div class="voucher-card">
                <div class="voucher-left blue-v">MÃ: QUATANG</div>
                <div class="voucher-right">
                    <div class="voucher-title">Tặng túi chườm thảo dược</div>
                    <div class="voucher-desc">Áp dụng cho đơn hàng từ 1.800.000₫</div>
                    <div class="voucher-actions">
                        <button class="btn-detail" onclick="openVoucherModal('QUATANG', 'Tự động gửi kèm 01 túi chườm thảo dược cao cấp khi đơn hàng đạt mức 1.800.000₫.')">Điều kiện</button>
                        <button class="btn-copy" onclick="copyCode('QUATANG')">Sao chép</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. SẢN PHẨM NỔI BẬT & ĐỔI ẢNH KHI RÊ CHUỘT (HOVER IMAGE SWAP) -->
    <section class="featured-section">
        <div class="container featured-layout">
            <!-- Cột giới thiệu bên trái -->
            <div class="featured-intro">
                <h2>Sản phẩm <span>nổi bật</span></h2>
                <p>Thiết bị massage chuyên sâu kết hợp thảo dược thiên nhiên, xua tan đau mỏi và nâng cao chất lượng cuộc sống.</p>
                <a href="san-pham.html" class="btn-see-all">Xem tất cả →</a>
            </div>

            <!-- Cột danh sách sản phẩm bên phải -->
            <div class="product-cards-row">
                <!-- SP 1: Máy massage cầm tay (Hình 4) -->
                <div class="product-item">
                    <div class="product-thumb">
                        <span class="tag-badge">-17%</span>
                        <!-- Ảnh chính & ảnh đổi khi hover -->
                        <img src="vn-11134207-81ztc-mtpfbej30g089d.webp" class="img-main" alt="Máy massage cầm tay">
                        <img src="vn-11134207-81ztc-mtqt9acfe1vqd7.webp" class="img-hover" alt="Đầu massage thay thế">
                        <div class="quick-view-overlay">
                            <a href="trangsanphamchitiet1.html" class="quick-btn">👁️ Xem chi tiết</a>
                        </div>
                    </div>
                    <div class="product-details">
                        <div class="brand-tag">RelaxCare</div>
                        <h3 class="product-name"><a href="trangsanphamchitiet1.html">Máy massage cầm tay RelaxCare - 3 Chế Độ, 6 Đầu Thay</a></h3>
                        <div class="price-box">
                            <span class="current-price">1.290.000₫</span>
                            <span class="old-price">1.558.000₫</span>
                        </div>
                        <button
    type="button"
    data-cart-add="massage-cam-tay"
    class="rc-add-cart">
    Thêm vào giỏ hàng
</button>
                        <div class="bonus-tag">🎁 Bảo hành 12 tháng - 1 đổi 1 30 ngày</div>
                    </div>
                </div>

                <!-- SP 2: Máy massage chân (Hình 3) -->
                <div class="product-item">
                    <div class="product-thumb">
                        <span class="tag-badge green-badge">Bán chạy</span>
                        <img src="vn-11134207-81ztc-mtpf8gzp6tj699.webp" class="img-main" alt="Máy massage chân">
                        <img src="vn-11134207-81ztc-mtqt8713l4ap93.webp" class="img-hover" alt="Khoang đặt chân máy massage">
                        <div class="quick-view-overlay">
                            <a href="trangsanphamchitiet2.html" class="quick-btn">👁️ Xem chi tiết</a>
                        </div>
                    </div>
                    <div class="product-details">
                        <div class="brand-tag">RelaxCare</div>
                        <h3 class="product-name"><a href="trangsanphamchitiet2.html">Máy massage chân RelaxCare - Day Huyệt & Hồng Ngoại</a></h3>
                        <div class="price-box">
                            <span class="current-price">2.120.000₫</span>
                            <span class="old-price">2.388.000₫</span>
                        </div>
                        <button
    type="button"
    data-cart-add="massage-chan"
    class="rc-add-cart">
    Thêm vào giỏ hàng
</button>
                        <div class="bonus-tag">🚚 Miễn phí vận chuyển toàn quốc</div>
                    </div>
                </div>

                <!-- SP 3: Máy massage bụng -->
                <div class="product-item">
                    <div class="product-thumb">
                        <span class="tag-badge">-8%</span>
                        <img src="8ce2dd9d-968e-4003-8570-90b675975726.png" class="img-main" alt="Máy massage bụng">
                        <img src="033966aa-9207-4f25-b052-af6dcb3ceb85.png" class="img-hover" alt="Đai đeo massage bụng">
                        <div class="quick-view-overlay">
                            <a href="trangsanphamchitiet3.html" class="quick-btn">👁️ Xem chi tiết</a>
                        </div>
                    </div>
                    <div class="product-details">
                        <div class="brand-tag">RelaxCare</div>
                        <h3 class="product-name"><a href="trangsanphamchitiet3.html">Máy massage bụng RelaxCare - Đai Massage & Chườm Ấm</a></h3>
                        <div class="price-box">
                            <span class="current-price">1.690.000₫</span>
                            <span class="old-price">1.839.000₫</span>
                        </div>
                       <button
    type="button"
    data-cart-add="massage-bung"
    class="rc-add-cart">
    Thêm vào giỏ hàng
</button>
                        <div class="bonus-tag">🌿 3 chế độ chườm ấm thon gọn eo</div>
                    </div>
                </div>

                <!-- SP 4: Dầu nóng massage (Hình 5) -->
                <div class="product-item">
                    <div class="product-thumb">
                        <span class="tag-badge">-18%</span>
                        <img src="eadc43c3-11b0-4273-9c14-e3740e8e92fb (1).png" class="img-main" alt="Dầu nóng massage">
                        <img src="images/dau-nong-massage-hover.jpg" class="img-hover" alt="Thảo mộc gừng quế">
                        <div class="quick-view-overlay">
                            <a href="trangsanphamchitiet4.html" class="quick-btn">👁️ Xem chi tiết</a>
                        </div>
                    </div>
                    <div class="product-details">
                        <div class="brand-tag">RelaxCare</div>
                        <h3 class="product-name"><a href="trangsanphamchitiet4.html">Dầu nóng massage RelaxCare Thảo Mộc Tự Nhiên 100ml</a></h3>
                        <div class="price-box">
                            <span class="current-price">149.000₫</span>
                            <span class="old-price">180.000₫</span>
                        </div>
                        <button
    type="button"
    data-cart-add="dau-nong-massage"
    class="rc-add-cart">
    Thêm vào giỏ hàng
</button>
                        <div class="bonus-tag">🌿 Gừng, quế, bạc hà & long não</div>
                    </div>
                </div>

                <!-- SP 5: Cao dán giảm đau (Hình 2) -->
                <div class="product-item">
                    <div class="product-thumb">
                        <span class="tag-badge">-20%</span>
                        <img src="4486d8ec-a4aa-4a1b-a086-2d6b2cf0db13.png" class="img-main" alt="Cao dán giảm đau">
                        <img src="images/cao-dan-giam-dau-hover.jpg" class="img-hover" alt="Miếng dán thảo dược">
                        <div class="quick-view-overlay">
                            <a href="trangsanphamchitiet5.html" class="quick-btn">👁️ Xem chi tiết</a>
                        </div>
                    </div>
                    <div class="product-details">
                        <div class="brand-tag">RelaxCare</div>
                        <h3 class="product-name"><a href="trangsanphamchitiet5.html">Cao dán giảm đau thảo dược RelaxCare - Hộp 10 Miếng</a></h3>
                        <div class="price-box">
                            <span class="current-price">119.000₫</span>
                            <span class="old-price">150.000₫</span>
                        </div>
                        <button
    type="button"
    data-cart-add="cao-dan-giam-dau"
    class="rc-add-cart">
    Thêm vào giỏ hàng
</button>
                        <div class="bonus-tag">⏱️ Tác động dịu đau suốt 8 tiếng</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 8. FOOTER CHUẨN GIAO DIỆN -->
    <footer class="main-footer">
        <div class="container footer-grid">
            <div class="footer-col">
                <p class="footer-address">
                    Trạm thư giãn & Thiết bị chăm sóc sức khỏe tại gia.<br>
                    <strong>Địa chỉ:</strong> Số 150/8 Nguyễn Duy Cung, Phường 12, Gò Vấp, TP.HCM<br>
                    <strong>Hotline:</strong> 09xx.xxx.xxx (Tư vấn 24/7)<br>
                    <strong>Email:</strong> support@relaxcare.vn
                </p>
                <div class="social-icons">
    <!-- Facebook -->
    <a href="https://www.facebook.com/"
       class="social-icon"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Facebook">
        <i class="fa-brands fa-facebook-f"></i>
    </a>

    <!-- Shopee -->
    <a href="https://shopee.vn/"
       class="social-icon"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Shopee">
        <i class="fa-solid fa-bag-shopping"></i>
    </a>

    <!-- TikTok -->
    <a href="https://www.tiktok.com/"
       class="social-icon"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="TikTok">
        <i class="fa-brands fa-tiktok"></i>
    </a>

    <!-- Zalo -->
    <a href="https://zalo.me/"
       class="social-icon"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Zalo">
        <span class="zalo-text">Zalo</span>
    </a>
</div>
            </div>

            <div class="footer-col">
                <h4>Hỗ trợ khách hàng</h4>
                <ul class="footer-menu">
                    <li><a href="tranglienhe.html">Liên hệ chúng tôi</a></li>
                    <li><a href="chinhsachgiaohang.html">Chính sách giao hàng (Freeship >699k)</a></li>
                    <li><a href="chinhsachbaohanh.html">Chính sách bảo hành 12 tháng</a></li>
                    <li><a href="chinhsach1doi1.html">Chính sách 1 đổi 1 trong 30 ngày</a></li>
                    <li><a href="kichhoatbaohanhdientu.html">Kích hoạt bảo hành điện tử</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Đăng ký nhận ưu đãi</h4>
                <p>Đăng ký email để nhận cẩm nang chăm sóc cột sống và mã voucher ưu đãi 50.000₫.</p>
                <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Cảm ơn bạn đã đăng ký nhận bản tin từ RelaxCare!');">
                    <input type="email" placeholder="Email của bạn..." required>
                    <button type="submit">Đăng ký</button>
                </form>
                <div class="payment-methods">
                    <span>Thanh toán:</span> COD | ShopeePay | Momo | Chuyển khoản QR
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            © Bản quyền thuộc về RelaxCare - Nhóm 2 Thương mại điện tử
        </div>
    </footer>


<div class="floating-contact-widget" id="floatingContactWidget">

    <!-- 1. NÚT CUỘN LÊN ĐẦU TRANG -->
    <button
        class="float-btn btn-top"
        id="backToTop"
        type="button"
        title="Cuộn lên đầu trang"
        aria-label="Cuộn lên đầu trang">

        <svg width="21" height="21"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2.5">

            <polyline points="18 15 12 9 6 15"></polyline>

        </svg>
    </button>


    <!-- 2. KHUNG CHỨA 3 LỰA CHỌN LIÊN LẠC -->
    <div class="contact-options" id="contactOptions">

        <div class="contact-options-header">

            <div>
                <strong>RelaxCare hỗ trợ</strong>

                <p>Chúng tôi luôn sẵn sàng giúp bạn!</p>
            </div>

            <button
                class="contact-close-btn"
                id="closeContactOptions"
                type="button"
                aria-label="Đóng danh sách liên lạc">

                &times;

            </button>

        </div>


        <!-- LỰA CHỌN 1: ZALO -->
        <a
            href="https://zalo.me/0900000000"
            class="contact-option"
            target="_blank"
            rel="noopener noreferrer">

            <span class="contact-option-icon zalo-icon">
                Z
            </span>

            <span class="contact-option-info">

                <strong>Chat qua Zalo</strong>

                <small>Liên hệ tư vấn trực tiếp</small>

            </span>

            <span class="contact-option-arrow">›</span>

        </a>


        <!-- LỰA CHỌN 2: MESSENGER -->
        <a
            href="https://www.facebook.com/profile.php?id=61594697990602"
            class="contact-option"
            target="_blank"
            rel="noopener noreferrer">

            <span class="contact-option-icon messenger-icon">

                <svg width="25" height="25"
                     viewBox="0 0 24 24"
                     fill="currentColor">

                    <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.512 3.738 7.21V22l3.38-1.855c.91.252 1.88.388 2.882.388 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.05 12.445l-2.67-2.85-5.21 2.85 5.73-6.082 2.74 2.85 5.14-2.85-5.73 6.082z"/>

                </svg>

            </span>

            <span class="contact-option-info">

                <strong>Chat qua Messenger</strong>

                <small>Nhắn tin cho RelaxCare</small>

            </span>

            <span class="contact-option-arrow">›</span>

        </a>


        <!-- LỰA CHỌN 3: CHATBOT -->
        <button
            class="contact-option chatbot-option"
            id="openChatbot"
            type="button">

            <span class="contact-option-icon chatbot-icon">

                <svg width="25" height="25"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="1.8">

                    <rect x="3" y="6" width="18" height="14" rx="4"></rect>

                    <path d="M12 2v4"></path>

                    <circle cx="8.5" cy="12" r="1"></circle>

                    <circle cx="15.5" cy="12" r="1"></circle>

                    <path d="M8 16h8"></path>

                </svg>

            </span>

            <span class="contact-option-info">

                <strong>Chatbot RelaxCare</strong>

                <small>Tư vấn tự động 24/7</small>

            </span>

            <span class="contact-option-arrow">›</span>

        </button>


        <div class="contact-options-footer">

            🌿 RelaxCare - Chăm sóc sức khỏe tại nhà

        </div>

    </div>


    <!-- 3. NÚT MỞ / ĐÓNG THANH LIÊN LẠC -->
    <button
        class="contact-main-btn"
        id="contactMainBtn"
        type="button"
        aria-label="Mở các kênh liên lạc"
        aria-expanded="false">

        <!-- Icon liên lạc -->
        <svg
            class="contact-main-icon"
            id="contactMainIcon"
            width="29"
            height="29"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2">

            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8
                     8.5 8.5 0 0 1-7.6 4.7
                     8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7
                     a8.38 8.38 0 0 1-.9-3.8
                     8.5 8.5 0 0 1 4.7-7.6
                     8.38 8.38 0 0 1 3.8-.9h.5
                     a8.48 8.48 0 0 1 8 8v.5z">
            </path>

        </svg>

        <span class="contact-notification-dot"></span>

    </button>

</div>


<!-- =====================================================
     4. CỬA SỔ CHATBOT RELAXCARE
===================================================== -->

<div
    class="chatbot-window"
    id="chatbotWindow"
    role="dialog"
    aria-label="Chatbot tư vấn RelaxCare"
    aria-modal="false"
    aria-hidden="true">

    <!-- HEADER CHATBOT -->
    <div class="chatbot-header">

        <div class="chatbot-avatar">

            <svg width="26" height="26"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="1.8">

                <rect x="3" y="6" width="18" height="14" rx="4"></rect>

                <path d="M12 2v4"></path>

                <circle cx="8.5" cy="12" r="1"></circle>

                <circle cx="15.5" cy="12" r="1"></circle>

                <path d="M8 16h8"></path>

            </svg>

        </div>

        <div class="chatbot-header-info">

            <strong>Trợ lý RelaxCare</strong>

            <span>
                <i></i> Đang sẵn sàng hỗ trợ
            </span>

        </div>

        <button
            class="chatbot-close"
            id="closeChatbot"
            type="button"
            aria-label="Đóng chatbot">

            &times;

        </button>

    </div>


    <!-- KHU VỰC HIỂN THỊ TIN NHẮN -->
    <div
        class="chatbot-messages"
        id="chatbotMessages"
        aria-live="polite">

        <div class="chat-message bot-message">

            <div class="message-avatar">🌿</div>

            <div class="message-content">

                <div class="message-bubble">

                    Xin chào! 👋

                    <br><br>

                    Mình là trợ lý ảo của <strong>RelaxCare</strong>.

                    <br><br>

                    Mình có thể giúp bạn tìm hiểu sản phẩm massage,
                    giá bán, chính sách bảo hành và vận chuyển.

                    <br><br>

                    Bạn muốn tìm hiểu điều gì nhỉ?

                </div>

                <span class="message-time">Trợ lý RelaxCare</span>

            </div>

        </div>

    </div>


    <!-- CÁC CÂU HỎI GỢI Ý -->
    <div class="chatbot-suggestions" id="chatbotSuggestions">

        <button type="button" data-question="Tư vấn sản phẩm">
            🛍️ Tư vấn sản phẩm
        </button>

        <button type="button" data-question="Bảng giá sản phẩm">
            💰 Bảng giá
        </button>

        <button type="button" data-question="Chính sách bảo hành">
            🛡️ Bảo hành
        </button>

        <button type="button" data-question="Chính sách vận chuyển">
            🚚 Vận chuyển
        </button>

    </div>


    <!-- Ô NHẬP TIN NHẮN -->
    <form class="chatbot-input-area" id="chatbotForm">

        <input
            type="text"
            id="chatbotInput"
            placeholder="Nhập câu hỏi của bạn..."
            autocomplete="off"
            aria-label="Nhập tin nhắn"
            maxlength="500"
            required>

        <button
            type="submit"
            class="chatbot-send-btn"
            aria-label="Gửi tin nhắn">

            <svg width="22" height="22"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2">

                <path d="M22 2L11 13"></path>

                <path d="M22 2L15 22l-4-9-9-4 20-7z"></path>

            </svg>

        </button>

    </form>


    <div class="chatbot-disclaimer">

        Trợ lý tự động RelaxCare · Thông tin mang tính tham khảo

    </div>

</div>

    <!-- 10. POP-UP THÔNG BÁO MUA HÀNG ẢO (GÓC TRÁI DƯỚI) -->
    <div class="social-proof-toast" id="socialToast">
        <img src="images/may-massage-chan.jpg" alt="Đã mua">
        <div class="toast-text">
            <strong>Trần Thu Trang (Hà Nội)</strong>
            <span>Vừa đặt mua <em>Máy massage chân RelaxCare</em> cách đây 2 phút!</span>
        </div>
        <button class="toast-close" onclick="document.getElementById('socialToast').style.display='none'">&times;</button>
    </div>

    <!-- 11. MODAL ĐIỀU KIỆN MÃ VOUCHER -->
    <div class="voucher-modal" id="voucherModal">
        <div class="modal-box">
            <h3 id="modalCode">MÃ ƯU ĐÃI</h3>
            <p id="modalDesc">Nội dung chi tiết điều kiện</p>
            <button class="btn-primary" onclick="closeVoucherModal()">Đã hiểu</button>
        </div>
    </div>

    <!-- 1. LỚP PHỦ MỜ KHI MỞ MENU -->
    <div class="menu-overlay" id="menuOverlay" onclick="closeMenu()"></div>

    <!-- 2. KHUNG MENU TRƯỢT GÓC TRÁI (THEO HÌNH 2) -->
    <aside class="side-menu-drawer" id="sideMenuDrawer">
        <div class="side-menu-header">
            <a href="trangtaikhoandangnhap.html" class="user-account-box">
                <div class="user-icon-frame">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div class="user-text">
                    <span class="user-sub">Tài khoản</span>
                    <span class="user-title">Đăng nhập</span>
                </div>
            </a>

            <button class="close-menu-btn" onclick="closeMenu()" aria-label="Đóng menu">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>

        <ul class="side-menu-list">
            <li><a href="index.html">Trang chủ</a></li>
            <li><a href="tranggioitthieu.html">Giới thiệu</a></li>
            <li><a href="trangsanphan.html">Sản phẩm</a></li>
            <li><a href="tranglienhe.html">Blog</a></li>
        </ul>
    </aside>

    <!-- 3. THẺ SCRIPT XỬ LÝ BẤM MỞ / ĐÓNG MENU -->
    <script>
        function openMenu() {
            document.getElementById('sideMenuDrawer').classList.add('active');
            document.getElementById('menuOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            document.getElementById('sideMenuDrawer').classList.remove('active');
            document.getElementById('menuOverlay').classList.remove('active');
            document.body.style.overflow = '';
        }

        // Bắt sự kiện bấm vào nút 3 gạch
        const menuBtn = document.querySelector('.menu-toggle');
        if (menuBtn) {
            menuBtn.addEventListener('click', openMenu);
        }
        
    </script>
    <script>
/* =========================================================
   HỆ THỐNG TÌM KIẾM SẢN PHẨM RELAXCARE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchWrapper = document.getElementById("searchWrapper");
    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");

    if (!searchWrapper || !searchInput || !searchResults) {
        return;
    }


    /* =====================================================
       DANH SÁCH SẢN PHẨM
    ===================================================== */

    const products = [

        {
            name: "Máy massage cầm tay RelaxCare - 3 Chế Độ, 6 Đầu Thay",
            price: "1.290.000₫",
            image: "images/may-massage-cam-tay.jpg",
            link: "san-pham.html"
        },

        {
            name: "Máy massage chân RelaxCare - Day Huyệt & Hồng Ngoại",
            price: "2.120.000₫",
            image: "images/may-massage-chan.jpg",
            link: "san-pham.html"
        },

        {
            name: "Máy massage bụng RelaxCare - Đai Massage & Chườm Ấm",
            price: "1.690.000₫",
            image: "images/may-massage-bung.jpg",
            link: "san-pham.html"
        },

        {
            name: "Dầu nóng massage RelaxCare Thảo Mộc Tự Nhiên 100ml",
            price: "149.000₫",
            image: "images/dau-nong-massage.jpg",
            link: "san-pham.html"
        },

        {
            name: "Cao dán giảm đau thảo dược RelaxCare - Hộp 10 Miếng",
            price: "119.000₫",
            image: "images/cao-dan-giam-dau.jpg",
            link: "san-pham.html"
        }

    ];


    /* =====================================================
       HÀM BỎ DẤU TIẾNG VIỆT
    ===================================================== */

    function removeVietnameseTones(str) {

        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .toLowerCase();

    }


    /* =====================================================
       HIỂN THỊ KẾT QUẢ
    ===================================================== */

    function showResults(keyword) {

        const keywordNormalized =
            removeVietnameseTones(keyword.trim());


        /* Nếu chưa nhập gì */
        if (keywordNormalized === "") {

            searchResults.innerHTML = "";

            return;
        }


        /* Lọc sản phẩm */
        const results = products.filter(product => {

            const productName =
                removeVietnameseTones(product.name);

            return productName.includes(keywordNormalized);

        });


        /* Không có sản phẩm */
        if (results.length === 0) {

            searchResults.innerHTML = `
                <div class="search-no-result">
                    Không tìm thấy sản phẩm
                    "<strong>${keyword}</strong>"
                </div>
            `;

            return;
        }


        /* Hiển thị sản phẩm */
        searchResults.innerHTML = results.map(product => {

            return `
                <a
                    href="${product.link}"
                    class="search-result-item"
                >

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div class="search-result-info">

                        <div class="search-result-name">
                            ${product.name}
                        </div>

                        <div class="search-result-price">
                            ${product.price}
                        </div>

                    </div>

                </a>
            `;

        }).join("");

    }


    /* =====================================================
       GÕ TỪ KHÓA → HIỂN THỊ NGAY
    ===================================================== */

    searchInput.addEventListener("input", function () {

        showResults(this.value);

    });


    /* =====================================================
       BẤM NÚT KÍNH LÚP
    ===================================================== */

    searchButton.addEventListener("click", function () {

        const keyword = searchInput.value.trim();

        if (keyword === "") {

            searchInput.focus();

            return;
        }

        showResults(keyword);

    });


    /* =====================================================
       NHẤN ENTER
    ===================================================== */

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            const firstResult =
                searchResults.querySelector(".search-result-item");

            if (firstResult) {

                firstResult.click();

            }

        }

    });


    /* =====================================================
       BẤM ICON → FOCUS VÀO Ô TÌM KIẾM
    ===================================================== */

    const searchToggle =
        document.getElementById("searchToggle");

    if (searchToggle) {

        searchToggle.addEventListener("click", function () {

            searchBox.classList.add("active");

            setTimeout(() => {

                searchInput.focus();

            }, 100);

        });

    }

});
</script>
<script>
document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       RELAXCARE - BANNER SLIDER
    ========================================== */

    const slides = document.querySelectorAll(
        ".banner-slider-wrapper .slide"
    );

    const prevButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");

    const dots = document.querySelectorAll(
        "#sliderDots .dot"
    );

    const banner = document.querySelector(
        ".banner-slider-wrapper"
    );


    /* Không có slide thì dừng */
    if (!slides.length) {
        console.error("Không tìm thấy slide!");
        return;
    }


    let currentIndex = 0;

    let autoSlideTimer = null;

    const AUTO_TIME = 3000;


    /* ==========================================
       HIỂN THỊ SLIDE
    ========================================== */

    function changeSlide(index) {

        /* Vòng lại slide */
        if (index >= slides.length) {
            index = 0;
        }

        if (index < 0) {
            index = slides.length - 1;
        }

        currentIndex = index;


        /* Xóa active */
        slides.forEach(function (slide) {

            slide.classList.remove("active");

        });


        /* Thêm active */
        slides[currentIndex].classList.add("active");


        /* Cập nhật dấu chấm */
        dots.forEach(function (dot, index) {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        });

    }


    /* ==========================================
       SLIDE TIẾP
    ========================================== */

    function nextSlide() {

        changeSlide(currentIndex + 1);

    }


    /* ==========================================
       SLIDE TRƯỚC
    ========================================== */

    function prevSlide() {

        changeSlide(currentIndex - 1);

    }


    /* ==========================================
       TỰ ĐỘNG CHẠY
    ========================================== */

    function startAutoSlide() {

        stopAutoSlide();

        autoSlideTimer = setInterval(
            nextSlide,
            AUTO_TIME
        );

    }


    /* ==========================================
       DỪNG AUTO
    ========================================== */

    function stopAutoSlide() {

        if (autoSlideTimer !== null) {

            clearInterval(autoSlideTimer);

            autoSlideTimer = null;

        }

    }


    /* ==========================================
       NÚT PHẢI
    ========================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                nextSlide();

                /* Reset thời gian tự động */
                startAutoSlide();

            }
        );

    }


    /* ==========================================
       NÚT TRÁI
    ========================================== */

    if (prevButton) {

        prevButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                prevSlide();

                /* Reset thời gian tự động */
                startAutoSlide();

            }
        );

    }


    /* ==========================================
       DẤU CHẤM
    ========================================== */

    dots.forEach(function (dot, index) {

        dot.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                changeSlide(index);

                startAutoSlide();

            }
        );

    });


    /* ==========================================
       RÊ CHUỘT VÀO BANNER
       → TẠM DỪNG
    ========================================== */

    if (banner) {

        banner.addEventListener(
            "mouseenter",
            function () {

                stopAutoSlide();

            }
        );


        banner.addEventListener(
            "mouseleave",
            function () {

                startAutoSlide();

            }
        );

    }


    /* ==========================================
       KHỞI TẠO
    ========================================== */

    changeSlide(0);

    startAutoSlide();


    console.log(
        "RelaxCare Slider đã khởi động:",
        slides.length,
        "slide"
    );

});
</script>
<script>
/* =========================================================
   RELAXCARE - ĐIỀU KHIỂN THANH LIÊN LẠC
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const contactMainBtn = document.getElementById("contactMainBtn");
    const contactMainIcon = document.getElementById("contactMainIcon");

    const contactOptions = document.getElementById("contactOptions");
    const closeContactOptions = document.getElementById("closeContactOptions");

    const chatbotWindow = document.getElementById("chatbotWindow");
    const openChatbotBtn = document.getElementById("openChatbot");
    const closeChatbotBtn = document.getElementById("closeChatbot");

    const chatbotMessages = document.getElementById("chatbotMessages");
    const chatbotForm = document.getElementById("chatbotForm");
    const chatbotInput = document.getElementById("chatbotInput");

    const chatbotSuggestions = document.getElementById("chatbotSuggestions");

    const backToTop = document.getElementById("backToTop");


    /* =====================================================
       1. MỞ / ĐÓNG BẢNG LIÊN LẠC
    ===================================================== */

    function openContactOptions() {

        contactOptions.classList.add("active");

        contactMainBtn.classList.add("active");

        contactMainBtn.setAttribute("aria-expanded", "true");

        contactMainBtn.setAttribute(
            "aria-label",
            "Đóng các kênh liên lạc"
        );

    }


    function closeContactMenu() {

        contactOptions.classList.remove("active");

        contactMainBtn.classList.remove("active");

        contactMainBtn.setAttribute("aria-expanded", "false");

        contactMainBtn.setAttribute(
            "aria-label",
            "Mở các kênh liên lạc"
        );

    }


    contactMainBtn.addEventListener("click", function () {

        const isOpen = contactOptions.classList.contains("active");

        if (isOpen) {

            closeContactMenu();

        } else {

            openContactOptions();

        }

    });


    closeContactOptions.addEventListener("click", function () {

        closeContactMenu();

    });


    /* =====================================================
       2. MỞ / ĐÓNG CHATBOT
    ===================================================== */

    function openChatbot() {

        chatbotWindow.classList.add("active");

        chatbotWindow.setAttribute("aria-hidden", "false");

        closeContactMenu();

        setTimeout(function () {

            chatbotInput.focus();

            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        }, 250);

    }


    function closeChatbot() {

        chatbotWindow.classList.remove("active");

        chatbotWindow.setAttribute("aria-hidden", "true");

    }


    openChatbotBtn.addEventListener("click", function () {

        openChatbot();

    });


    closeChatbotBtn.addEventListener("click", function () {

        closeChatbot();

    });


    /* =====================================================
       3. NHẬN BIẾT CÁC CÂU HỎI TIẾNG VIỆT
    ===================================================== */

    function normalizeText(text) {

        return text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .toLowerCase()
            .trim();

    }


    /* =====================================================
       4. DỮ LIỆU SẢN PHẨM RELAXCARE

       Đồng bộ với các sản phẩm trong index.html của bạn.
    ===================================================== */

    const products = [

        {
            name: "Máy massage cầm tay RelaxCare",

            price: "1.290.000đ",

            description: "Phù hợp để massage thư giãn tại nhà, có 3 chế độ và 6 đầu thay thế."
        },

        {
            name: "Máy massage chân RelaxCare",

            price: "2.120.000đ",

            description: "Hỗ trợ thư giãn đôi chân, kết hợp day huyệt và chức năng hồng ngoại."
        },

        {
            name: "Máy massage bụng RelaxCare",

            price: "1.690.000đ",

            description: "Thiết kế dạng đai massage, có chức năng massage và chườm ấm."
        },

        {
            name: "Dầu nóng massage RelaxCare 100ml",

            price: "149.000đ",

            description: "Sản phẩm massage thảo mộc với gừng, quế, bạc hà và long não."
        },

        {
            name: "Cao dán giảm đau thảo dược RelaxCare",

            price: "119.000đ",

            description: "Hộp 10 miếng, dùng theo hướng dẫn trên bao bì."
        }

    ];


    /* =====================================================
       5. TẠO TIN NHẮN AN TOÀN
    ===================================================== */

    function addMessage(text, sender) {

        const message = document.createElement("div");

        message.className = "chat-message " +
            (sender === "user" ? "user-message" : "bot-message");


        if (sender !== "user") {

            const avatar = document.createElement("div");

            avatar.className = "message-avatar";

            avatar.textContent = "🌿";

            message.appendChild(avatar);

        }


        const content = document.createElement("div");

        content.className = "message-content";


        const bubble = document.createElement("div");

        bubble.className = "message-bubble";


        /*
          Dùng textContent để tránh đưa nội dung khách nhập
          trực tiếp vào HTML.
        */

        bubble.textContent = text;


        const time = document.createElement("span");

        time.className = "message-time";

        time.textContent = sender === "user"
            ? "Bạn"
            : "Trợ lý RelaxCare";


        content.appendChild(bubble);

        content.appendChild(time);

        message.appendChild(content);


        chatbotMessages.appendChild(message);

        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    }


    /* =====================================================
       6. HIỆU ỨNG CHATBOT ĐANG SOẠN TIN NHẮN
    ===================================================== */

    function showTyping() {

        const wrapper = document.createElement("div");

        wrapper.className = "chat-message bot-message";

        wrapper.id = "chatbotTyping";


        const avatar = document.createElement("div");

        avatar.className = "message-avatar";

        avatar.textContent = "🌿";


        const typing = document.createElement("div");

        typing.className = "typing-indicator";


        for (let i = 0; i < 3; i++) {

            const dot = document.createElement("span");

            typing.appendChild(dot);

        }


        wrapper.appendChild(avatar);

        wrapper.appendChild(typing);

        chatbotMessages.appendChild(wrapper);

        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    }


    function hideTyping() {

        const typing = document.getElementById("chatbotTyping");

        if (typing) {

            typing.remove();

        }

    }


    /* =====================================================
       7. HỆ THỐNG TRẢ LỜI TỰ ĐỘNG
    ===================================================== */

    function getBotReply(question) {

        const q = normalizeText(question);


        /* Chào hỏi */

        if (
            q.includes("xin chao") ||
            q.includes("chao ban") ||
            q === "hello" ||
            q === "hi" ||
            q.includes("alo")
        ) {

            return "Xin chào bạn! 🌿 Mình là trợ lý RelaxCare. Bạn muốn tìm hiểu về sản phẩm, giá bán, bảo hành hay vận chuyển?";

        }


        /* Hỏi về giá */

        if (
            q.includes("gia") ||
            q.includes("bao nhieu") ||
            q.includes("bang gia") ||
            q.includes("gia tien")
        ) {

            return "Bảng giá sản phẩm RelaxCare hiện tại:\n\n" +

                products.map(function (product, index) {

                    return (index + 1) + ". " +
                        product.name + ": " +
                        product.price;

                }).join("\n\n") +

                "\n\nBạn có thể vào mục Sản phẩm để tìm hiểu thêm nhé!";

        }


        /* Máy massage cầm tay */

        if (
            q.includes("cam tay") ||
            q.includes("may massage tay") ||
            q.includes("massage co vai") ||
            q.includes("massage vai gay")
        ) {

            return "🌿 Máy massage cầm tay RelaxCare\n\n" +

                "Giá tham khảo trên website: 1.290.000đ.\n\n" +

                products[0].description +

                "\n\nBạn có thể xem thêm thông tin tại trang Sản phẩm.";

        }


        /* Máy massage chân */

        if (
            q.includes("massage chan") ||
            q.includes("may massage chan") ||
            q.includes("dau chan")
        ) {

            return "🌿 Máy massage chân RelaxCare\n\n" +

                "Giá tham khảo trên website: 2.120.000đ.\n\n" +

                products[1].description +

                "\n\nNếu bạn có bệnh lý ở chân hoặc rối loạn tuần hoàn, hãy hỏi chuyên gia y tế trước khi sử dụng.";

        }


        /* Máy massage bụng */

        if (
            q.includes("massage bung") ||
            q.includes("may massage bung") ||
            q.includes("dai massage")
        ) {

            return "🌿 Máy massage bụng RelaxCare\n\n" +

                "Giá tham khảo trên website: 1.690.000đ.\n\n" +

                products[2].description +

                "\n\nBạn vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng.";

        }


        /* Dầu nóng */

        if (
            q.includes("dau nong") ||
            q.includes("dau massage") ||
            q.includes("dau thao moc")
        ) {

            return "🌿 Dầu nóng massage RelaxCare 100ml\n\n" +

                "Giá tham khảo trên website: 149.000đ.\n\n" +

                products[3].description +

                "\n\nHãy thử trên một vùng da nhỏ trước khi sử dụng, tránh vùng da tổn thương và ngừng dùng nếu có kích ứng.";

        }


        /* Cao dán */

        if (
            q.includes("cao dan") ||
            q.includes("mieng dan") ||
            q.includes("mieng dan giam dau")
        ) {

            return "🌿 Cao dán giảm đau thảo dược RelaxCare\n\n" +

                "Giá tham khảo trên website: 119.000đ/hộp 10 miếng.\n\n" +

                products[4].description +

                "\n\nVui lòng đọc kỹ hướng dẫn và các cảnh báo trên bao bì trước khi sử dụng.";

        }


        /* Chính sách bảo hành */

        if (
            q.includes("bao hanh") ||
            q.includes("doi tra") ||
            q.includes("doi moi") ||
            q.includes("loi san pham")
        ) {

            return "🛡️ Chính sách bảo hành RelaxCare:\n\n" +

                "• Bảo hành 12 tháng theo chính sách áp dụng cho sản phẩm.\n\n" +

                "• Chính sách 1 đổi 1 trong 30 ngày được giới thiệu trên website.\n\n" +

                "Để biết điều kiện cụ thể, bạn vui lòng liên hệ nhân viên RelaxCare qua Zalo hoặc Messenger nhé!";

        }


        /* Vận chuyển */

        if (
            q.includes("van chuyen") ||
            q.includes("giao hang") ||
            q.includes("freeship") ||
            q.includes("phi ship") ||
            q.includes("phi giao hang")
        ) {

            return "🚚 Chính sách vận chuyển RelaxCare:\n\n" +

                "Website giới thiệu chương trình miễn phí vận chuyển cho đơn hàng từ 699.000đ.\n\n" +

                "Bạn nên xác nhận điều kiện áp dụng, khu vực giao hàng và thời gian nhận hàng với nhân viên trước khi đặt mua nhé!";

        }


        /* Đặt hàng */

        if (
            q.includes("dat hang") ||
            q.includes("mua hang") ||
            q.includes("mua san pham") ||
            q.includes("cach mua")
        ) {

            return "🛍️ Bạn có thể đặt hàng theo các bước sau:\n\n" +

                "1. Vào mục Sản phẩm trên website.\n\n" +

                "2. Chọn sản phẩm muốn mua.\n\n" +

                "3. Kiểm tra giá và thông tin sản phẩm.\n\n" +

                "4. Làm theo hướng dẫn đặt hàng trên website.\n\n" +

                "Nếu cần hỗ trợ trực tiếp, bạn hãy chọn Zalo hoặc Messenger trong bảng liên lạc nhé!";

        }


        /* Địa chỉ */

        if (
            q.includes("dia chi") ||
            q.includes("cua hang o dau") ||
            q.includes("o dau") ||
            q.includes("cua hang")
        ) {

            return "📍 Địa chỉ được giới thiệu trên website RelaxCare:\n\n" +

                "Số 150/8 Nguyễn Duy Cung, Phường 12, Gò Vấp, TP.HCM.\n\n" +

                "Bạn nên liên hệ trước với cửa hàng để xác nhận giờ hoạt động và khả năng tiếp nhận khách nhé!";

        }


        /* Liên hệ nhân viên */

        if (
            q.includes("nhan vien") ||
            q.includes("tu van vien") ||
            q.includes("nguoi that") ||
            q.includes("lien he") ||
            q.includes("hotline") ||
            q.includes("so dien thoai")
        ) {

            return "💚 RelaxCare luôn sẵn sàng hỗ trợ bạn!\n\n" +

                "Bạn có thể chọn Zalo hoặc Messenger trong bảng liên lạc để trao đổi trực tiếp với cửa hàng.\n\n" +

                "Lưu ý: Bạn hãy kiểm tra thông tin liên hệ chính thức trước khi gửi thông tin cá nhân hoặc đặt hàng.";

        }


        /* Hỏi công dụng, sức khỏe */

        if (
            q.includes("chua benh") ||
            q.includes("tri benh") ||
            q.includes("thoat vi dia dem") ||
            q.includes("thoai hoa cot song") ||
            q.includes("dieu tri") ||
            q.includes("chan doan")
        ) {

            return "🌿 Các sản phẩm RelaxCare hướng đến nhu cầu massage và thư giãn tại nhà, không thay thế việc khám hoặc điều trị y tế.\n\n" +

                "Nếu bạn đang có bệnh lý hoặc đau kéo dài, hãy hỏi chuyên gia y tế để được hướng dẫn phù hợp nhé!";

        }


        /* Cảm ơn */

        if (
            q.includes("cam on") ||
            q.includes("thanks") ||
            q.includes("thank you")
        ) {

            return "RelaxCare rất vui được hỗ trợ bạn! 💚 Nếu cần tìm hiểu thêm về sản phẩm, bạn cứ gửi câu hỏi cho mình nhé.";

        }


        /* Trả lời mặc định */

        return "Cảm ơn bạn đã quan tâm đến RelaxCare! 🌿\n\n" +

            "Mình chưa tìm thấy câu trả lời phù hợp với câu hỏi này.\n\n" +

            "Bạn có thể hỏi mình về:\n\n" +

            "• Giá các sản phẩm massage.\n\n" +

            "• Máy massage cầm tay, chân, bụng.\n\n" +

            "• Dầu nóng và cao dán.\n\n" +

            "• Chính sách bảo hành, vận chuyển.\n\n" +

            "Hoặc chọn Zalo/Messenger để được nhân viên hỗ trợ trực tiếp.";

    }


    /* =====================================================
       8. GỬI CÂU HỎI VÀ NHẬN CÂU TRẢ LỜI
    ===================================================== */

    let replyTimer = null;


    function sendMessage(text) {

        const question = text.trim();

        if (!question) {

            return;

        }


        /* Hiện tin nhắn người dùng */

        addMessage(question, "user");


        /* Xóa nội dung ô nhập */

        chatbotInput.value = "";


        /* Ẩn câu hỏi gợi ý sau khi bắt đầu trò chuyện */

        chatbotSuggestions.style.display = "none";


        /* Hiệu ứng đang nhập */

        showTyping();


        /* Tạo câu trả lời */

        replyTimer = setTimeout(function () {

            hideTyping();

            const reply = getBotReply(question);

            addMessage(reply, "bot");

        }, 650);

    }


    chatbotForm.addEventListener("submit", function (event) {

        event.preventDefault();

        sendMessage(chatbotInput.value);

    });


    /* =====================================================
       9. BẤM CÂU HỎI GỢI Ý
    ===================================================== */

    chatbotSuggestions.addEventListener("click", function (event) {

        const button = event.target.closest("button[data-question]");

        if (!button) {

            return;

        }


        const question = button.dataset.question;

        sendMessage(question);

    });


    /* =====================================================
       10. NÚT CUỘN LÊN ĐẦU TRANG
    ===================================================== */

    function updateBackToTop() {

        if (window.scrollY > 250) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    }


    window.addEventListener("scroll", updateBackToTop);

    updateBackToTop();


    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /* =====================================================
       11. NHẤN ESC ĐỂ ĐÓNG GIAO DIỆN
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeContactMenu();

            closeChatbot();

        }

    });


    console.log("RelaxCare: Thanh liên lạc và chatbot đã sẵn sàng.");

});
</script>
<script src="js/cart.js"></script>
</body>
</html>
