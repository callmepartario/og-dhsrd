// Check if the URL contains the section ID
const sectionID = window.location.hash.substring(1);
if (sectionID) {
  // Function to animate scrolling to the section with the specified ID
  function scrollToSection() {

    const section = document.getElementById(sectionID);
    if (section) {
      const currentScroll = window.pageYOffset;
      const targetScroll = currentScroll;
      const duration = 500; // Animation duration in milliseconds
      const startTime = performance.now();

      function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const scrollProgress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeOutCubic(scrollProgress);
        const scrollTo = currentScroll + (sectionOffset * easedProgress);

        window.scrollTo(0, scrollTo);

        if (elapsedTime < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }

      function easeOutCubic(t) {
        return (t - 1) * Math.pow(t, 2) + 1;
      }

      requestAnimationFrame(scrollAnimation);
    }
  }

  // Wait for the page to finish loading
  window.addEventListener("load", scrollToSection);
}