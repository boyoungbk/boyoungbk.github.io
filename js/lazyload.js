document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.getElementsByClassName(".lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

function isPassive() {
  var supportsPassiveOption = false;
  try {
      addEventListener("test", null, Object.defineProperty({}, 'passive', {
          get: function () {
              supportsPassiveOption = true;
          }
      }));
  } catch(e) {}
  return supportsPassiveOption;
}

document.addEventListener(
  "touchmove",
  function(e) {
    e.preventDefault();
  },
  isPassive()
    ? {
        capture: false,
        passive: false
      }
    : false
);