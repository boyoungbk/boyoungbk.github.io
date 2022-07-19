function openmodal() {
  var mdl = document.getElementById("myModal");
  mdl.style.display="block"
 };
 
 function closemodal() {
  var mdl = document.getElementById("myModal");
  mdl.style.display="none"
 };

 function openmodal2() {
  var mdl2 = document.getElementById("myModal2");
  mdl2.style.display="block"
 };
 
 function closemodal2() {
  var mdl2 = document.getElementById("myModal2");
  mdl2.style.display="none"
 };

 function touch_start(e){
  e.preventDefault();
  e.target.onclick();
}