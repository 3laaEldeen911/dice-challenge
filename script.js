let random = Math.floor(Math.random()*6)+1
let random2 = Math.floor(Math.random()*6)+1
let Image =document.querySelector(".image")
let Image2 =document.querySelector(".image2")
let source ="dice"+random+".svg"
let source2 ="dice"+random2+".svg"
let won =document.querySelector("h1")

Image.setAttribute("src", source)
Image2.setAttribute("src", source2)

if(random>random2){
    won.innerHTML="player 1 has won 🏆"
}
else if(random<random2){
    won.innerHTML="player 2 has won 🏆"
}
else{
    won.innerHTML="draw 🫣"
}
