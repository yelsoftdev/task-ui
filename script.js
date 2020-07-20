
function bindCard(showNumber){
var bgColorCode=1;
if(showNumber==1 || showNumber==8)
	bgColorCode=1;
else if(showNumber==2 || showNumber==4)
	bgColorCode=2;
else if(showNumber==3 || showNumber==5 || showNumber==9)
	bgColorCode=3;
else if(showNumber==6 || showNumber==7)
	bgColorCode=4;

var cardHtml="<div class='card bg-color"+bgColorCode+"'><div class='text-align-center'><p class='card-text'>"+showNumber+"</p></div></div>";
document.getElementById("cardsList").innerHTML += cardHtml;
}
function btnShuffle(){
	var array = [1,2,3,4,5,6,7,8,9];
	document.getElementById("cardsList").innerHTML="";
	for (var i = array.length - 1; i >= 0; i--) {
	var j = Math.floor(Math.random() * (i + 1));
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
	
	bindCard(array[i]);
	}
}

function btnSort(){
	document.getElementById("cardsList").innerHTML="";
	for (var i = 1; i <=9; i++)
	bindCard(i);
}

//pageload call this function -- btnSort()
btnSort();
   