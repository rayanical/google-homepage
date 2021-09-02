const button = document.getElementById('enter');

button.addEventListener('click', add);

const button2 = document.getElementById('lucky');

button2.addEventListener('click', add2);

function add() {
    button.classList = 'btns onClick';
}

function add2() {
    button2.classList = 'btns onClick';
}

const app = document.getElementById('app');

app.addEventListener('click', show);

function show() {
    const apps = document.getElementById('apps');
    if (apps.style.visibility === 'hidden') {
        apps.style.visibility = 'visible';
    } else {
        apps.style.visibility = 'hidden';
    }
}
