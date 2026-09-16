/* ============================================
   NICOLÁS ORTIZ NUÑEZ — PORTAFOLIO
   JavaScript — Interacciones & Animaciones
   ============================================ */

(function () {
  "use strict";

  // ─── Preloader / Pantalla de carga ───
  var preloader = document.getElementById("preloader");
  if (preloader) {
    document.body.classList.add("preloading");

    function dismissPreloader() {
      if (!preloader.classList.contains("fade-out")) {
        preloader.classList.add("fade-out");
        document.body.classList.remove("preloading");
        setTimeout(function () {
          preloader.style.display = "none";
        }, 650);
      }
    }

    if (document.readyState === "complete") {
      setTimeout(dismissPreloader, 350);
    } else {
      window.addEventListener("load", function () {
        setTimeout(dismissPreloader, 450);
      });
    }

    // Fallback de seguridad (máximo 1.8 segundos)
    setTimeout(dismissPreloader, 1800);
  }

  // ─── Navbar scroll effect ───
  const navbar = document.getElementById("navbar");
  let lastScroll = 0;

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    lastScroll = scrollY;
  }

  window.addEventListener("scroll", handleNavScroll, { passive: true });

  // ─── Mobile menu ───
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileClose = document.getElementById("mobileClose");

  function openMenu() {
    mobileMenu.style.display = "flex";
    // Trigger reflow to enable transition
    void mobileMenu.offsetWidth;
    mobileMenu.classList.add("open");
    mobileOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    mobileOverlay.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(function () {
      if (!mobileMenu.classList.contains("open")) {
        mobileMenu.style.display = "none";
      }
    }, 350);
  }

  navToggle.addEventListener("click", openMenu);
  mobileClose.addEventListener("click", closeMenu);
  mobileOverlay.addEventListener("click", closeMenu);

  // Close menu when clicking a link
  var mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // ─── Scroll animations (IntersectionObserver) ───
  var animatedElements = document.querySelectorAll(".animate-on-scroll");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "-40px 0px",
    }
  );

  animatedElements.forEach(function (el) {
    observer.observe(el);
  });

  // ─── Timeline animation ───
  var timeline = document.getElementById("timeline");
  if (timeline) {
    var timelineObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            timelineObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    timelineObserver.observe(timeline);
  }

  // ─── Project expand/collapse ───
  var expandBtns = document.querySelectorAll(".project-expand-btn");

  expandBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetId = btn.getAttribute("data-target");
      var target = document.getElementById(targetId);
      var isOpen = target.classList.contains("open");

      if (isOpen) {
        target.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.innerHTML = "▾ Ver aprendizajes y funcionalidades";
      } else {
        target.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        btn.innerHTML = "▴ Menos detalles";
      }
    });
  });

  // ─── Contact form ───
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var company = document.getElementById("company").value.trim();
      var message = document.getElementById("message").value.trim();

      var whatsappNumber = "573113597014"; 
      var whatsappText = "👋 Hola Nicolás, mi nombre es *" + name + "*.\n\n";
      
      if (company) {
        whatsappText += "Vengo de la empresa *" + company + "*.\n\n";
      }
      
      whatsappText += "Te escribo por lo siguiente:\n" + message + "\n\n";
      whatsappText += "Puedes contactarme a mi email: " + email;

      var whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappText);

      var submitBtn = contactForm.querySelector(".form-submit");
      var originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = "⏳ Abriendo WhatsApp...";
      submitBtn.disabled = true;

      setTimeout(function () {
        window.open(whatsappUrl, "_blank");
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
      }, 800);
    });
  }

  // ─── Smooth Scroll Engine (Suavizado de alta precisión) ───
  var activeScrollAnimation = null;

  // Curva de aceleración y frenado ultra suave (easeInOutQuart)
  function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  function smoothScrollTo(targetY, customDuration, onComplete) {
    // Si ya hay una animación en curso, se cancela para dar paso a la nueva
    if (activeScrollAnimation) {
      cancelAnimationFrame(activeScrollAnimation);
      activeScrollAnimation = null;
    }

    var startY = window.scrollY || window.pageYOffset;
    var maxScroll = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    ) - window.innerHeight;
    
    var clampedTargetY = Math.max(0, Math.min(Math.round(targetY), maxScroll));
    var distance = clampedTargetY - startY;

    if (Math.abs(distance) < 2) {
      window.scrollTo(0, clampedTargetY);
      if (typeof onComplete === "function") onComplete();
      return;
    }

    var absDist = Math.abs(distance);
    // Duración adaptativa: ni muy rápida en distancias largas ni muy lenta en distancias cortas
    var duration = customDuration || Math.min(Math.max(650, 520 + Math.sqrt(absDist) * 7.5), 1350);

    var startTime = null;
    var isCancelled = false;

    function cleanup() {
      window.removeEventListener("wheel", onUserInterruption);
      window.removeEventListener("touchstart", onUserInterruption);
      window.removeEventListener("keydown", onKeyInterruption);
    }

    function onUserInterruption() {
      isCancelled = true;
      if (activeScrollAnimation) {
        cancelAnimationFrame(activeScrollAnimation);
        activeScrollAnimation = null;
      }
      cleanup();
      if (typeof onComplete === "function") onComplete();
    }

    function onKeyInterruption(e) {
      var scrollKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
      if (scrollKeys.indexOf(e.keyCode) !== -1) {
        onUserInterruption();
      }
    }

    window.addEventListener("wheel", onUserInterruption, { passive: true, once: true });
    window.addEventListener("touchstart", onUserInterruption, { passive: true, once: true });
    window.addEventListener("keydown", onKeyInterruption, { passive: true, once: true });

    function step(currentTime) {
      if (isCancelled) return;
      if (startTime === null) startTime = currentTime;

      var elapsed = currentTime - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var easedProgress = easeInOutQuart(progress);

      var nextY = Math.round(startY + distance * easedProgress);
      window.scrollTo(0, nextY);

      if (progress < 1) {
        activeScrollAnimation = requestAnimationFrame(step);
      } else {
        window.scrollTo(0, clampedTargetY);
        activeScrollAnimation = null;
        cleanup();
        if (typeof onComplete === "function") onComplete();
      }
    }

    activeScrollAnimation = requestAnimationFrame(step);
  }

  function getSectionScrollPosition(targetElement) {
    if (!targetElement) return 0;
    if (targetElement.id === "hero") return 0;

    var navbar = document.getElementById("navbar");
    var navHeight = navbar ? navbar.offsetHeight : 64;
    var rect = targetElement.getBoundingClientRect();
    var currentScroll = window.scrollY || window.pageYOffset;
    var absoluteTop = rect.top + currentScroll;

    // Margen superior para que el encabezado no quede tapado por la barra
    return Math.max(0, Math.round(absoluteTop - navHeight - 16));
  }

  // ─── Active nav link highlight & update ───
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-links a");
  var mobileLinks = document.querySelectorAll(".mobile-menu a.mobile-link");

  function updateActiveNav(activeId) {
    if (!activeId) return;

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === "#" + activeId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    mobileLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === "#" + activeId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  function highlightNav() {
    var scrollPos = (window.scrollY || window.pageYOffset) + 140;

    if ((window.scrollY || window.pageYOffset) < 100) {
      updateActiveNav("hero");
      return;
    }

    var currentSectionId = "";
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = id;
      }
    });

    if (currentSectionId) {
      updateActiveNav(currentSectionId);
    }
  }

  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();

  // ─── Smooth scroll para todos los enlaces internos (#) ───
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (!href || href === "#") return;

      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        var targetId = href.replace("#", "");
        updateActiveNav(targetId);

        var targetY = getSectionScrollPosition(target);
        smoothScrollTo(targetY);
      }
    });
  });

  // Indicador de scroll de la sección Hero
  var scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function () {
      var journeySec = document.getElementById("journey") || document.getElementById("about");
      if (journeySec) {
        var targetY = getSectionScrollPosition(journeySec);
        smoothScrollTo(targetY);
      }
    });
  }

  // ─── Botón Volver Arriba (Back to Top) ───
  var backToTopBtn = document.getElementById("backToTop");
  var progressRingFill = document.getElementById("progressRingFill");
  var circumference = 2 * Math.PI * 20; // r = 20 => ~125.66px

  if (progressRingFill) {
    progressRingFill.style.strokeDasharray = circumference + " " + circumference;
    progressRingFill.style.strokeDashoffset = circumference;
  }

  function handleBackToTopScroll() {
    if (!backToTopBtn) return;
    var scrollY = window.scrollY || window.pageYOffset;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Aparece suavemente al hacer scroll hacia abajo (> 300px)
    if (scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }

    // Progreso circular acorde al scroll de toda la página
    if (progressRingFill && docHeight > 0) {
      var scrollPercent = Math.min(Math.max(scrollY / docHeight, 0), 1);
      var offset = circumference - (scrollPercent * circumference);
      progressRingFill.style.strokeDashoffset = offset;
    }
  }

  if (backToTopBtn) {
    window.addEventListener("scroll", handleBackToTopScroll, { passive: true });
    window.addEventListener("resize", handleBackToTopScroll, { passive: true });
    handleBackToTopScroll();

    backToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      backToTopBtn.classList.add("is-scrolling");

      updateActiveNav("hero");

      smoothScrollTo(0, null, function () {
        backToTopBtn.classList.remove("is-scrolling");
      });
    });
  }

})();
