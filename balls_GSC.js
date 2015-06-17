function toConsiderBalls(){
	var b_rep = $_REPUTATION$*0.6;
	var b_file = $_LOAD_ENTRIES$*1.2;
	var b_news = $_NEWS_ENTRIES$*1.4;
	var b_forum = $_FORUM_ENTRIES$*0.9;
	var b_award = $AWARDS$*1.0;
	var b_coment = $_COM_ENTRIES$*0.6;
	var b_ban = $_BAN_RATING$*40;
	var b_minus = $_BOARD_ENTRIES$;
 var result = b_rep + b_file + b_news + b_forum + b_award + b_coment + b_ban - b_minus;
 var b_contentWnd = '<fieldset><legend>Подсчёт баллов</legend>За файлы: <b>'+b_file.toFixed(2)+'</b><br>За сообщения на форуме: <b>'+b_forum.toFixed(2)+'</b><br>За коментарии: <b>'+b_coment.toFixed(2)+'</b><br>За новости: <b>'+b_news.toFixed(2)+'</b><br>За репутацию: <b>'+b_rep.toFixed(2)+'</b><br>За награды: <b>'+b_award.toFixed(2)+'</b><br>Потрачено: <b>'+b_minus.toFixed(2)+'</b></fieldset><fieldset><legend>Баллы</legend>Общее число баллов: <b>'+result.toFixed(2)+'</b></fieldset>';
 openGscModWnd(180,450,b_contentWnd,'Баллы','#212626');
 }
function ballsToConsiderReturn(){
	var b_rep = $_REPUTATION$*0.6;
	var b_file = $_LOAD_ENTRIES$*1.2;
	var b_news = $_NEWS_ENTRIES$*1.4;
	var b_forum = $_FORUM_ENTRIES$*0.9;
	var b_award = $AWARDS$*1.0;
	var b_coment = $_COM_ENTRIES$*0.6;
	var b_ban = $_BAN_RATING$*40;
	var b_minus = $_BOARD_ENTRIES$;
	var result = b_rep + b_file + b_news + b_forum + b_award + b_coment + b_ban - b_minus;
	return result.toFixed(2);
}
//begin
var showAlphaCounter = 0;
alpha = new Array();
alpha[10] = '1.0';
alpha[9] = '0.9';
alpha[8] = '0.8';
alpha[7] = '0.7';
alpha[6] = '0.6';
alpha[5] = '0.5';
alpha[4] = '0.4';
alpha[3] = '0.3';
alpha[2] = '0.2';
alpha[1] = '0.1';
alpha[0] = '0.0';
var testune;
function showAlpha(objid,showhide){
	var obj = document.getElementById(objid);
	if(showhide){
		//Show
		if(showAlphaCounter == 0){obj.style.display = 'block';obj.style.opacity = '0.0'}
	if(showAlphaCounter < 11){
		showAlphaCounter = showAlphaCounter + 1;
		obj.style.opacity = alpha[showAlphaCounter];
		setTimeout('showAlpha("'+objid+'",1)',25);
	}else{
		showAlphaCounter = 0;
	}
	}else{
		//Hide
		//alert(1-0.4);
		if(showAlphaCounter == 0){alpha.reverse();obj.style.opacity = '1.0'}
		if(showAlphaCounter < 11){
			showAlphaCounter = showAlphaCounter + 1;
			obj.style.opacity = alpha[showAlphaCounter];
			setTimeout('showAlpha("'+objid+'",0)',50);
		}else{
			showAlphaCounter = 0;
			obj.style.display = 'none';
			alpha.reverse();
			obj.parentNode.removeChild(obj);
		}
	}
}
//.end
function openGscModWnd(height,width,content,title,color){
	gscmoduWnd = document.createElement('div');
	gscmoduWnd.className = 'centerDiv gscmodWnd';
	gscmoduWnd.style.height = height+20+'px';
	gscmoduWnd.style.width = width+'px';
	gscmoduWnd.style.marginLeft = '-'+width/2+'px';
	gscmoduWnd.style.marginTop = '-'+height/2+'px';
	gscmoduWnd.style.backgroundColor = color;
	gscmoduWnd.style.display = 'block';
	document.body.appendChild(gscmoduWnd);
	 var main = '<div style="height:20px;border-bottom:1px solid red;position:relative;color:#d2cbc0;padding-left:6px"><b>'+title+'</b><div style="position:absolute;right:1px;top:1px;height:16px;width:16px;background-color:red;border:1px solid black;" onclick="showAlpha(gscmoduWnd,0)"></div></div>';
	gscmoduWnd.innerHTML = main+content;
}