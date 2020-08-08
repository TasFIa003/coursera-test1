
(function(window){

		var helloSpeaker={};
		
		var speakWord="hello";
		helloSpeaker.speak=function (names){

			
			var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


			for (var i = 0; i < names.length; i++) {

				 var f = names[i].charAt(0).toLowerCase();
					if(f!="j"){
    
			console.log(speakWord+" "+names[i])
				}
				
		}
	}

			window.helloSpeaker=helloSpeaker;

})(window);