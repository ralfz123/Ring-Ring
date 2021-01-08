var ctx = document.getElementById('myChart').getContext('2d');
var myBarChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['0-18', '18-30', '30-65', '65+'],
		datasets: [
			{
				label: 'Man',
				backgroundColor: '#5CA9BD',
				data: [3, 7, 4, 6],
			},
			{
				label: 'Vrouw',
				backgroundColor: '#576399',
				data: [4, 3, 5, 8],
				borderWidth: 1,
			},
		],
	},
	options: {
		plugins: {
			datalabels: {
				anchor: 'center',
				color: 'white',
			},
		},
		legend: {
			labels: {
				fontFamily: "'Montserrat', sans-serif",
			},
		},

		// Datavalues on top of bar - https://stackoverflow.com/a/42558204
		// animation: {
		// 	duration: 1,
		// 	onComplete: function () {
		// 		var chartInstance = this.chart,
		// 			ctx = chartInstance.ctx;

		// 		ctx.font = Chart.helpers.fontString(
		// 			Chart.defaults.global.defaultFontSize,
		// 			Chart.defaults.global.defaultFontStyle,
		// 			Chart.defaults.global.defaultFontFamily
		// 		);
		// 		ctx.textAlign = 'center';
		// 		ctx.textBaseline = 'bottom';

		// 		this.data.datasets.forEach(function (dataset, i) {
		// 			var meta = chartInstance.controller.getDatasetMeta(i);
		// 			meta.data.forEach(function (bar, index) {
		// 				var data = dataset.data[index];
		// 				ctx.fillText(data, bar._model.x, bar._model.y - 5);
		// 			});
		// 		});
		// 	},
		// },
		barValueSpacing: 20,
		scales: {
			yAxes: [
				{
					scaleLabel: {
						display: true,
						fontFamily: "'Montserrat', sans-serif",
						fontSize: 15,
						labelString: 'Ongelukken',
					},
					ticks: {
						beginAtZero: true,
						fontFamily: "'Montserrat', sans-serif",
					},
				},
			],
			xAxes: [
				{
					scaleLabel: {
						display: true,
						fontFamily: "'Montserrat', sans-serif",
						fontSize: 15,
						labelString: 'Leeftijd',
					},
					barPercentage: 1,
					ticks: {
						fontFamily: "'Montserrat', sans-serif",
					},
				},
			],
		},
	},
});

