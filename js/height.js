// const appHeight = () => {
//   const doc = document.documentElement
//   doc.style.setProperty('--app-height', `${window.innerHeight}px`)
// }

const appHeight = () => {
  const doc = document.documentElement
  const app_height = document.querySelector("window.innerHeight") + "px"
  doc.style.setProperty('--app-height', app_height)
}

window.addEventListener('resize', appHeight, { once : true}) //첫 로드시에만 동작하게 바꾸기
appHeight()

