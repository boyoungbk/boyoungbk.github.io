document.getElementById("pearl").addEventListener("click", function (e) {
  party.confetti(this, {
    count: party.variation.range(30, 60),
    size: party.variation.range(0.8, 1.2),
    
    // ... and more!
  });
});

