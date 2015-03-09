$(document).ready(function() {
		var currentPrompt = 0;
		var prompts= [
			'type your name',
			'type in a villain-like name',
			'type your superpower',
			'type in what city you are from'
			];
			
		// here;s an array to keep answers in
		var answers =[];   

		//A function that will call the next prompt
		var nextPrompt = function() {
			// there's no answer the first time nextPrompt
			if (currentPrompt != 0) {
			answers.push($('input').val());
			}  
			//if there is a next prompt	
			if (currentPrompt < prompts.length) {
				// put first prompt in all html elements with class prompt
				$('.prompt').html(prompts[currentPrompt] + '<br><input type="text">');
				// move the next prompt into the variable curretPrompt
				currentPrompt = currentPrompt + 1;
			}
			//or else if we're at the end of the array
			else {
				// run showFinal to put answers into html 
				showFinal();
				
			}
		}
		//puts user answers into HTML
		var showFinal = function() {
			$('.prompt').html('<span class="fill">'+answers[0]+'</span> has defeated the demented <span class="fill">'+answers[1]+'</span>. With his/her mighty superpowers of <span class="fill">'+answers[2]+'</span>. Our hero <span class="fill">'+answers[0]+'</span> has saved the city of <span class="fill">'+answers[3]+'</span> and brought <span class="fill">'+answers[1]+'</span> to justice once and for all the end.');
			//and them hide the button
			$('button').hide();
		}
		// run nextPrompt function when button is clicked
		$('button').click(function() {
		nextPrompt();
		});

		// Show the first prompt as soon as js loads
		nextPrompt();
});		