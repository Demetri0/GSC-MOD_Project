var step = 4;
var pdabotimg = document.getElementById('pda-bot-img');
function expandPanel(){
	var menu = document.getElementById('menu');
	if(menu.clientHeight<(menu.originalHeight - step)){
		var h = menu.clientHeight + step;
		menu.style.height = h+'px';
		setTimeout('expandPanel()',5);
	}else{
		menu.style.height = "";
		pdabotimg.setAttribute("class", "povorotUne");
	}
}
function collapsePanel(){
	var menu = document.getElementById('menu');
	if(menu.clientHeight>step){
		var h = menu.clientHeight - step;
		menu.style.height = h+'px';
		setTimeout('collapsePanel()',5);
	}else{
		menu.style.display = 'none';
		pdabotimg.setAttribute("class", "povorotDue");
	}
}
function showMenu(){
	if(!menu.style.height || (menu.style.display == 'none')){
		if(menu.style.display == 'none'){
			menu.style.display = '';
			expandPanel();
		}else{
			menu.originalHeight = menu.clientHeight;
			collapsePanel();
		}
	}
}