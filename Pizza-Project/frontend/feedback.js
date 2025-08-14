document.addEventListener("DOMContentLoaded", function () {
  const feedbackForm = document.getElementById("feedbackForm");
  const starInputs = document.querySelectorAll(".star-rating input");
  let selectedRating = 0;

  // Handle star rating selection
  starInputs.forEach((input) => {
    input.addEventListener("change", function () {
      selectedRating = this.value;
    });
  });

  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const category = document.getElementById("category").value;
    const feedback = document.getElementById("feedback").value;
    const isAnonymous = document.getElementById("anonymous").checked;

    // Basic validation
    if (!name || !email || !category || !feedback) {
      alert("Please fill in all required fields");
      return;
    }

    if (selectedRating === 0) {
      alert("Please select a rating");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    alert(
      "Thank you for your feedback! Your input helps us improve our service."
    );

    // Clear the form
    feedbackForm.reset();
    selectedRating = 0;

    // Reset star colors
    document.querySelectorAll(".star-rating label").forEach((label) => {
      label.style.color = "#ccc";
    });
  });
});
