var xd = 'xd_style-2012'
var pause = 5000;
var iAlpha = 0;
var jAlpha = 0;
var timer;
slido = new Object();
slido.pos;
slido.posother;
slide = new Object();
slide.img1 = '/'+xd+'/slides/'+"slide1.jpg";
slide.img2 = '/'+xd+'/slides/'+"slide2.jpg";
slide.img3 = '/'+xd+'/slides/'+"slide3.jpg";
slide.img4 = '/'+xd+'/slides/'+"slide4.jpg";
slide.img5 = '/'+xd+'/slides/'+"slide5.jpg";
/*----------------*/
alpha = new Array();
alpha[10]  = '0.0';
alpha[9]  = '0.1';
alpha[8]  = '0.2';
alpha[7]  = '0.3';
alpha[6]  = '0.4';
alpha[5]  = '0.5';
alpha[4]  = '0.6';
alpha[3]  = '0.7';
alpha[2]  = '0.8';
alpha[1]  = '0.9';
alpha[0]  = '1.0';
/*----------------*/
function loadSlider(){
img1 = document.getElementById('img1');
img2 = document.getElementById('img2');
img3 = document.getElementById('img3');
img4 = document.getElementById('img4');
img5 = document.getElementById('img5');
setTimeout('showAlpha(img1)',pause);
}
/*---------------*/
function show(pos){
	switch (pos){
		case img1: img5.style.zIndex='3';img4.style.zIndex='3';img1.style.zIndex='3';img1.style.opacity='1.0';img2.style.zIndex='5';img3.style.zIndex='4';iAlpha=0;timer = setTimeout('showAlpha(img2)',pause);break;
		case img2: img1.style.zIndex='3';img5.style.zIndex='3';img2.style.zIndex='3';img2.style.opacity='1.0';img3.style.zIndex='5';img4.style.zIndex='4';iAlpha=0;timer = setTimeout('showAlpha(img3)',pause);break;
		case img3: img2.style.zIndex='3';img1.style.zIndex='3';img3.style.zIndex='3';img3.style.opacity='1.0';img4.style.zIndex='5';img5.style.zIndex='4';iAlpha=0;timer = setTimeout('showAlpha(img4)',pause);break;
		case img4: img3.style.zIndex='3';img2.style.zIndex='3';img4.style.zIndex='3';img4.style.opacity='1.0';img5.style.zIndex='5';img1.style.zIndex='4';iAlpha=0;timer = setTimeout('showAlpha(img5)',pause);break;
		case img5: img4.style.zIndex='3';img3.style.zIndex='3';img5.style.zIndex='3';img5.style.opacity='1.0';img1.style.zIndex='5';img2.style.zIndex='4';iAlpha=0;timer = setTimeout('showAlpha(img1)',pause);break;
	}
}
function showAlpha(image){
	image.style.opacity = alpha[iAlpha];
	iAlpha++;
	slido.pos = image;
	if(iAlpha<=10){timer = setTimeout("showAlpha(slido.pos)",50);}
	else{setTimeout(timer = 'show(slido.pos)',50);
	}
}

function myShowAlphaOther(myObj){
	myObj.style.opacity = alpha[jAlpha];
	jAlpha++;
	slido.posother = myObj;
	if(jAlpha<=10){timerOther = setTimeout("myShowAlphaOther(slido.posother)",50);}
	else{jAlpha=0;slido.posother.style.display = 'none';}
}