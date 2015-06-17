window.onload = function (){
	var gConteiner = document.getElementById('imags');
	var gImageArr = gConteiner.getElementsByTagName('img');
	for(var gi=0;gi<gImageArr.length;gi++){
		gImageArr[gi].onclick = gClickImage;
	}
}
function gClickImage(){
		var gShadow = document.getElementById('g-shadow');
	var gImage = document.getElementById('g-image');
	gImage.onclick = function (){gImage.style.display = 'none';gShadow.style.display = 'none';}
	gImage.style.display = 'block';
	gShadow.style.display = 'block';
	gImage.style.backgroundImage = 'url("'+ this.src +'")';

}

function preview(){
		//var gShadow = document.getElementById('g-shadow');
	var gImage = document.getElementById('g-image');
	gImage.style.backgroundImage = gImageArr[gi];
	gImageArr[gk].src
}