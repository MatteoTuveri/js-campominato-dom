

const start = document.querySelector('.btn');
const playground = document.getElementById('playground');
const difficulty = document.querySelector('.form-select');

bombsGenerator(10,1,10);

start.addEventListener('click',()=>{
    playground.classList.remove('text-white');
    playground.innerHTML='';
    let squareNumber;
    if(difficulty.value === 'easy'){
        squareNumber=100;
        playground.style.width='1000px'
    }
    else if(difficulty.value === 'normal'){
        squareNumber=81;
        playground.style.width='900px'

    }
    else if(difficulty.value === 'hard'){
        squareNumber=49;
        playground.style.width='700px'
    }
    else{
        squareNumber=0;
        playground.innerHTML = `Scegliere la difficoltà`
        playground.classList.add('text-white');
    }
    
    for(let i=1;i<=squareNumber;i++)//squares generator
    {
        responsiveSquare(playground,'square','active',i);
    }

    start.innerHTML=`Retry`;

})