// JavaScript Document

$(function() {
	//$('#addSvg').load('devicesvg.text');
	$('#phone').load('svgphone.text');
	$('#tablet').load('svgtablet.text');
	$('#pc-desktop').load('svgdesktop.text');
	console.log('svg here');
	
});


function detectScroll(){
		$(window).scroll(function(){
			if ($(this).scrollTop()>1000){
			
			}
			});

	
};
