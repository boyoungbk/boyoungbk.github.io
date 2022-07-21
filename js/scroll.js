function preventDefault(e){
  e.preventDefault();
}

function disableScroll(){
  document.body.addEventListener('touchmove', preventDefault, { passive: false });
}
function enableScroll(){
  document.body.removeEventListener('touchmove', preventDefault);
}

//텍스트 하이라이트 출처: https://codepen.io/ioiocodepen/pen/bPwzKo

highlight();

document.querySelector(window).addEventListener("scroll", function(){
  highlight();
});

function highlight(){
  var scroll = document.querySelector(window).scrollTop;
  var height = document.querySelector(window).height();

  document.getElementsByClassName("highlight").each(function(){
    var pos = document.querySelector(this).offset().top;
    if (scroll+height >= pos) {
      document.querySelector(this).classList.add("active");
    }
    else
    {
      document.querySelector(this).classList.remove("active");
      document.querySelector(this).classList.add("disactivated");
    }
    console.log(pos);
    console.log(scroll);
  });
}  

