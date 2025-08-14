document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add animation to team members and features on scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe team members
  document.querySelectorAll(".team-member").forEach((member) => {
    member.style.opacity = "0";
    member.style.transform = "translateY(20px)";
    member.style.transition = "all 0.5s ease-out";
    observer.observe(member);
  });

  // Observe feature items
  document.querySelectorAll(".feature-item").forEach((feature) => {
    feature.style.opacity = "0";
    feature.style.transform = "translateY(20px)";
    feature.style.transition = "all 0.5s ease-out";
    observer.observe(feature);
  });
});
