import { dataEndpointTwo } from '../endpoint.js';

window.onload = async () => {
  const response = await fetch(dataEndpointTwo);
  const data = await response.json();

  init(data);
};

function init(data) {
  let dataArray = data.features;
  dataArray.forEach(function (item) {
    let age = item.properties.age;
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
