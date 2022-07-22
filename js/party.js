const a = new color(12, 59, 219);
const b = Color.fromHex("#ffffff");
const result = a.mix(b);

document.getElementById("pearl").addEventListener("click", function (e) {
  party.confetti(this, {
    count: party.variation.range(30, 60),
    size: party.variation.range(0.8, 1.2),
    shapes: ["star", "roundedSquare"],
    color: party.variation.gradientSmaple(result)
    // ... and more!
  });
});

