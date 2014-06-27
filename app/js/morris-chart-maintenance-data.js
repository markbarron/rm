new Morris.Area({
	// ID of the element in which to draw the chart.
	element: 'myfirstchart',
	// Chart data records -- each entry in this array corresponds to a point on the chart
	data: [
		{ month: "2013-01", fees: 9321.72 },
		{ month: "2013-02", fees: 8723.22 },
		{ month: "2013-03", fees: 10052.29 },
		{ month: "2013-04", fees: 8244.12 },
		{ month: "2013-05", fees: 6113.87 },
		{ month: "2013-06", fees: 5212.55 },
		{ month: "2013-07", fees: 5198.56 }
	],
	// The name of the data record attribute that contains x-values.
	xkey: 'month',
	// A list of names of data record attributes that contain y-values.
	ykeys: ['fees'],
	// Labels for the ykeys -- will be displayed when you hover over the chart
	labels: ['Series A']
});