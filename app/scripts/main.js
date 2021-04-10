$(".dropdown").dropdown();

$(".ui.labeled.icon.sidebar").sidebar("toggle");

$(".ui.sidebar").first().sidebar("attach events", ".ui.icon.item .bars");

$(".ui.right.aligned.header").each(function () {
  $(this)
    .prop("Counter", 0.0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 1000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

$(".count1").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: parseFloat($(this).text()),
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(this).text(now.toFixed(3) + "K");
        },
      }
    );
});

$(".count1").on("click", function () {
  $(this).css("color", "red");
});

// $(".custom-checkbox").on('click', 'input[type="checkbox"]', function () {
//   $(this).next('label').toggleClass('highlight', this.checked);
// });

// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'bar',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug','Sep','Oct','Nov','Dec'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [725,199, 300, 400, 500, 600, 700, 800, 301, 110, 250, 378]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });
////////////////////////////////////////////////////////////

var ctx1 = document.getElementById("myChart1").getContext("2d");

var gradientStroke = ctx1.createLinearGradient(500, 0, 100, 0,200,0);
gradientStroke.addColorStop(1, "#3f51b5");
gradientStroke.addColorStop(0.5, "#4baf4f");
gradientStroke.addColorStop(0.2, "#e54919");
gradientStroke.addColorStop(0, "#ff9f00");
var myChart1 = new Chart(ctx1, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Line",
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 10,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 1,
        pointRadius: 0,
        fill: false,
        borderWidth: 9,

        data: [60, 53, 55, 54, 56, 45, 61, 52, 59, 50, 58],

        type: "line",
        order: 1,
      }, {
        label: "Bar",
        data: [70, 70, 70, 70, 70, 70, 70, 70],
        backgroundColor: "white",
        order: 2,
      },
      
    ],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  },
  linearGradientLine: true,
  label: false,
  options: {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          //get the concerned dataset
          var dataset = data.datasets[tooltipItem.datasetIndex];
          //calculate the total of this data set
          var total = dataset.data.reduce(function (
            previousValue,
            currentValue,
            currentIndex,
            array
          ) {
            return previousValue + currentValue;
          });
          //get the current items value
          var currentValue = dataset.data[tooltipItem.index];
          //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
          var percentage = Math.floor((currentValue / total) * 100 + 0.5);

          return percentage + "%";
        },
      },
    },

    responsive: false,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          barPercentage: 1,
          categoryPercentage: 1,
        },
      ],
      yAxes: [
        {
          stacked: true,
          ticks: {// по y забрати значення
            display: false
          },
          gridLines: {
          display: false,
          },
        },
      ],
    },
  },
});

////////////////////////////////////////////////////////////

var ctx3 = document.getElementById("myChart3").getContext("2d");
var myChart3 = new Chart(ctx3, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        borderWidth: -2,
        label: "Customers",
        backgroundColor: "#3f40b5",
        hoverBackgroundColor: "#4640c9",
        data: [470, 230, 235, 235, 500, 390, 480, 480, 480, 400, 480, 480],
      },
      {
        borderWidth: -2,
        label: "Users",
        backgroundColor: "#3f53b5",
        hoverBackgroundColor: "#4680c9",
        data: [270, 50, 60, 70, 160, 130, 300, 180, 205, 150, 150, 170],
      },
    ],
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
});

///////////////////
var ctx2 = document.getElementById("myChart2").getContext("2d");
var myChart2 = new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["Chrome", "Safari", "Firefox"],
    datasets: [
      {
        data: [64, 24, 12],
        backgroundColor: ["#3f51b5", "#00ffff", " #4baf4f"],
        borderWidth: 0,
        // borderColor: '#ddd'
      },
    ],
  },
  options: {
    rotation: 1,

    responsive: false,
    title: {
      display: true,
      padding: 5,
    },
    legend: {
      display: true,
      position: "right",
      labels: {
        boxWidth: 20,
        fontColor: "#111",
        padding: 15,
      },
    },
    //   tooltips: {
    //       enabled: false
    //   },
    //   plugins: {
    //       datalabels: {
    //           color: '#111',
    //           textAlign: 'center',
    //           font: {
    //               lineHeight: 1.6
    //           },
    //           formatter: function(value, ctx) {
    //               return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
    //           }
    //       }
    //   }
  },
});
