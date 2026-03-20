/* ========================================
   PACKING MASTER - Main JavaScript
   Advanced Animations Engine
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Page Loader ----
  const loader = document.querySelector('.page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('loaded'), 400);
    });
    // Fallback: hide loader after 3s max
    setTimeout(() => loader.classList.add('loaded'), 3000);
  }

  // ---- Scroll Progress Bar ----
  const scrollProgress = document.querySelector('.scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      scrollProgress.style.transform = `scaleX(${progress})`;
    }, { passive: true });
  }

  // ---- Mobile Navigation ----
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Sticky Header with Shrink ----
  const header = document.querySelector('.header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        header.style.height = '100px';
      } else {
        header.style.boxShadow = 'none';
        header.style.height = '120px';
      }
      lastScroll = scrollY;
    }, { passive: true });
  }

  // ---- Scroll Reveal (Intersection Observer) ----
  const revealElements = document.querySelectorAll('[data-animate]');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show everything
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // ---- Staggered Children Animation ----
  const staggerContainers = document.querySelectorAll('[data-stagger]');

  if (staggerContainers.length > 0 && 'IntersectionObserver' in window) {
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.children;
          Array.from(children).forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.12}s`;
            child.classList.add('is-visible');
            child.style.opacity = '';
            child.style.transform = '';
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    staggerContainers.forEach(container => {
      Array.from(container.children).forEach(child => {
        if (!child.hasAttribute('data-animate')) {
          child.style.opacity = '0';
          child.style.transform = 'translateY(40px)';
          child.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
        }
      });
      staggerObserver.observe(container);
    });
  }

  // ---- Image Reveal Animation ----
  const imgReveals = document.querySelectorAll('.img-reveal');
  if (imgReveals.length > 0 && 'IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          imgObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    imgReveals.forEach(el => imgObserver.observe(el));
  }

  // ---- Section Label Underline Animation ----
  const sectionLabels = document.querySelectorAll('.section-label');
  if (sectionLabels.length > 0 && 'IntersectionObserver' in window) {
    const labelObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          labelObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    sectionLabels.forEach(el => labelObserver.observe(el));
  }

  // ---- Parallax on Scroll ----
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.3;
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + scrollY) - scrollY;
        el.style.transform = `translateY(${offset * speed * -0.1}px)`;
      });
    }, { passive: true });
  }

  // ---- Tilt Effect on Cards ----
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ---- Counter Animation ----
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.counter);
          const suffix = entry.target.dataset.suffix || '';
          animateCounter(entry.target, 0, target, 2000, suffix);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el, start, end, duration, suffix) {
    const startTime = performance.now();
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(start + (end - start) * eased);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ---- Smooth Anchor Scroll with Offset ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Testimonials Carousel ----
  const carousel = document.querySelector('.testimonials-carousel');
  if (carousel) {
    const cards = carousel.querySelectorAll('.testimonial-card');
    const dots = carousel.querySelectorAll('.testimonials-carousel__dots button');
    const prevBtn = carousel.querySelector('.testimonials-carousel__prev');
    const nextBtn = carousel.querySelector('.testimonials-carousel__next');
    let current = 0;
    let autoTimer;

    function showSlide(index) {
      cards.forEach(c => c.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      current = (index + cards.length) % cards.length;
      cards[current].classList.add('active');
      dots[current].classList.add('active');
    }

    function startAuto() {
      autoTimer = setInterval(() => showSlide(current + 1), 5000);
    }

    function resetAuto() {
      clearInterval(autoTimer);
      startAuto();
    }

    prevBtn.addEventListener('click', () => { showSlide(current - 1); resetAuto(); });
    nextBtn.addEventListener('click', () => { showSlide(current + 1); resetAuto(); });
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { showSlide(i); resetAuto(); });
    });

    showSlide(0);
    startAuto();
  }

  // ---- FAQ Accordion ----
  document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ---- Contact Form ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = currentLang === 'pl' ? 'Wysyłanie...' : 'Sending...';
      btn.disabled = true;

      const formData = new FormData(contactForm);
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          btn.textContent = currentLang === 'pl' ? 'Wysłano!' : 'Sent!';
          btn.style.backgroundColor = '#145220';
          contactForm.reset();
        } else {
          btn.textContent = currentLang === 'pl' ? 'Błąd wysyłki' : 'Error';
          btn.style.backgroundColor = '#dc2626';
        }
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style.backgroundColor = '';
        }, 3000);
      })
      .catch(() => {
        btn.textContent = currentLang === 'pl' ? 'Błąd połączenia' : 'Connection error';
        btn.style.backgroundColor = '#dc2626';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style.backgroundColor = '';
        }, 3000);
      });
    });
  }

  // ---- Active Nav Link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header__nav a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Text Typing Effect (for elements with data-typing) ----
  const typingElements = document.querySelectorAll('[data-typing]');
  typingElements.forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    el.style.borderRight = '2px solid #4ADE80';
    let i = 0;
    const speed = parseInt(el.dataset.typing) || 50;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => { el.style.borderRight = 'none'; }, 1000);
      }
    }
    // Start typing when visible
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          type();
          obs.unobserve(el);
        }
      }, { threshold: 0.5 });
      obs.observe(el);
    } else {
      type();
    }
  });

});
