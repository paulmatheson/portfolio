//Latest Update: 05.09.2017

//navigator.geolocation.getCurrentPosition(function(position) {
//    loadWeather(position.coords.latitude+','+position.coords.longitude);
//});

var currentLocation;

// Returns the Date in "Tuesday, March XX" format.
function returnsDate() {
	var today = new Date();
	var dd = today.getDate();
	var dn = today.getDay();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();

	if (dd < 10) {
		dd = '0' + dd
	}

	switch (dn) {
		case 0:
			dn = "Sunday";
			break;
		case 1:
			dn = "Monday";
			break;
		case 2:
			dn = "Tuesday";
			break;
		case 3:
			dn = "Wednesday";
			break;
		case 4:
			dn = "Thursday";
			break;
		case 5:
			dn = "Friday";
			break;
		case 6:
			dn = "Saturday";
			break;
	}

	switch (mm) {
		case 1:
			mm = "January";
			break;
		case 2:
			mm = "February";
			break;
		case 3:
			mm = "March";
			break;
		case 4:
			mm = "April";
			break;
		case 5:
			mm = "May";
			break;
		case 6:
			mm = "June";
			break;
		case 7:
			mm = "July";
			break;
		case 8:
			mm = "August";
			break;
		case 9:
			mm = "September";
			break;
		case 10:
			mm = "October";
			break;
		case 11:
			mm = "November";
			break;
		case 12:
			mm = "December";
			break;
	}
	return dn + ", " + mm + " " + dd;
};

// Assigns an 'image class' so that a corresponding icon image can be produced in the app
// Assigns a 'contentBg' for changing the background of the Today area
function conditionsImage(code) {
	switch (parseInt(code)) {
		case 4:
			//thunderstorms
			conditionsImageClass = 'diw-cloud-rain-lightning';
			contentBg = '#A4BCC2';
			break;
		case 11:
		case 12:
			//showers
			conditionsImageClass = 'diw-cloud-drizzle-sun-2';
			contentBg = '#8AB3CF';
			break;
		case 23:
			//breezy
			conditionsImageClass = 'diw-sun';
			contentBg = '#6ACFE1';
			break;
		case 26:
			//cloudy
			conditionsImageClass = 'diw-clouds';
			contentBg = '#8AB3CF';
			break;
		case 27:
			//mostly cloudy night
			conditionsImageClass = 'diw-clouds';
			contentBg = '#8AB3CF';
			break;
		case 28:
			//mostly cloud day
			conditionsImageClass = 'diw-clouds';
			contentBg = '#8AB3CF';
			break;
		case 29:
		case 30:
			//Partly Cloudy
			conditionsImageClass = 'diw-cloud-sun';
			contentBg = '#519ccb';
			break;
		case 31:
			conditionsImageClass = 'diw-moon-stars';
			contentBg = '#2F5DB3';
			break;
		case 32:
			//sunny
			conditionsImageClass = 'diw-sun';
			contentBg = '#6ACFE1';
			break;
		case 33:
			//mostly clear (night) - fair
			conditionsImageClass = 'diw-moon-stars';
			contentBg = '#2F5DB3';
			break;
		case 34:
			//mostly sunny
			conditionsImageClass = 'diw-sun';
			contentBg = '#6ACFE1';
			break;
		case 39:
			//scattered thunderstorms with some rain
			conditionsImageClass = 'diw-cloud-drizzle-lightning';
			contentBg = '#A4BCC2';
			break;
		case 47:
			// isolated thundershowers
			conditionsImageClass = 'diw-cloud-rain-lightning';
			contentBg = '#A4BCC2';
			break;
		default:
			conditionsImageClass = 'test'
			contentBg = '#ACBDCF';
			break;
	}
	return [conditionsImageClass, contentBg];
}

function getsWeather(city, unitMes) {
	$.simpleWeather({
		location: city,
		woeid: '',
		unit: unitMes,

		success: function (weather) {

			// ---- For testing the weather code ----
			//alert(weather.code);
			//alert(weather.currently);
			//alert(weather.forecast[1].code);

			var conditionArr0 = conditionsImage(weather.code);
			var conditionArr1 = conditionsImage(weather.forecast[1].code);
			var conditionArr2 = conditionsImage(weather.forecast[2].code);
			var conditionArr3 = conditionsImage(weather.forecast[3].code);

			loc = weather.city + ', ' + weather.region;
			html = '<h3>Now</h3><p>' + returnsDate() + '</p><p id="city-reading">' + weather.city + ', ' + weather.region + '</p>';
			html += '<div class="icon ' + conditionArr0[0] + '"></div>';
			html += '<i class="icon-' + weather.code + '"></i><h2 id="temperature-reading">' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
			html += '<h6 class="currently">' + weather.currently + '</h6>';

			forecast1 = '<h4>' + weather.forecast[1].day + '</h4>';
			forecast1 += '<div class="icon-sm ' + conditionArr1[0] + '"></div>';
			forecast1 += '<h6>H: ' + weather.forecast[1].high + '</h6>';
			forecast1 += '<h6>L: ' + weather.forecast[1].low + '</h6>';

			forecast2 = '<h4>' + weather.forecast[2].day + '</h4>';
			forecast2 += '<div class="icon-sm ' + conditionArr2[0] + '"></div>';
			forecast2 += '<h6>H: ' + weather.forecast[2].high + '</h6>';
			forecast2 += '<h6>L: ' + weather.forecast[2].low + '</h6>';

			forecast3 = '<h4>' + weather.forecast[3].day + '</h4>';
			forecast3 += '<div class="icon-sm ' + conditionArr3[0] + '"></div>';
			forecast3 += '<h6>H: ' + weather.forecast[3].high + '</h6>';
			forecast3 += '<h6>L: ' + weather.forecast[3].low + '</h6>';

			//$("input[name=locSearch]").val(loc);
			$("#weather").html(html);
			$(".today").css('background-color', conditionArr0[1]);
			$("#1").html(forecast1);
			$("#2").html(forecast2);
			$("#3").html(forecast3);
			currentLocation = weather.city;

		},
		error: function (error) {
			loc = '<h5><button id="search"><i class="fa fa-search" id="search-icon"></i></button></h5>';
			html = '<p>Today</p><p><strong>' + returnsDate() + '</strong></p>';
			html += '<div class="icon ' + ' ' + '"></div>';
			html += '<h2><strong><i class="icon-' + ' ' + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</strong></h2>';
			html += '<h6 class="currently">' + ' ' + '</h6>';
			$("#location").html(loc);
			$("#weather").html(html);
			$(".today").css('background-color', conditionArr0[1]);
		}
	});
}

$(document).ready(function () {

	getsWeather('seattle, wa', 'f');

	$("#locSearchBtn").click(function () {
		getsWeather(document.getElementById('locSearch').value, 'f');
		return false;
	});
	$("#locSearchForm").submit(function () {
		getsWeather(document.getElementById('locSearch').value, 'f');
		return false;
	});
	$('input[type=radio][name=measurement]').change(function () {
		if (this.value == 'far') {
			getsWeather(currentLocation, 'f');
		} else if (this.value == 'cel') {
			getsWeather(currentLocation, 'c');
		}
	});
	$('#about-btn').click(function () {
		$("#about").slideToggle(300);
	})
});