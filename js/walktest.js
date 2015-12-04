// JavaScript Document

 document.addEventListener('DOMContentLoaded', function() {
	 var svg2 = new Walkway({
          selector: '#device-1',
          duration: 2000,
          easing: 'linear'
        }).draw(function() {
          console.dir('Finished desktop!');
        });
		
		var svg2 = new Walkway({
          selector: '#device-2',
          duration: 3000,
          easing: 'linear'
        }).draw(function() {
          console.dir('Finished tablet!');
        });
		var svg2 = new Walkway({
          selector: '#device-3',
          duration: 4000,
          easing: 'linear'
        }).draw(function() {
          console.dir('Finished phone!');
        });
 });