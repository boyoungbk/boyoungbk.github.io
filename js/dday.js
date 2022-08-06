const today = new Date();
const dday = new Date(2022, 9, 23);
const gap = dday.getTime() - today.getTime();
const result = Math.ceil(gap / (1000 * 60 * 60 * 24));

document.getElementById("dday").textContent = "D-" + result;
document.getElementById("dday2").textContent = result;
