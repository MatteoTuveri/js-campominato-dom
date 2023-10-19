function responsiveSquare(position,styleName,number){
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click',()=>{

        square.classList.add(styleName);
        square.innerHTML=`${number}`
    });
    return position.append(square);
}