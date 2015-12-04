// JavaScript Document

$(function() {
	
});
$(window).scroll(function(){
	$contact = $('ul li:last-child');
	if ($contact.hasClass("active")){
			loadDevices();
		}	
	
	});
function loadDevices() {
	$('#phone').load('svgphone.text', 'slow');
	$('#tablet').load('svgtablet.text', 'slow');
	$('#pc-desktop').load('svgdesktop.text', 'slow');
	var svg2 = new Walkway({
          selector: '#device-1',
          duration: 'slow',
          easing: 'swing'
        }).draw(function() {
          
        });
		
		var svg2 = new Walkway({
          selector: '#device-2',
          duration: 'slow',
          easing: 'swing'
        }).draw(function() {
     
        });
		var svg2 = new Walkway({
          selector: '#device-3',
          duration: 'slow',
          easing: 'swing'
        }).draw(function() {
         
        });
};
