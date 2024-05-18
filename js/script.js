// Doughnut chart 1
const ctx1 = document.getElementById("doughnut-chart1").getContext("2d");
new Chart(ctx1, {
  type: "doughnut",
  data: {
    labels: ['مستحق', 'غير مستحق'],
    datasets: [{
      label: "Projects",
      weight: 9,
      cutout: 60,
      tension: 0.9,
      pointRadius: 2,
      borderWidth: 2,
      backgroundColor: ['#03a9f4', '#3A416F'],
      data: [2001000, 1681650],
      fill: false
    }]
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          display: false
        }
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false
        },
        ticks: {
          display: false
        }
      },
    },
  }
});

// Doughnut chart 2
const ctx2 = document.getElementById("doughnut-chart2").getContext("2d");
new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ['متوسط', 'مرتفع', 'منخفض', 'غير مهتم'],
    datasets: [{
      label: "Projects",
      weight: 9,
      cutout: 60,
      tension: 0.9,
      pointRadius: 2,
      borderWidth: 2,
      backgroundColor: ['#03a9f4', '#3A416F', '#fb8c00', '#a8b8d8'],
      data: [502000, 9000, 404000, 389000],
      fill: false
    }]
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false
        },
        ticks: {
          display: false
        }
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
});

/*line charts*/ 
 // target chart
 var targetLineChart = document.getElementById("line-chart-target").getContext("2d");

 new Chart(targetLineChart, {
   type: "line",
   data: {
     labels: ["January", "February", "March", "April", "May", "June", "July", "August", "Sptember", "October", "November", "December"],
     datasets: [{
         label: "المستهدف",
         tension: 0.4,
         borderWidth: 0,
         pointRadius: 2,
         pointBackgroundColor: "#e3316e",
         borderColor: "#e3316e",
         borderWidth: 3,
         backgroundColor: 'transparent',
         data: [8.6, 8.0, 8.6, 8.3, 8.6, 8.3, 8.6, 8.6, 8.3, 8.6, 8.3, 8.6],
         maxBarThickness: 6
       },
       {
         label: "المحقق",
         tension: 0.4,
         borderWidth: 0,
         pointRadius: 2,
         pointBackgroundColor: "#3A416F",
         borderColor: "#3A416F",
         borderWidth: 3,
         backgroundColor: 'transparent',
         data: [1.7, 1.7, 1.5, 0.2, 0.2, 0.3, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
         maxBarThickness: 6
       },
       {
         label: "المتوقع",
         tension: 0.4,
         borderWidth: 0,
         pointRadius: 2,
         pointBackgroundColor: "#17c1e8",
         borderColor: "#17c1e8",
         borderWidth: 3,
         backgroundColor: 'transparent',
         data: [0.1, 0.1, 0.2, 0.3, 0.0, 0.0, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
         maxBarThickness: 6
       },
     ],
   },
   options: {
     responsive: true,
     maintainAspectRatio: false,
     plugins: {
       legend: {
         display: true,
       },
       datalabels: {
        anchor: 'end',  // Position the labels at the end of the points
        align: 'top',   // Align the labels at the top of the points
        color: function(context) {
          // Return different colors for different datasets
          let index = context.datasetIndex;
          let colors = ["#e3316e", "#3A416F", "#17c1e8"];
          return colors[index];
        },
        font: {
          size: 12,
          weight: 'bold'
        }
      }
     },
     interaction: {
       intersect: false,
       mode: 'index',
     },
     scales: {
       y: {
         grid: {
           drawBorder: false,
           display: true,
           drawOnChartArea: true,
           drawTicks: false,
           borderDash: [5, 5]
         },
         ticks: {
           display: true,
           padding: 10,
           color: '#b2b9bf',
           font: {
             size: 14,
             family: "Open Sans",
             style: 'normal',
             lineHeight: 2
           },
         }
       },
       x: {
         grid: {
           drawBorder: false,
           display: true,
           drawOnChartArea: true,
           drawTicks: true,
           borderDash: [5, 5]
         },
         ticks: {
           display: true,
           color: 'grey',
           padding: 10,
           font: {
             size: 14,
             family: "Open Sans",
             style: 'bolder',
             lineHeight: 2
           },
         }
       },
     },
   },
   plugins: [ChartDataLabels]
 });