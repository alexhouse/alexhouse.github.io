let backgrounds = document.getElementsByClassName('background');
let active = localStorage.getItem('active') || 0;

backgrounds[active].classList.add('show');

setInterval(function() {
    backgrounds[active].classList.remove('show');

    ++active;
    if (active > (backgrounds.length - 1)) {
        active = 0;
    }

    localStorage.setItem('active', active);
    backgrounds[active].classList.add('show');
}, 10000);
