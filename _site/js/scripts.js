  // ===== AOS Init =====
    AOS.init({
      once: true, // chỉ animate 1 lần khi scroll
    });

    // ===== Parallax Hero =====
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.hero__bg');
      if (parallax) {
        parallax.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
      }
    });

    // ===== Swiper Init cho từng gallery tab =====
    const swiperProduct = new Swiper('.gallery-product', {
      loop: true,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.gallery-product .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.gallery-product .swiper-button-next',
        prevEl: '.gallery-product .swiper-button-prev',
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
    const swiperAccessory = new Swiper('.gallery-accessory', {
      loop: true,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.gallery-accessory .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.gallery-accessory .swiper-button-next',
        prevEl: '.gallery-accessory .swiper-button-prev',
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
    const swiperInstall = new Swiper('.gallery-install', {
      loop: true,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.gallery-install .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.gallery-install .swiper-button-next',
        prevEl: '.gallery-install .swiper-button-prev',
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });

    // ===== Tab chuyển gallery =====
    const tabButtons = document.querySelectorAll('.tab-btn');
    const swipers = document.querySelectorAll('.swiper-container');
    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Bỏ class active cho tất cả button
        tabButtons.forEach((b) => b.classList.remove('active'));
        // Thêm active cho button vừa click
        btn.classList.add('active');
        const target = btn.getAttribute('data-target');
        // Ẩn hết swiper container
        swipers.forEach((sw) => {
          sw.classList.remove('active');
        });
        // Hiển thị container tương ứng
        const el = document.querySelector(`.${target}`);
        if (el) {
          el.classList.add('active');
        }
      });
    });

    // ===== Color Swatch Interaction =====
    const swatches = document.querySelectorAll('.swatch');
    const mainImg = document.getElementById('main-product-img');
    swatches.forEach((swatch) => {
      swatch.addEventListener('click', function () {
        swatches.forEach((s) => s.classList.remove('active'));
        this.classList.add('active');
        const imgUrl = this.getAttribute('data-img');
        if (mainImg) {
          mainImg.style.opacity = 0;
          setTimeout(() => {
            mainImg.src = imgUrl;
            mainImg.style.opacity = 1;
          }, 200);
        }
      });
    });

    // ===== Accordion FAQ =====
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach((header) => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = header.classList.contains('active');
        // Đóng tất cả content đang mở
        accordions.forEach((h) => {
          h.classList.remove('active');
          if (h.nextElementSibling) {
            h.nextElementSibling.style.display = 'none';
          }
        });
        // Nếu chưa active, mở content này
        if (!isActive) {
          header.classList.add('active');
          if (content) {
            content.style.display = 'block';
          }
        }
      });
    });

    // ===== Accordion Thông tin thêm =====
    const infoHeaders = document.querySelectorAll('.info-header');
    infoHeaders.forEach((header) => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = header.classList.contains('active');
        // Đóng tất cả content đang mở
        infoHeaders.forEach((h) => {
          h.classList.remove('active');
          if (h.nextElementSibling) {
            h.nextElementSibling.style.display = 'none';
          }
        });
        // Nếu chưa active, mở content này
        if (!isActive) {
          header.classList.add('active');
          if (content) {
            content.style.display = 'block';
          }
        }
      });
    });

    // ===== Smooth Scroll cho menu =====
   document.querySelectorAll('.navbar nav a').forEach((link) => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    // Chỉ preventDefault nếu là link nội bộ bắt đầu bằng "#"
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const yOffset = -70;
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});


    // ===== Mobile Menu Toggle =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('.navbar nav ul');
    menuToggle.addEventListener('click', () => {
      if (navUl.style.display === 'flex' || navUl.style.display === '') {
        navUl.style.display = 'none';
      } else {
        navUl.style.display = 'flex';
        navUl.style.flexDirection = 'column';
        navUl.style.alignItems = 'center';
        navUl.style.gap = '10px';
        navUl.style.backgroundColor = 'rgba(255,255,255,0.95)';
        navUl.style.position = 'absolute';
        navUl.style.top = '60px';
        navUl.style.left = '0';
        navUl.style.width = '100%';
        navUl.style.padding = '20px 0';
      }
    });
// ==================================
// CUSTOMIZATION SECTION - COLOR SWATCH INTERACTION
// ==================================
const colorSwatches = document.querySelectorAll('.page-home .swatch');
const productMainImage = document.getElementById('product-color-image');

if (colorSwatches && productMainImage) {
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            // Xóa class 'active' khỏi tất cả swatch
            colorSwatches.forEach(s => s.classList.remove('active'));
            // Thêm class 'active' cho swatch vừa được click
            this.classList.add('active');
            
            // Lấy đường dẫn ảnh mới từ thuộc tính data-image
            const newImageSrc = this.getAttribute('data-image');
            
            // Hiệu ứng mờ dần ảnh cũ
            productMainImage.style.opacity = '0';
            
            // Sau khi ảnh mờ, đổi nguồn ảnh và làm nó hiện ra
            setTimeout(() => {
                productMainImage.src = newImageSrc;
                productMainImage.alt = `Bồn tắm acrylic màu ${this.getAttribute('title')}`; // Cập nhật alt text cho SEO
                productMainImage.style.opacity = '1';
            }, 400); // Thời gian phải khớp với transition trong CSS
        });
    });
}
// ==================================
// FAQ ACCORDION
// ==================================
const faqItems = document.querySelectorAll('.page-home .faq-item');

if (faqItems) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            // Kiểm tra xem item hiện tại có đang active không
            const isActive = question.classList.contains('active');
            
            // Đóng tất cả các câu trả lời khác
            faqItems.forEach(otherItem => {
                otherItem.querySelector('.faq-question').classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // Nếu item hiện tại chưa active, thì mở nó ra
            if (!isActive) {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
}