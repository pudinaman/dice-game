var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);
var img1="dice"+randomNumber1+".png";
var img2="dice"+randomNumber2+".png";
document.querySelector("img").setAttribute("src",img1);
document.querySelector(".dice .img2").setAttribute("src",img2);
if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML="Player 1 win";

}
else if(randomNumber1==randomNumber2){
    document.querySelector(".container h1").innerHTML="It is tie";
}
else{
    document.querySelector(".container h1").innerHTML="Player 2 win";
}