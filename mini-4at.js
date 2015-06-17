function load_chat(){
msg = document.getElementById('mchatMsgF');
msg.style.width = "162"
msg.style.height = "50"
btn = document.getElementById('mchatBtn');
btn.type = "image";
btn.src = "/xdstyle-2012/oke.jpg";
btn.style.height = "50px";
btn.style.width = "37px";
btnConfig = document.getElementById('btnConfig');
btnBB = document.getElementById('btnBB');
btnSmile = document.getElementById('btnSmile');
btnRefresh = document.getElementById('btnRefresh');
btnConfig.onmouseover = chatBtnOver;
btnBB.onmouseover = chatBtnOver;
btnSmile.onmouseover = chatBtnOver;
btnRefresh.onmouseover = chatBtnOver;
btnConfig.onmouseout = chatBtnOut;
btnBB.onmouseout = chatBtnOut;
btnSmile.onmouseout = chatBtnOut;
btnRefresh.onmouseout = chatBtnOut;
}
function chatBtnOver(){
	this.style.opacity = "1.0";
	this.style.filter = 'Alpha(opacity=100)';
}
function chatBtnOut(){
	this.style.opacity = "0.4";
	this.style.filter = 'Alpha(opacity=40)';
}