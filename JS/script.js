

const start = document.querySelector('.btn-info');
const playground = document.getElementById('playground');
const difficulty = document.querySelector('.form-select');
const msg = document.querySelector('.msg');
const buttonMsg = document.querySelector('.btn-warning');
const text = document.querySelector('h2');
const counterMsg = document.querySelector('.counter')

start.addEventListener('click', () => {
    playground.classList.remove('text-white');
    playground.innerHTML = '';
    let squareNumber;
    let bombsNumber = 16;
    let counter = 0;
    if (difficulty.value === 'easy') {
        squareNumber = 100;
    }
    else if (difficulty.value === 'normal') {
        squareNumber = 81;

    }
    else if (difficulty.value === 'hard') {
        squareNumber = 49;
    }
    else if (difficulty.value === 'select') {
        squareNumber = 0;
    }

    if(squareNumber!==0){


    let bombs = bombsGenerator(bombsNumber, 1, squareNumber);
    console.log(bombs);

    for (let i = 1; i <= squareNumber; i++)//squares generator
    {
        let square = document.createElement('div');
        square.classList.add('square');
        square.id = `cell-${i}`;
        square.style.width = `calc(800px / ${Math.sqrt(squareNumber)}`;
        square.style.height = `calc(800px / ${Math.sqrt(squareNumber)}`;
        let radar = bombRadar(i, squareNumber, bombs);
        square.addEventListener('click', bombsAndCells);

        function bombsAndCells() {

            if (bombs.includes(i)) {
                square.classList.add('bomb');
                square.innerHTML = `<i class="fa-solid fa-bomb fa-shake fa-xl"></i>`
                msg.classList.remove(`msg-none`);
                gameOver(playground, bombs);
                text.innerHTML = `hai perso`;

                for (let i = 1; i <= squareNumber; i++) {

                }
            }
            else {
                square.classList.add('active');
                square.innerHTML = `${radar}`
                counter += 1000;
                counterMsg.innerHTML = `${counter}`
                if (counter === (squareNumber - bombsNumber) * 1000) {
                    gameOver(playground, bombs);
                    msg.classList.remove(`msg-none`);
                    text.innerHTML = `hai vinto!`
                }
            }
            this.removeEventListener('click', bombsAndCells);
        }

        playground.append(square);
    }

    }
    else{
        playground.innerHTML = `Scegliere la difficoltà`
        playground.classList.add('text-white');
    }
})
