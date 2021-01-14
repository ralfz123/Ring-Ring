Chart.defaults.global.defaultFontColor = 'red';

var ctx = document.getElementById('myChart').getContext('2d');
var myBarChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['0-18', '18-30', '30-65', '65+'],
		datasets: [
			{
				label: 'Man',
				backgroundColor: '#3580cf',
				data: [3, 7, 4, 6],
			},
			{
				label: 'Vrouw',
				backgroundColor: '#52556a',
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
			position: 'bottom',
			labels: {
				fontFamily: "'Montserrat', sans-serif",
				boxWidth: 12,
				usePointStyle: true,
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
					gridLines: {
						drawBorder: false,
						color: '#5252529a',
					},
					scaleLabel: {
						display: true,
						fontFamily: "'Montserrat', sans-serif",
						fontColor: '#f2f2f2',
						fontSize: 12,
						labelString: 'Ongelukken',
					},
					ticks: {
						beginAtZero: true,
						fontFamily: "'Montserrat', sans-serif",
						fontColor: '#f2f2f2',
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						display: false,
					},
					scaleLabel: {
						display: true,
						fontFamily: "'Montserrat', sans-serif",
						fontColor: '#f2f2f2',
						fontSize: 12,
						labelString: 'Leeftijd',
					},
					barPercentage: 1,
					ticks: {
						fontFamily: "'Montserrat', sans-serif",
						fontColor: '#f2f2f2',
					},
				},
			],
		},
	},
});
