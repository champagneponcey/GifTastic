$(document).ready(function(){

	var gifs = ["Banana", "Bacon", "Champagne"];

	function renderButtons() {
		// $("#search-buttons").empty();

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

	$("button").on("click", function() {

		var gifTerm = $(this).attr("data-name");

		var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + gifTerm + "&api_key=dc6zaTOxFJmzC"
		$.ajax({
			url: giphyURL,
			method: 'GET'
		}).done(function(response) {
			console.log(giphyURL);
			console.log(response);

			var results = response.data;

			for (var i=0; i<results.length; i++) {
				var gifDiv = $("<div>");

				var gifImage = $("<img>");

				gifImage.attr("src", results[i].images.fixed_height.url);

				gifDiv.append(gifImage);

				$("#gifs-here").prepend(gifDiv);
			}

		});
	});
});