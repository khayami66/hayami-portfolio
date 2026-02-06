// ========================================
// スクロール時のフェードインアニメーション
// ========================================
function initFadeIn() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

// ========================================
// モバイルナビゲーションの開閉
// ========================================
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // ナビリンクをクリックしたらメニューを閉じる
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
}

// ========================================
// スムーズスクロール（補助）
// ========================================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// ヘッダーのスクロール時の影
// ========================================
function initHeaderScroll() {
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
}

// ========================================
// 初期化
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initFadeIn();
  initMobileNav();
  initSmoothScroll();
  initHeaderScroll();
});
