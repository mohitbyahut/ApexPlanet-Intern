document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
  // Close mobile menu when a link is clicked
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.remove("open"));
  });

  // --- Header Style on Scroll ---
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- Active Nav Link Highlighting ---
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a.nav-link");

  const activateNavLink = () => {
    let current = "home";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 70) {
        // Adjusted offset for header height
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", activateNavLink);
  activateNavLink(); // Initial call

  // --- ScrollReveal Animations ---
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 1000,
    delay: 200,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    reset: false,
  });

  sr.reveal(".reveal-up");
  sr.reveal(".reveal-left", { origin: "left" });
  sr.reveal(".reveal-right", { origin: "right" });
  sr.reveal(".reveal-card", { interval: 200 });

  // --- Skill Bars Animation ---
  const skillItems = document.querySelectorAll(".skill-item");
  const animateSkillBars = () => {
    skillItems.forEach((item) => {
      const bar = item.querySelector(".skill-bar-fill");
      const rect = item.getBoundingClientRect();
      // Animate when the top of the skill item is in the viewport
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
      }
    });
  };

  window.addEventListener("scroll", animateSkillBars);
  animateSkillBars(); // Animate on load if visible

  // --- Scroll to Top Button ---
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // --- Dynamic Year in Footer ---
  document.getElementById("year").textContent = new Date().getFullYear();

  // --- Form Submission Simulation ---
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // In a real app, you'd send this to a server.
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.textContent = "Message Sent!";
    submitButton.classList.add("success");

    setTimeout(() => {
      submitButton.textContent = "Send Message";
      submitButton.classList.remove("success");
      this.reset();
    }, 3000);
  });
});
