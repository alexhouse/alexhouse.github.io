let backgrounds = document.getElementsByClassName('background');
let active = 0;

setInterval(function() {
    backgrounds[active].classList.remove('show');

    ++active;
    if (active > (backgrounds.length - 1)) {
        active = 0;
    }

    backgrounds[active].classList.add('show');
}, 5000)
