$(document).ready(function(){

	var gifs = ["Banana", "Bacon", "Champagne"];

	function renderButtons() {
		$("#search-buttons").empty();

		for (var i=0; i<gifs.length; i++) {
			var newButton = $("<button>");

			newButton.addClass("foodDrinks");
			newButton.attr("data-name", gifs[i]);
			newButton.text(gifs[i]);
			$("#search-buttons").append(newButton);
		};
	};

	$("#foodDrink-search").on("click", function(event) {
		event.preventDefault();

		var foodDrink = $("#search-term").val().trim();

		gifs.push(foodDrink);

		renderButtons();
	});

	renderButtons();

	// $("#search-term").prepend(newButton);

	// var giphyURL = "https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC"
	// $.ajax({
	// 	url: giphyURL,
	// 	method: 'GET'
	// }).done(function(response) {

	// })
});