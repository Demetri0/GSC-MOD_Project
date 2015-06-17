window.onload = function (){
var bmain = document.getElementById('but_main');
var bforum = document.getElementById('but_forum');
var bfile = document.getElementById('but_file');
bmain.onmouseover = myOnOverButton;
bforum.onmouseover = myOnOverButton;
bfile.onmouseover = myOnOverButton;
bmain.onmouseout = myOnOutButton;
bforum.onmouseout = myOnOutButton;
bfile.onmouseout = myOnOutButton;
}
function myOnOverButton(){
	this.style.opacity = "1.0";
	this.style.filter = 'Alpha(opacity=100)';
}
function myOnOutButton(){
	this.style.opacity = "0.0";
	this.style.filter = 'Alpha(opacity=0)';
}