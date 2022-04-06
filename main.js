document.addEventListener("DOMContentLoaded", () => {
let Bar = document.querySelector('.blue-bar');
let five = document.querySelector('.fifth_screen');
let scrolled = false

var i = 0;
function move() {
  if(!scrolled){
  if (i == 0) {
    i = 1;
    var elem = document.querySelector(".counter");

    let width = 30;
    let id = setInterval(frame, 0);

    function frame() {
      if (width >= 35930) {
        clearInterval(id);
        i = 0;
        scrolled = true
      } else {
       width = width + 99;
        Bar.style.width = width/ (35930*2)  * 100 + "%";
        elem.innerHTML = width;
      }
    }
  }
}
}
five.addEventListener('mouseover',() => {

  Bar.style.display = 'block';
  
  move()
  
});

})