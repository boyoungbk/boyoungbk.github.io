const canvas = document.getElementById('custom_canvas')
const button = document.getElementById('pearl')

const jsConfetti = new JSConfetti({ canvas })

function confetti() {
  jsConfetti.addConfetti({
    confettiColors: [
      '#ffe6e6', '#f5eeed', '#e8dcc1', '#ff85a1', '#fbb1bd', '#f9bec7', '#ffffff',
    ],
    confettiRadius: 6,
    confettiNumber: 100,
  })
}

setTimeout(() => confetti(), 500)
button.addEventListener('click', () => confetti())

document.addEventListener('touchstart', onTouchStart, {passive: true});
