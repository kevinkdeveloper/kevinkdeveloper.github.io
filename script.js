window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY; // Get the scroll position
    let header = document.querySelector('header');
  
    // Adjust the opacity based on the scroll position
    let opacity = Math.min(scrollPosition / 500, 0.7); // Limit max opacity to 0.7
    header.style.backgroundColor = `rgba(0, 0, 0, ${0.5 + opacity})`;
  });
  