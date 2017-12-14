window.onload=init;
function init(){
	var stepTu=document.getElementById("stepTu");
	stepTu.onmouseover=function(){
		var step=document.getElementById("stypMatter");
		step.style.display="block";
	}
	stepTu.onmouseout=function(){
		var stepp=document.getElementById("stypMatter");
		stepp.style.display="none";
	}
	var step=document.getElementById("stypMatter");
	step.onmouseover=function(){
		step.style.display="block";
	}
	
	step.onmouseout=function(){
		step.style.display="none";
	}
	/*滚动条*/
	function init () {
var dome=document.getElementById("hflowbox");
var dome1=document.getElementById("hiftem1");
var dome2=document.getElementById("hiftem2");
dome1.style.width=hflowbox.offsetWidth+"px";
dome2.style.width=hflowbox.offsetWidth+"px";
dome2.innerHTML=dome1.innerHTML;
a=window.setInterval("gun()",40);
}
function gun () {
	dome.scrollLeft++;
	if (dome.scrollLeft==dome.offsetWidth) {
		dome.scrollLeft=0;
	}
}


}


				
				