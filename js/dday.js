const today = new Date();
const dday= new Date(2022, 9, 22);
const gap = dday.getTime() - today.getTime();
const result = Math.ceil(gap / (1000 * 60 * 60 * 24));

document.getElementById("dday").textContent = "D-" + result;