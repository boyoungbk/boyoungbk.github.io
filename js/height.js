const appHeight = () => {
  const doc = document.documentElement
  const height = window.innerHeight
  doc.style.setProperty('--app-height', height + "px")
  doc.style.setProperty('--app-top', height * 0.75 + "px")
}

window.addEventListener('load', appHeight, {once : true})
appHeight()