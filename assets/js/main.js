/**
 * ============================================================================
 * BONGO TANBO TRAVELS - HOMEPAGE JAVASCRIPT
 * Built with Bootstrap 5 (Latest Stable 5.3.3)
 * Clean, Modular, Fully Documented Vanilla JavaScript
 * ============================================================================
 *
 * TABLE OF CONTENTS:
 * 1. DOMContentLoaded Initialization
 * 2. Sticky Navbar on Scroll
 * 3. Bootstrap 5 Hero Slider (Carousel) with Static Images
 * 4. Header Address Ticker Animation
 * 5. Fullscreen Search Modal Controls
 * 6. Mobile Offcanvas Drawer & Nested Dropdowns
 * 7. Animated Number Counter for Stats & Experience
 * 8. Back-To-Top Button Controller
 * 9. Booking Filter Form Validation & Interaction
 */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* ==========================================================================
     1. STICKY NAVBAR ON SCROLL
     Detects user scrolling. When scrolled past 150px, the header is pinned 
     to the top of the viewport with a subtle slide-down shadow animation.
     ========================================================================== */
  const headerNav = document.getElementById("headerNav");
  const backToTopBtn = document.getElementById("backTopBtn");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Sticky Navbar Toggle
    if (headerNav) {
      if (scrollPosition > 160) {
        headerNav.classList.add("is-sticky");
      } else {
        headerNav.classList.remove("is-sticky");
      }
    }

    // Back to Top Button Toggle
    if (backToTopBtn) {
      if (scrollPosition > 450) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }
  });

  /* ==========================================================================
     2. BOOTSTRAP 5 HERO SLIDER (CAROUSEL) WITH STATIC IMAGES
     Uses Bootstrap 5's Carousel API with cross-fade transition and custom
     arrows. The user requested static images instead of video backgrounds.
     ========================================================================== */
  const heroCarouselElement = document.getElementById("heroCarousel");

  if (heroCarouselElement && typeof bootstrap !== "undefined") {
    // Initialize Bootstrap 5 Carousel
    const heroCarousel = new bootstrap.Carousel(heroCarouselElement, {
      interval: 6000, // 6 seconds per slide
      pause: "hover", // Pauses autoplay when mouse hovers over slide
      ride: "carousel", // Autoplays on page load
      touch: true, // Enables swipe on touch-screen devices
      wrap: true, // Loops continuously
    });

    // Custom Previous Button
    const heroPrevBtn = document.getElementById("heroPrevBtn");
    if (heroPrevBtn) {
      heroPrevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        heroCarousel.prev();
      });
    }

    // Custom Next Button
    const heroNextBtn = document.getElementById("heroNextBtn");
    if (heroNextBtn) {
      heroNextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        heroCarousel.next();
      });
    }

    // Re-trigger heading animation on each slide change
    heroCarouselElement.addEventListener("slide.bs.carousel", function (event) {
      const activeSlide = event.relatedTarget;
      const title = activeSlide.querySelector(".hero-title");
      if (title) {
        title.style.animation = "none";
        // Trigger DOM reflow to restart CSS animation
        void title.offsetWidth;
        title.style.animation = "fadeInUp 0.8s ease forwards";
      }
    });
  }

  /* ==========================================================================
     3. HEADER ADDRESS TICKER (FUKUOKA & DHAKA)
     Alternates between the Japan Headquarters and Bangladesh Liaison Office
     addresses in the top navigation bar.
     ========================================================================== */
  const tickerInner = document.getElementById("addressTickerInner");
  if (tickerInner) {
    let currentAddress = 0; // 0 = Fukuoka, 1 = Dhaka
    const addressHeight = 20; // 20px per item

    setInterval(function () {
      currentAddress = currentAddress === 0 ? 1 : 0;
      tickerInner.style.transform = `translateY(-${currentAddress * addressHeight}px)`;
    }, 4000);
  }

  /* ==========================================================================
     4. FULLSCREEN SEARCH MODAL CONTROLS
     Opens a sleek backdrop when the search magnifying glass icon is clicked.
     Can be dismissed via the close button (×) or the Escape key.
     ========================================================================== */
  const searchModal = document.getElementById("searchModal");
  const searchOpenBtn = document.getElementById("searchOpenBtn");
  const searchCloseBtn = document.getElementById("searchCloseBtn");
  const searchInput = document.getElementById("searchInput");

  function openSearch() {
    if (searchModal) {
      searchModal.classList.add("is-open");
      document.body.style.overflow = "hidden"; // Prevent background scroll
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 300);
      }
    }
  }

  function closeSearch() {
    if (searchModal) {
      searchModal.classList.remove("is-open");
      document.body.style.overflow = ""; // Restore background scroll
    }
  }

  if (searchOpenBtn) searchOpenBtn.addEventListener("click", openSearch);
  if (searchCloseBtn) searchCloseBtn.addEventListener("click", closeSearch);

  // Close search with ESC key
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      searchModal &&
      searchModal.classList.contains("is-open")
    ) {
      closeSearch();
    }
  });

  /* ==========================================================================
     5. MOBILE OFFCANVAS DRAWER & NESTED ACCORDION DROPDOWNS
     Provides a clean slide-out menu on tablets & mobile phones.
     ========================================================================== */
  const mobileOffcanvas = document.getElementById("mobileOffcanvas");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileToggleBtn = document.getElementById("mobileToggleBtn");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");

  function openMobileMenu() {
    if (mobileOffcanvas && mobileOverlay) {
      mobileOffcanvas.classList.add("is-open");
      mobileOverlay.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
  }

  function closeMobileMenu() {
    if (mobileOffcanvas && mobileOverlay) {
      mobileOffcanvas.classList.remove("is-open");
      mobileOverlay.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  }

  if (mobileToggleBtn)
    mobileToggleBtn.addEventListener("click", openMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener("click", closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileMenu);

  // Mobile submenu accordion toggle
  const mobileDropdownTriggers = document.querySelectorAll(
    ".mobile-dropdown-toggle",
  );
  mobileDropdownTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      const parentLi = this.parentElement;
      const targetSubmenu = parentLi.querySelector(".mobile-submenu");
      const chevronIcon = this.querySelector("i");

      if (targetSubmenu) {
        targetSubmenu.classList.toggle("show");
        if (chevronIcon) {
          chevronIcon.style.transform = targetSubmenu.classList.contains("show")
            ? "rotate(180deg)"
            : "rotate(0deg)";
        }
      }
    });
  });

  /* ==========================================================================
     6. ANIMATED NUMBER COUNTERS (INTERSECTION OBSERVER)
     Counts up figures when elements scroll into view (e.g. 12+ Years Experience).
     ========================================================================== */
  const counterElements = document.querySelectorAll(".counter-value");

  if ("IntersectionObserver" in window && counterElements.length > 0) {
    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const target = entry.target;
            const countTo = parseInt(target.getAttribute("data-count"), 10);
            const duration = 1800; // 1.8 seconds animation
            const stepTime = 30;
            const totalSteps = duration / stepTime;
            let currentStep = 0;

            const timer = setInterval(function () {
              currentStep++;
              const progress = currentStep / totalSteps;
              const currentVal = Math.round(countTo * progress);
              target.textContent =
                currentVal < 10 && countTo >= 10
                  ? "0" + currentVal
                  : currentVal;

              if (currentStep >= totalSteps) {
                target.textContent = countTo;
                clearInterval(timer);
              }
            }, stepTime);

            obs.unobserve(target); // Only animate once
          }
        });
      },
      { threshold: 0.3 },
    );

    counterElements.forEach((el) => observer.observe(el));
  }

  /* ==========================================================================
     7. BACK-TO-TOP BUTTON SMOOTH SCROLL
     Returns user smoothly to top of webpage when clicked.
     ========================================================================== */
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* ==========================================================================
     8. BOOKING FILTER FORM HELPER
     Sets sensible departure dates and handles the filter submission.
     ========================================================================== */
  const datePickerInput = document.getElementById("departureDatePicker");
  if (datePickerInput) {
    // Set tomorrow as minimum selectable date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    datePickerInput.min = `${yyyy}-${mm}-${dd}`;
    datePickerInput.value = `${yyyy}-${mm}-${dd}`;
  }

  const bookingForm = document.getElementById("heroBookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const destination =
        this.elements["destination"]?.value || "all destinations";
      const duration = this.elements["duration"]?.value || "any duration";
      const date = this.elements["date"]?.value || "preferred date";

      alert(
        `Search parameters selected:\n` +
          `• Destination: ${destination}\n` +
          `• Duration: ${duration}\n` +
          `• Departure: ${date}\n\n` +
          `Redirecting to available tailored packages for Bongo Tanbo Travels!`,
      );
    });
  }
});
