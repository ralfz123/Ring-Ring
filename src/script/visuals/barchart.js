const endpointTwo =
	'https://gist.githubusercontent.com/ralfz123/0a48d1cd9b3155c7442fe98332a9031e/raw/b8ccaf6949381f89aa90a4eb26018c912e509a5b/accidents_data-3.geojson';

// let data = []; // global data variable

// fetch(endpointTwo)
// 	.then((response) => response.json())
// 	.then((cycleAccidentsData) => data.push(cycleAccidentsData));

// console.log(data);

window.onload = async () => {
	const response = await fetch(endpointTwo);
	const data = await response.json();

	init(data);
};

function init(data) {
	console.log('data = ', data);

	let dataArray = data.features;
	dataArray.forEach(function (item) {
		let age = item.properties.age;
		// console.log(age);

		// Set value to correct category
		if (age > 0 && age <= 18) {
			// add to category 0-18
			console.log('0-18');
		} else if (age > 18 && age <= 30) {
			// add to category 18-30
			console.log('18-30');
		} else if (age > 30 && age <= 65) {
			// add to category 30-65
			console.log('30-65');
		} else if (age > 65) {
			// add to category 65+
			console.log('65+');
		} else {
			// null;
			console.log('Leeftijd onbekend');
		}
	});
}

var ctx = document.getElementById('myChart').getContext('2d');
var myBarChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['0-18', '18-30', '30-65', '65+'],
		datasets: [
			{
				label: 'Man',
				backgroundColor: '#3580cf',
				fontColor: '#f2f2f2',
				// data: data.features[2].properties.gender,
				data: [1, 1, 5, 0],
				borderWidth: 1,
			},
			{
				label: 'Vrouw',
				backgroundColor: '#52556a',
				fontColor: '#f2f2f2',
				data: [2, 11, 6, 0],
				borderWidth: 1,
			},
		],
	},
	options: {
		plugins: {
			datalabels: {
				anchor: 'end',
				color: 'white',
			},
		},
		legend: {
			position: 'bottom',
			labels: {
				fontFamily: "'Montserrat', sans-serif",
				boxWidth: 12,
				usePointStyle: true,
				fontColor: '#f2f2f2',
			},
			onHover: function (e) {
				e.target.style.cursor = 'pointer';
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
					categoryPercentage: 1.0,
					barPercentage: 0.1,
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
