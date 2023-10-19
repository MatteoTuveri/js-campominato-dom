/* genera un numero random tra min e max */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/* La seguente funzione genera un elemento <div> che verrà inserito
   nel DOM all'interno dell'elemento |position|. A tale elemento può essere
   aggiunto una classe di default |className| e una classe che verrà inserita al click sopra
   l'elemento generato |responsiveStyleName|. è possibile, inoltre, aggiungere un numero che 
   al click verrà stampato nell'elemento |number|. */

function responsiveSquare(position, className, responsiveStyleName, number) {
    let square = document.createElement('div');
    square.classList.add(className);
    square.addEventListener('click', () => {

        square.classList.add(responsiveStyleName);
        square.innerHTML = `${number}`
    });
    return position.append(square);
}

/* Genera un array di | n | elementi che comprendono un numero casuale tra |min| e |max|
   tutti diversi tra loro */

function bombsGenerator(n, min, max) {
    let bombs = [];
    for (let i = 0; i < n; i++) {

        let random = getRndInteger(min, max);
        let check = true;

        if (bombs.length > 1) {
            for (let i = 0; i < bombs.length-1; i++) {
                console.log()
/*                 if (random === bombs[i]) {
                    check = false;
                } */
            }

        }

        if (bombs.length === 0 || check) {
            bombs.push(random);
        }
        else {
            i--;
        }
    }
    console.log(bombs);
    return bombs;
}