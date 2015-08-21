// pull in the JSON list of color names and values. 

$(document).ready(function() {

    $.ajax('data.json', {
        success: callback, 

        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });//close the function before creating callback
        
        	

        function callback(response){
        	console.log(response); 
      // Iterate over our list, creating a new div for each entry.
        	response.forEach(function(property){
        	//create newDiv and add a css background-color property, with the value from the object
        		var $newDiv=$('<div>').css('background-color', property.value);
        	//You will append a p tag into each div with the name of the color, 
        		var $p =$('<p>').text(property.color);
        		//connect the $p to the $newDiv
        		$newDiv.append($p);
        		//add both to the DOM
        		$('.content').append($newDiv);

        	});
        }


})


//and add a CSS class with the color value to the entire div.