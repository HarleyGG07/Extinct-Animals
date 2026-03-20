(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initMenuToggle();
    highlightActiveNav();
    initRevealAnimations();
    initCounters();
    initTimelineFilters();
    initAccordion();
    initContactForm();
  });

  function initMenuToggle() {
    var toggle = document.querySelector(".menu-toggle");
    var navLinks = document.querySelector(".nav-links");

    if (!toggle || !navLinks) {
      return;
    }

    function closeMenu() {
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (event) {
      if (!navLinks.contains(event.target) && !toggle.contains(event.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    });
  }

  function highlightActiveNav() {
    var currentPath = window.location.pathname.split("/").pop();
    var currentPage = currentPath || document.body.getAttribute("data-page") || "index.html";

    document.querySelectorAll(".nav-links a[data-page]").forEach(function (link) {
      var linkPage = link.getAttribute("data-page");
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  }

  function initRevealAnimations() {
    var revealItems = document.querySelectorAll("[data-reveal]");

    if (!revealItems.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach(function (item) {
        item.classList.add("revealed");
      });
      return;
    }

    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  function initCounters() {
    var counters = document.querySelectorAll("[data-counter]");

    if (!counters.length) {
      return;
    }

    function animateCounter(counter) {
      if (counter.getAttribute("data-animated") === "true") {
        return;
      }

      var target = Number(counter.getAttribute("data-counter"));
      var suffix = counter.getAttribute("data-suffix") || "";
      var duration = 1500;
      var startTime = performance.now();

      counter.setAttribute("data-animated", "true");

      function step(timestamp) {
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var current = Math.floor(progress * target);
        counter.textContent = String(current) + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counter.textContent = String(target) + suffix;
        }
      }

      requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
      return;
    }

    var counterObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  }

  function initTimelineFilters() {
    var buttons = document.querySelectorAll(".timeline-filter-btn");
    var cards = document.querySelectorAll(".timeline-card");

    if (!buttons.length || !cards.length) {
      return;
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-filter");

        buttons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        button.classList.add("active");

        cards.forEach(function (card) {
          var era = card.getAttribute("data-era");
          var shouldShow = filter === "all" || filter === era;
          card.classList.toggle("is-hidden", !shouldShow);
        });
      });
    });
  }

  function initAccordion() {
    var items = document.querySelectorAll(".accordion-item");

    if (!items.length) {
      return;
    }

    function closeItem(item) {
      var button = item.querySelector(".accordion-toggle");
      var content = item.querySelector(".accordion-content");

      item.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      content.style.maxHeight = "0px";
    }

    function openItem(item) {
      var button = item.querySelector(".accordion-toggle");
      var content = item.querySelector(".accordion-content");

      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      content.style.maxHeight = content.scrollHeight + "px";
    }

    items.forEach(function (item) {
      var button = item.querySelector(".accordion-toggle");
      button.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");

        items.forEach(closeItem);

        if (!isOpen) {
          openItem(item);
        }
      });
    });

    window.addEventListener("resize", function () {
      var opened = document.querySelector(".accordion-item.open");
      if (opened) {
        var content = opened.querySelector(".accordion-content");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  function initContactForm() {
    var form = document.getElementById("contactForm");

    if (!form) {
      return;
    }

    var successBox = document.getElementById("formSuccess");
    var fieldIds = ["fullName", "emailAddress", "subject", "message"];

    function setError(fieldId, message) {
      var errorEl = document.getElementById(fieldId + "Error");
      var inputEl = document.getElementById(fieldId);
      if (errorEl) {
        errorEl.textContent = message;
      }
      if (inputEl) {
        inputEl.setAttribute("aria-invalid", message ? "true" : "false");
      }
    }

    function validateField(fieldId) {
      var input = document.getElementById(fieldId);
      if (!input) {
        return true;
      }

      var value = input.value.trim();
      var isValid = true;
      var message = "";

      if (!value) {
        isValid = false;
        message = "This field is required.";
      } else if (fieldId === "emailAddress") {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailPattern.test(value)) {
          isValid = false;
          message = "Enter a valid email address.";
        }
      } else if (fieldId === "fullName" && value.length < 3) {
        isValid = false;
        message = "Name should be at least 3 characters.";
      } else if (fieldId === "subject" && value.length < 4) {
        isValid = false;
        message = "Subject should be at least 4 characters.";
      } else if (fieldId === "message" && value.length < 10) {
        isValid = false;
        message = "Message should be at least 10 characters.";
      }

      setError(fieldId, message);
      return isValid;
    }

    fieldIds.forEach(function (fieldId) {
      var input = document.getElementById(fieldId);
      if (!input) {
        return;
      }

      input.addEventListener("blur", function () {
        validateField(fieldId);
      });

      input.addEventListener("input", function () {
        if (input.getAttribute("aria-invalid") === "true") {
          validateField(fieldId);
        }
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var formIsValid = true;
      fieldIds.forEach(function (fieldId) {
        if (!validateField(fieldId)) {
          formIsValid = false;
        }
      });

      if (!formIsValid) {
        successBox.classList.add("hidden");
        return;
      }

      form.reset();
      fieldIds.forEach(function (fieldId) {
        setError(fieldId, "");
      });
      successBox.classList.remove("hidden");
    });
  }
})();

