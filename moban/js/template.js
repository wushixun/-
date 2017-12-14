window.onload=function(){
	function showDl(n) {
	for (var i=1;i<=4;i++){
		var ddl=document.getElementById("dl"+i);
		ddl.style.display="none"
	}
	for(var j=1;j<=5;j++){
		var dd=document.getElementById("l"+j);
		dd.style.border='1px solid red'
	}
	for (var h=1;h<=5;h++) {
		var aa=document.getElementById("a"+h);
		aa.style.color="black"
	}
	var dl=document.getElementById("dl"+n);
	dl.style.display="block"
	var d=document.getElementById("div"+n)
	d.style.borderBottom="none"
	var a=document.getElementById("a"+n);
	a.style.color="orange"
}
}
