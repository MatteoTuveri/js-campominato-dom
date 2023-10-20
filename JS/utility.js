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

function gameOver(box) {
    buttonMsg.addEventListener('click', () => location.reload())
    box.replaceWith(box.cloneNode(true));
}

function bombRadar(number, squareNumber, bombsArray) {
    let baseMeasure = Math.sqrt(squareNumber);
    let bombsInTheField = 0;
    //left
    for (i = 1; i <= 1; i++) {
        bombsInTheField = (bombsArray.includes(number - i)) ? bombsInTheField + 1 : bombsInTheField;
    }
    //right
    for (i = 1; i <= 1; i++) {
        bombsInTheField = (bombsArray.includes(number + i)) ? bombsInTheField + 1 : bombsInTheField;
    }
    //top
    if (number - baseMeasure >= 1) {

        for (i = -1; i <= 1; i++) {
            bombsInTheField = (bombsArray.includes(number - baseMeasure - i)) ? bombsInTheField + 1 : bombsInTheField;
        }
    }
    //bottom
    if (number + baseMeasure <= squareNumber) {
        for (i = 1; i >= -1; i--) {
            bombsInTheField = (bombsArray.includes(number + baseMeasure + i)) ? bombsInTheField + 1 : bombsInTheField;
        }
    }
    console.log(bombsInTheField)
    return bombsInTheField;

}