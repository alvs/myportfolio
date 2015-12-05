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
	$('#deviceLoad').load('mysvg.text', 'slow');
	var svg2 = new Walkway({
          selector: '#device-1',
          duration: '1000',
          easing: 'swing'
        }).draw(function() {
          
        });
		
		var svg2 = new Walkway({
          selector: '#device-2',
          duration: '4000',
          easing: 'swing'
        }).draw(function() {
     
        });
		var svg2 = new Walkway({
          selector: '#device-3',
          duration: '7000',
          easing: 'swing'
        }).draw(function() {
         
        });
};
