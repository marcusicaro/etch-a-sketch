var body = document.querySelector('body');
// const headerOne = document.createElement('h1');
// headerOne.textContent ='Etch-A-Sketch';
const container = document.createElement('div');
container.classList.add('container');

// const buttonAdd = document.createElement('button');
// buttonAdd.classList.add('new-button');

// body.appendChild(buttonAdd);
body.appendChild(container);

const buttonAttributes = document.querySelector('button');
buttonAttributes.setAttribute('onclick', 'setGrindSize()');


var squareNumber = prompt("Please, enter a number from 1 to 100");

// function checkNumber(squareNumber){
//     if(squareNumber < 1 || squareNumber > 100){
//         squareNumber = prompt("Please, enter a number from 1 to 100")
//         return checkNumber(squareNumber);
//     }

//     else{}
// }

//checkNumber(squareNumber);

function sketchStart(){

    if (squareNumber > 1 && squareNumber < 100){
    function squareFunction(squareNumber){
        return squareNumber * squareNumber
    }

    var squareArea = 250000 / (squareNumber*squareNumber);

    function squareSize(){

        return Math.sqrt(squareArea);
    }

    console.log(squareArea);
    console.log(squareSize());

    for (i = 0; i < squareFunction(squareNumber); i++){
        var divCreation = document.createElement('div');
        divCreation.id = i;
        divCreation.classList.add('square');
        container.appendChild(divCreation);
        divCreation.style.width = squareSize() + "px";
        divCreation.style.height = squareSize() + "px";
        //set each square it's size
        //ammount of pixels in blank space is 250k
        //will divide the number of pixels in the blank space for squareNumber

    }

    var blackSelector = document.querySelectorAll('.square')
    // console.log(blackSelector);

    blackSelector.forEach(square => square.addEventListener("mouseenter", () => {
        square.style.background = 'black';
    }));
    }


    else {
        squareNumber = prompt("Please, enter a number from 1 to 100")
        return sketchStart();
        }

}

sketchStart();