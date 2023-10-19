

const start = document.querySelector('.btn-info');
const playground = document.getElementById('playground');
const difficulty = document.querySelector('.form-select');
const msg = document.querySelector('.msg');
const buttonMsg = document.querySelector('.btn-warning');
const text = document.querySelector('h1')

start.addEventListener('click', () => {
    playground.classList.remove('text-white');
    playground.innerHTML = ''
    let squareNumber;
    let bombsNumber = 16;
    let counter = 0;
    if (difficulty.value === 'easy') {
        squareNumber = 100;
        playground.style.width = '1000px'
    }
    else if (difficulty.value === 'normal') {
        squareNumber = 81;
        playground.style.width = '900px'

    }
    else if (difficulty.value === 'hard') {
        squareNumber = 49;
        playground.style.width = '700px'
    }
    else {
        squareNumber = 0;
        playground.innerHTML = `Scegliere la difficoltà`
        playground.classList.add('text-white');
    }

    let bombs = bombsGenerator(bombsNumber, 1, squareNumber);
    console.log(bombs);
    for (let i = 1; i <= squareNumber; i++)//squares generator
    {
        let square = document.createElement('div');
        square.classList.add('square');
        let cb = () => {
            if (bombs.includes(i)) {
                square.classList.add('bomb');
                square.innerHTML = `<i class="fa-solid fa-bomb fa-shake fa-xl"></i>`
                gameOver(playground);
                msg.classList.remove(`msg-none`);
                text.innerHTML = `hai perso`
            }
            else {
                square.classList.add('active');
                square.innerHTML = `${i}`
                counter += 1;
            }
            square.removeEventListener('click', cb)
        };
        square.addEventListener('click', cb);
        playground.append(square);
    }

    console.log(counter);
    if (counter === (squareNumber - bombsNumber)) {
        gameOver(playground);
        msg.classList.remove(`msg-none`);
        text.innerHTML = `hai vinto!`
    }

})