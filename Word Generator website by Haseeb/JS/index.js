// event listener

let tb1= document.getElementsByClassName("right-most");

tb1.addEventListener("click",hideIt);
tb3.addEventListener("click", showIt);


function showIt(){document.getElementsByClassName("item").style.display = "block";}
function hideIt(){document.getElementsByClassName("item").style.display = "none";}