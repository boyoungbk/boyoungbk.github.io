const canvas = document.getElementById('custom_canvas')
const button = document.getElementById('pearl')

const jsConfetti = new JSConfetti({ canvas })

function confetti() {
  jsConfetti.addConfetti({
    confettiColors: [
      '#CEDCC3', '#B6D5A9', '#69B7C1', '#DD65A4', '#AFE1E8', '#EDA3C2', '#ffffff',
    ],
    confettiRadius: 6,
    confettiNumber: 100,
  })
}

button.addEventListener('click', () => confetti())
window.onload = setTimeout(confetti, 1000)
