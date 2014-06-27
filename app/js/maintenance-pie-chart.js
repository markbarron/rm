	$(function() {

		// Example Data

		//var data = [
		//	{ label: "Series1",  data: 10},
		//	{ label: "Series2",  data: 30},
		//	{ label: "Series3",  data: 90},
		//	{ label: "Series4",  data: 70},
		//	{ label: "Series5",  data: 80},
		//	{ label: "Series6",  data: 110}
		//];

		var data = [
			{ label: "Maintenance Fees",  data: [[1,12]], color: "#13C4A5"},
			{ label: "Rent Collected",  data: [[1,82]], color: "#30a0eb"}
		];

		//var data = [
		//	{ label: "Series A",  data: 0.2063},
		//	{ label: "Series B",  data: 38888}
		//];

		// Randomly Generated Data

		// var data = [],
		//	series = Math.floor(Math.random() * 6) + 3;

		//for (var i = 0; i < series; i++) {
		//	data[i] = {
		//		label: "Series" + (i + 1),
		//		data: Math.floor(Math.random() * 100) + 1
		//	}
		//}

		var placeholder = $("#pie-chart");

		$("#example-1").click(function() {

			placeholder.unbind();

			$("#title").text("Default pie chart");
			$("#description").text("The default pie chart with no options set.");

			$.plot(placeholder, data, {
				series: {
					pie: { 
						show: true
					}
				}
			});

			setCode([
				"$.plot('#pie-chart', data, {",
				"    series: {",
				"        pie: {",
				"            show: true",
				"        }",
				"    }",
				"});"
			]);
		});

		$("#pie-chart").click(function() {

			placeholder.unbind();

			$("#title").text("Donut Hole");
			$("#description").text("A donut hole can be added.");

			$.plot(placeholder, data, {
				series: {
					pie: { 
						innerRadius: 0.5,
						show: true,
						label: {
							show: true
						}
					}
				}
			});

			setCode([
				"$.plot('#pie-chart', data, {",
				"    series: {",
				"        pie: {",
				"            innerRadius: 0.5,",
				"            show: true",
				"        }",
				"    }",
				"});"
			]);
		});

		// Show the initial default chart

		$("#pie-chart").click();
	});

	// A custom label formatter used by several of the plots

	function labelFormatter(label, series) {
		return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
	}

	//

	function setCode(lines) {
		$("#code").text(lines.join("\n"));
	}