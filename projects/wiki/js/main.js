$(document).ready(function() {
	$.backstretch("http://i.imgur.com/uqUAh3b.jpg");
	$('#random-btn').click(function() {
		window.open('https://en.wikipedia.org/wiki/Special:Random');
	});
	$('#about-btn').click(function () {
		$("#about").slideToggle(300);
	})
	$('#submit-search-btn').click(function(e) {
		e.preventDefault();
		var searchTerm = $('#search-input').val();
		$("#search-input").blur();

		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

		$.ajax({
			type: "GET",
			url: url,
			dataType: "json",
			success: function(data) {
				var html = '';
				$('#header').animate({'font-size': '2.6rem'}, '200ms');
				$('.content').animate({'margin-top': '1rem'}, '400ms');
				$('#div-random-btn').hide();

				for (var i = 0; i < data[1].length; i++) {
					console.log(data[3][i]);
					html += '<div class="listing" id="listing-' + i + '\" onclick="window.open(\'' + data[3][i] + '\');"><h4>' + data[1][i] + '</h4><h5>' + data[2][i] + '</h5></div>';
				};

				html += '<div class="col-xs-12 text-center"><button class="btn btn-default" id="new-search-btn">New Search</button></div>';
				
				$("#output-div").html(html).slideDown('1000ms');
				$("#new-search-btn").click(function() {
					$('#output-div').slideUp(400)
					$('#header').animate({'font-size': '36px'}, '100ms');
					$('.content').animate({'margin-top': '14rem'}, '3000ms');
					$('#div-random-btn').show();
					$('#search-input').val('');
					$('#search-input').focus();
					//window.location = "wikipedia-viewer.html";
				});
				
			},
			error: function(errorMessage) {

			}
		})
	});
	
	$(".fade-in").hide(0).delay(50).fadeIn(function () {
		$('#search-input').focus();
	});
});