function preventDefault(e){
  e.preventDefault();
}

function disableScroll(){
  document.body.addEventListener('touchmove', preventDefault, { passive: false });
}
function enableScroll(){
  document.body.removeEventListener('touchmove', preventDefault);
}

(function (window, document) {
  const markers = document.querySelectorAll('mark');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.8
  });
  
  markers.forEach(mark => {
    observer.observe(mark);
  });
})(window, document);

document.body.addEventListener('touchstart', function(e) {
  if ( (e.touches.length > 1) || e.targetTouches.length > 1) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}, {passive: false});