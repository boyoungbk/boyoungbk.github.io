const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  doc.style.setProperty('--app-bottom', 3+"rem")
}

window.addEventListener('load', appHeight, {once : true})
appHeight()