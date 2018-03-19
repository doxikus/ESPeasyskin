
function Topnav() {
    var x = document.getElementById('myNav');
    if (x.className === 'menubar') {
        x.className += " responsive";
    } else {
        x.className = "menubar";
    }
}
function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 60,
        headerEl = document.getElementById('shrink');

    if (distanceY > shrinkOn) {
        headerEl.classList.add('smaller');
    } else {
        headerEl.classList.remove('smaller');
    }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
