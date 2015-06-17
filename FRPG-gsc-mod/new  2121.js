//new _uWnd('Rd',' ',400,250,{autosize:1,maxh:300,minh:100,closeonesc:1},{url:'http://www.gsc-mod.ru/index/23-$UID$'});return false;
 <script type="text/javascript"> 
function repchange(val,id){ 
repval=val; 
ajaxtime=setInterval('checkajax'+id+'()',1000);}
</script> 
<script type="text/javascript"> 
function checkajax26668(){ 
	forms=document.getElementsByTagName('form'); 
	for(f=0;f<forms.length;f++){ 
		if(forms[f].id=='frm981'){ 
			if(repval=='plus'){document.getElementById('a2').checked='true'; 
				forms[f].reason.value='Благодарю за $ENTRY_TITLE$' 
				document.getElementById('submfrm981').click(); 
				document.getElementById('sbt981').onclick=null; 
				clearInterval(ajaxtime);
			}
		}
	}
}
</script> 