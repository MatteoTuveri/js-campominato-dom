/* genera un numero random tra min e max */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Genera un array di | n | elementi che comprendono un numero casuale tra |min| e |max|
   tutti diversi tra loro */

function bombsGenerator(n, min, max) {
    let bombs = [];
    while (bombs.length < n) {

        let bomb = getRndInteger(min, max + 1);
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }
    }
    return bombs;
}

function gameOver(box,bombs) {
    for(let i=0;i<bombs.length;i++){
        let bomb = bombs[i];
        let position = document.getElementById(`cell-${bombs[i]}`);
        position.classList.add('bomb');
        position.innerHTML = `<i class="fa-solid fa-bomb fa-shake fa-xl"></i>`
    }
    buttonMsg.addEventListener('click', () =>{
        msg.classList.add(`msg-none`);
        counterMsg.innerHTML=`Punteggio`
        box.innerHTML='';
    });
}

function bombRadar(number, squareNumber, bombsArray) {
    let baseMeasure = Math.sqrt(squareNumber);
    let bombsInTheField = 0;
    let borderLeft = [1];
    let borderRight = [baseMeasure];
    for (let i = 1; i <= baseMeasure; i++) {
        borderLeft.push((baseMeasure * i) + 1);
        borderRight.push(baseMeasure * i);
    }

    if (borderLeft.includes(number)) {
        //right
        for (let i = 1; i <= 1; i++) {
            bombsInTheField = (bombsArray.includes(number + i)) ? bombsInTheField + 1 : bombsInTheField;
        }
        //top
        for (let i = 0; i <= 1; i++) {
            bombsInTheField = (bombsArray.includes(number - baseMeasure + i)) ? bombsInTheField + 1 : bombsInTheField;
        }
        //bottom
        for (let i = 0; i >= -1; i--) {
            bombsInTheField = (bombsArray.includes(number + baseMeasure + i)) ? bombsInTheField + 1 : bombsInTheField;
        }
    }

    else if (borderRight.includes(number)) {
        //left
        for (let i = 1; i <= 1; i++) {
            bombsInTheField = (bombsArray.includes(number - i)) ? bombsInTheField + 1 : bombsInTheField;
        }
        //top
        for (let i = 0; i <= 1; i++) {
            bombsInTheField = (bombsArray.includes(number - baseMeasure - i)) ? bombsInTheField + 1 : bombsInTheField;
        }
        //bottom
        for (let i = 0; i <= 1; i++) {
            bombsInTheField = (bombsArray.includes(number + baseMeasure - i)) ? bombsInTheField + 1 : bombsInTheField;
        }
    }
    else {
        //left
        for (let i = 1; i <= 1; i++) {
            bombsInTheField = (bombsArray.includes(number - i)) ? bombsInTheField + 1 : bombsInTheField;
        }
        //right
        for (let i = 1; i <= 1; i++) {
            bombsInTheField = (bombsArray.includes(number + i)) ? bombsInTheField + 1 : bombsInTheField;
        }
        //top
        for (let i = -1; i <= 1; i++) {
            bombsInTheField = (bombsArray.includes(number - baseMeasure - i)) ? bombsInTheField + 1 : bombsInTheField;
        }
        //bottom
        for (let i = 1; i >= -1; i--) {
            bombsInTheField = (bombsArray.includes(number + baseMeasure + i)) ? bombsInTheField + 1 : bombsInTheField;
        }
    }

    console.log(bombsInTheField)
    return bombsInTheField;

}