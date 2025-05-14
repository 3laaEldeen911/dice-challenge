let number =Math.random()*6;
number=Math.floor(number+1);
console.log(number)

let number2 =Math.random()*6;
number2=Math.floor(number2+1);
console.log(number2)


const dice = document.querySelector(".image");
const won = document.querySelector("h1");
const dice2 =document.querySelector(".image2")

if(number == 1){

dice.src="/dice-six-faces-one.svg"

}
else if(number == 2) {
    dice.src="/inverted-dice-2.svg"
}

else if(number == 3) {
    dice.src="/inverted-dice-3.svg"
}

else if(number == 4) {
    dice.src="/inverted-dice-4.svg"
}

else if(number == 5) {
    dice.src="/inverted-dice-5.svg"
}

else if(number == 6) 
    dice.src="/inverted-dice-6.svg"




    if(number2 == 1){

        dice2.src="/dice-six-faces-one.svg"
        
        }
        else if(number2 == 2) {
            dice2.src="/inverted-dice-2.svg"
        }
        
        else if(number2 == 3) {
            dice2.src="/inverted-dice-3.svg"
        }
        
        else if(number2 == 4) {
            dice2.src="/inverted-dice-4.svg"
        }
        
        else if(number2 == 5) {
            dice2.src="/inverted-dice-5.svg"
        }
        
        else if(number2 == 6) 
            dice2.src="/inverted-dice-6.svg"
        
        
    if (number > number2) {
            won.innerHTML="player 1 has won"
    }
            else if( number == number2 ){
            won.innerHTML="draw"
    }

    else if(number < number2 )
            won.innerHTML="player 2 has won"
            