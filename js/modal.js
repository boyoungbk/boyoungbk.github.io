const mdl = document.getElementById("myModal");
const mdl2 = document.getElementById("myModal2");

function openmodal() {
  mdl.style.display="block"
 };
 
 function closemodal() {
  mdl.style.display="none"
 };

 function openmodal2() {
  mdl2.style.display="block"
 };
 
 function closemodal2() {
  mdl2.style.display="none"
 };

 function touch_start(e){
  e.preventDefault();
  e.target.onclick();
}