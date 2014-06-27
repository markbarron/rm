$(function() {
	var options = {
		lines: {
			show: true,
			lineWidth: 1,
			fill: true,
			fillColor: {
				colors: [ 
					{ opacity: 0.05 },
					{ opacity: 0.09 }
				]
			}
		},
		points: {
			show: true,
			lineWidth: 2,
			radius: 3
		},
		shadowSize: 0,
		stack: true,
		grid: {
			hoverable: true,
			clickable: true,
			tickColor: "#f9f9f9",
			borderWidth: 0
		},
		legend: {
			labelBoxBorderColor: "#ffffff"
		},
		colors: [
			"#30a0eb", "#a7b5c5"
		],
		xaxis: {
			ticks: [ [1,"Jan"], [2, "Febz"], [3, "Mar"], [4, "Apr"], [5, "May"], [6, "Jun"],
	  			     [7, "Jul"], [8, "Aug"], [9, "Sep"], [10, "Oct"], [11, "Nov"], [12, "Dec"] ],
			font: {
				size: 12,
				family: "Open Sans, Arial",
				variant: "small-caps",
				color: "#9da3a9"
			}
		},
		yaxis: {
			ticks: 3,
			tickDecimals: 0,
			font: {
				size: 12,
				color: "#9da3a9"
			}
		}
	};

	var data = [];
	$.plot("#line-chart", data, options);

	// Fetch one series, adding to what we already have
	var alreadyFetched = {};

	$("button.fetch-series").click(function() {
		var button = $(this);

		// Find the URL in the link right next to us, then fetch the data
		var dataurl = button.siblings("a").attr("href");

		function onDataReceived(series) {
			// Extract the first coordinate pair; jQuery has parsed it, so
			// the data is now just an ordinary Javascript object
			var firstCoordinate = "(" + series.data[0][0] + ", " + series.data[0][1] + ")";

			// Push the new data onto our existing array
			if(!alreadyFetched[series.label]) {
				alreadyFetched[series.label] = true;
				data.push(series);
			}
			$.plot("#line-chart", data, options);
		}
		$.ajax({
			url: dataurl,
			type: "GET",
			dataType: "json",
			success: onDataReceived
		});
	});

	// Initiate a recurring data update
	// skipped this part

	// Load the first series by default, so we don't have an empty plot
	$("button.fetch-series:first").click();
});

function showTooltip(x,y, contents) {
	$('<div id="tooltip">' + contents + '</div>').css ( {
		position: 'absolute',
		display: 'none',
		top: y - 30,
		left: x - 50,
		color: "#fff",
		padding: '2px 5px',
		'border-radius': '6px',
		'background-color': '#000',
		opacity: 0.80
	}).appendTo("body").fadeIn(200);
}
var previousPoint = null;
$("#line-chart").bind("plothover", function (event, pos, item) {
	if(item) {
		if(previousPoint != item.dataIndex) {
			previousPoint = item.dataIndex;

			$("#tooltip").remove();
			var x = item.datapoint[0].toFixed(0),
				y = item.datapoint[1].toFixed(0);

			var month = item.series.xaxis.ticks[item.dataIndex].label;

			showTooltip(item.pageX, item.pageY, month + 
				" " + item.series.label + ": $" + y);
		}
	}
	else {
		$("#tooltip").remove();
		previousPoint = null;
	}
});