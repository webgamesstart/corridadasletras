
const root = document.querySelector(':root');
    const loadLevel = document.getElementById('loadLevel');

    let speedLoad = [0.5, 1, 3, 0.3, 2];
    let flag = 0;

    loadLevel.addEventListener('click', mudar)

    function mudar() {
        flag = Math.floor(Math.random() * 5);
        root.style.setProperty('--loadSpeed', `${speedLoad[flag]}s`);
    }

    mudar();

    setInterval(mudar, `${speedLoad[flag]}000`);
