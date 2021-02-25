// var pickingDice = document.querySelector("div.image");
// var imageBox = document.querySelectorAll("div.image img");




var  pickRandomDice1 = Math.floor(Math.random() * 6) +1;
var pickingDice = "dice" + pickRandomDice1 + ".png";
var pickingImageDice1 = "images/" + pickingDice;

var getImage1 = document.querySelectorAll("img")[0].setAttribute("src", pickingImageDice1 );


var  pickRandomDice2 = Math.floor(Math.random() * 6) +1;
var pickingDice = "dice" + pickRandomDice2 + ".png";
var pickingImageDice2 = "images/" + pickingDice;

var getImage2 = document.querySelectorAll("img")[1].setAttribute("src", pickingImageDice2 );

if(pickingImageDice1 > pickingImageDice2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins"
}
else if(pickingImageDice2 > pickingImageDice1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML = "Draw! ";

}
