// Fetching data - API/gist
// fetch('https://gist.githubusercontent.com/joordy/a143d68573aa3dcaadcb34defb2745a4/raw/43267958a9135359da69478b089e0c360b441af3/ringring.json')
// 	.then(response => response.json())
//     .then((dataRingRing) => console.log('dataRingRing=', dataRingRing));

// let dataRingRing;

const endpointOne = 'https://gist.githubusercontent.com/joordy/a143d68573aa3dcaadcb34defb2745a4/raw/43267958a9135359da69478b089e0c360b441af3/ringring.json'

const fetchedData = fetch(endpointOne).then((response) => response.json()); // Parses JSON data


// Getting both datasets through an Promise.all (is solved when all promises above get resolved)
fetchedData.then((response) => {
    let receivedData = response;
	filteredDataset(receivedData);
});

// Clean data - makes new array with needed data variables
function filteredDataset(nastyData) {
	const cleanData = nastyData.map((element) => {
        const object = {};
       console.log(nastyData[0].geometry)
        object.geometry.coordinates = element.geometry.coordinates;
        object.properties = element.properties;
         
        console.log('cleanData', cleanData)
		return object;
	});
}
	// const combinedData =[cleanDataDay]; 


// d3 code

    // // D3 implement

    // function nlData() {
	// 	return fetch(
	// 		'https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson'
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			return data;
	// 		});
	// }

	// nlData().then((data) => {
	// 	const path = d3.geoPath();
	// 	const zoom = d3.zoom().scaleExtent([1, 30]).on('zoom', zoomed); // Zoom function

	// 	const width = 975;
	// 	const height = 610;

	// 	const svg = d3
	// 		.select('svg')
	// 		.attr('viewBox', [0, 0, width, height])
	// 		.on('click', reset);

	// 	const g = svg.append('g');

	// 	const projection = d3
	// 		.geoMercator()
	// 		.scale(6000)
	// 		.center([5.116667, 52.17]);
	// 		// .center([52.206720, 5.154676]);
	// 	const pathGenerator = path.projection(projection);

	// 	const gemeentes = g
	// 		.append('g')
	// 		.attr('class', 'gemeentes')
	// 		.attr('fill', '#444')
	// 		.attr('cursor', 'pointer')
	// 		.selectAll('path')
	// 		.data(topojson.feature(data, data.objects.gemeente_2020).features)
	// 		.join('path')
	// 		.on('click', clicked)
	// 		.attr('d', path);

	// 			svg.call(zoom);

	// 	function reset() {
	// 		gemeentes.transition().style('fill', null);
	// 		svg.transition()
	// 			.duration(750)
	// 			.call(
	// 				d3.zoom.transform,
	// 				d3.zoomIdentity,
	// 				d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
	// 			);
	// 	}

	// 	function clicked(event, d) {
	// 		const [[x0, y0], [x1, y1]] = path.bounds(d);
	// 		event.stopPropagation();
	// 		gemeentes.transition().style('fill', null);
	// 		d3.select(this).transition().style('fill', 'rgb(107, 105, 105)');
	// 		svg.transition()
	// 			.duration(750)
	// 			.call(
	// 				zoom.transform,
	// 				d3.zoomIdentity
	// 					.translate(width / 2, height / 2)
	// 					.scale(
	// 						Math.min(
	// 							8,
	// 							0.9 /
	// 								Math.max(
	// 									(x1 - x0) / width,
	// 									(y1 - y0) / height
	// 								)
	// 						)
	// 					)
	// 					.translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
	// 				d3.pointer(event, svg.node())
	// 			);
	// 	}

	// 	// Not needing - Zoom function
	// 	function zoomed(event) {
	// 		const { transform } = event;
	// 		g.attr('transform', transform);
	// 		g.attr('stroke-width', 1 / transform.k);
	// 	}
	
	// 	dots(dataRingRing);
	// 	console.log("Data=", dataRingRing)
	// 	// console.log("combinedData:", combinedData)
	// });

	// // ------------------------------- D3 DATA PLOTS below ----------------------------------------------

	// // Formatter for map plots
	// function dots (dataRingRing) {
	// 	const g = d3.select('g')
	// 	const projection = d3.geoMercator().scale(6000).center([5.116667, 52.17]);
	
	// 	g.selectAll('circle')
	// 	.data(dataRingRing)
	// 	.enter()
	// 	.append('circle')
	// 	.attr('cx', function (d) {return projection([d.point.lng, d.point.lat])[0];})
	// 	.attr('cy', function (d) {return projection([d.point.lng, d.point.lat])[1];})
	// 	.attr('r', '.2px')
	// 	.attr('class', 'circle')
	// 	.attr('fill', 'rgba(10,10,230,0.623)')
	// 	.attr('stroke', 'rgb(10,10,235)')}
				

	// // UPDATE PATTERN for the data plots after a clicked filterbutton
	// // function reassignDots(data, color, strokeColor) {
	// // 	const dots = g.selectAll('circle') 
	// // 					.data(data) // Assign new data to the dots

	// // 	dots
	// // 		.attr('cx', function (d) {return projection([d.point.lng, d.point.lat])[0];})
	// // 		.attr('cy', function (d) {return projection([d.point.lng, d.point.lat])[1];})
	// // 		.attr('fill', color)
	// // 		.attr('stroke', strokeColor)

	// // 	dots.enter()
	// // 		.append('circle')
	// // 		.attr('r', '.2px')
	// // 		.attr('fill', color)
	// // 		.attr('stroke', strokeColor)
	// // 		.attr('cx', function (d) {return projection([d.point.lng, d.point.lat])[0];})
	// // 		.attr('cy', function (d) {return projection([d.point.lng, d.point.lat])[1];})
					
	// // 	dots.exit()
	// // 		.remove()
	// // 	}