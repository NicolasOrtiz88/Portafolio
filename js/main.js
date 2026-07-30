/* ============================================
   NICOLÁS ORTIZ NUÑEZ — PORTAFOLIO
   JavaScript — Interacciones & Animaciones
   ============================================ */

(function () {
  "use strict";

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

  // ─── Smooth scroll for all anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ─── Active nav link highlight ───
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-links a");

  function highlightNav() {
    var scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.style.color = "";
          if (link.getAttribute("href") === "#" + id) {
            link.style.color = "var(--brand-400)";
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav, { passive: true });

})();
