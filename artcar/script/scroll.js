function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 80);
    }
  }
  
  // Captures click events of all <a> elements with href starting with #
  $(document).on('click', 'a[href^="#"]', function(event) {
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });
  
  
  window.setTimeout(offsetAnchor, );
  
  