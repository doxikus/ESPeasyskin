
function Topnav() {
    var x = document.getElementsByClassName("menubar");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.toggle("responsive");
}
}
window.onscroll = function() {onscrollupdate()};
function onscrollupdate() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
               var x = document.getElementsByClassName('bodymenu');
               var i;
               for (i = 0; i < x.length; i++) {
                 x[i].classList.add("smaller");
           }
   } else {
               var x = document.getElementsByClassName('bodymenu');
               var i;
               for (i = 0; i < x.length; i++) {
                 x[i].classList.remove("smaller");
           }
   }
}
