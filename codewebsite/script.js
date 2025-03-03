document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('slider');
  const afterImage = document.querySelector('.after');

  slider.addEventListener('input', function () {
    const value = this.value;
    afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
  });

  // Slideshow code:
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
    }

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    // Show current slide
    slides[slideIndex - 1].style.opacity = "1";

    // Change image every 5 seconds
    setTimeout(showSlides, 5000);
  }
});

