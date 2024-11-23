// for left images
var randomNumleft=Math.floor(Math.random()*6)+1;
var leftdice_img="images/dice"+randomNumleft+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",leftdice_img);
console.log(randomNumleft);

// for right image 
var randomNumright=Math.floor(Math.random()*6)+1;
var rightdice_img="images/dice"+randomNumright+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",rightdice_img);
console.log(randomNumright);


if(randomNumleft>randomNumright){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins"; 
}
else if(randomNumleft<randomNumright){
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins"; 
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="Match Draw"; 
}

