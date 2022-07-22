// document.getElementById("pearl").addEventListener("click", function (e) {
//   party.confetti(this, {
//     count: party.variation.range(30, 60),
//     size: party.variation.range(0.8, 1.2),
//     shapes: ["star", "roundedSquare"],
//     // ... and more!
//   });
// });

const canvas = document.getElementById('custom_canvas')
const button = document.getElementById('pearl')

const jsConfetti = new JSConfetti({ canvas })

setTimeout(() => {
  jsConfetti.addConfetti()
}, 500)

button.addEventListener('click', () => {
  jsConfetti.addConfetti()
})
