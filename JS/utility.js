/* genera un numero random tra min e max */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* La seguente funzione genera un elemento <div> che verrà inserito
   nel DOM all'interno dell'elemento |position|. A tale elemento può essere
   aggiunto una classe di default |className| e una classe che verrà inserita al click sopra
   l'elemento generato |responsiveStyleName|. è possibile, inoltre, aggiungere un numero che 
   al click verrà stampato nell'elemento |number|. */

function playgroundGenerator(bombsNumber, min, max, className, freeStyle, bombsStyle, position, number) {
    let square = document.createElement('div');
    square.classList.add(className);
    let cb = () => {
        let bombs = bombsGenerator(bombsNumber, min, max);
        if (bombs.includes(number)) {

            square.classList.add(bombsStyle);
            square.innerHTML = `<i class="fa-solid fa-bomb fa-shake fa-xl"></i>`
        }
        else {
            square.classList.add(freeStyle);
            square.innerHTML = `${number}`
        }
        square.removeEventListener('click',cb)
    };
    square.addEventListener('click',cb);
    return position.append(square);
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