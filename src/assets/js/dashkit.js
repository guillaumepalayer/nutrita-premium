//
// Plugin instantiation (optional) ==================================
//

'use strict';

// Header
//
// Header card chart

var HbA1c = (function() {

  //
  // Variables
  //

  var $hba1cChart = $('#hba1cChart');


  //
  // Methods
  //

  function init($chart) {

    // Create chart
    var hba1cChart = new Chart($chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return + value + ' %'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">' + yLabel + '%</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'HbA1c Target:',
            data: [10,10,10,10,10,10,10],
            borderWidth: 1,
            borderDash: [2,5],
            borderColor: '#22C88A',
            backgroundColor: '#22C88A',
            fill: false,
          },{
          label: 'HbA1c:',
          data: [0,10,5,15,10,20,15]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', hba1cChart);

  };


  //
  // Events
  //

  if ($hba1cChart.length) {
    init($hba1cChart);
  }

})();

//
// macroNutrientsChart

var MacroNutrients = (function() {

  //
  // Variables
  //

  var $macroNutrientsChart = $('#macroNutrientsChart');


  //
  // Methods
  //

  function init($chart) {

    // Create chart
    var macroNutrientsChart = new Chart($chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return + value + ' g'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">' + yLabel + 'g</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Carbs limit:',
            data: [10,10,10,10,10,10,10],
            borderWidth: 1,
            borderDash: [2,5],
            borderColor: '#E63757',
            backgroundColor: 'rgb(255, 99, 132)',
            fill: false,
          },{
          label: 'Net Carbs:',
          data: [0,10,5,15,10,20,15]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', macroNutrientsChart);

  };


  //
  // Events
  //

  if ($macroNutrientsChart.length) {
    init($macroNutrientsChart);
  }

})();

// Devices
//
// Devices card chart

(function() {

  //
  // Variables
  //

  var chart = document.getElementById('devicesChart');


  //
  // Functions
  //

  function init(chart) {
    new Chart(chart, {
      type: 'doughnut',
      options: {
        tooltips: false,
      },
      data: {
        datasets: [{
          data: [50, 25, 25],
          backgroundColor: [
            '#47E6B1',
            '#fce8b3',
            '#FDC2CC'
          ]
        }]
      }
    });
  }


  //
  // Events
  //

  if (typeof Chart !== 'undefined' && chart) {
    init(chart);
  }

})();

// Performance
//
// Performance card chart

var Performance = (function() {

  //
  // Variables
  //

  var $performanceChart = $('#performanceChart');


  //
  // Methods
  //

  function init($chart) {

    // Create chart
    var performanceChart = new Chart($chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return + value + ' g'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">' + yLabel + 'g</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Carbs limit:',
            data: [10,10,10,10,10,10,10],
            borderWidth: 1,
            borderDash: [2,5],
            borderColor: '#E63757',
            backgroundColor: 'rgb(255, 99, 132)',
            fill: false,
          },{
          label: 'Net Carbs:',
          data: [0,10,5,15,10,20,15]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', performanceChart);
  }


  //
  // Events
  //

  if ($performanceChart.length) {
    init($performanceChart);
  }

})();


// D3 circular charts
var data = [
    {day: 'M'},
    {day: 'T'},
    {day: 'W'},
    {day: 'T'},
    {day: 'F'},
    {day: 'S'},
    {day: 'S'}
  ];
  var dateFormatter = d3.time.format("%A, %B %d, %Y");
  var mainChart = new RadialProgressChart('.main-radial-progress-chart', {
        diameter: 500,
        round: true,
        shadow: {
            width: 0
        },
        series: [
          {
            value: 5,
            color: {
                solid: '#f3a39a',
                background: 'white'
            }
          },
          {
            value: 20,
            color: {
                solid: '#fce8b3',
                background: 'white'
            }
          },
          {
            value: 70,
            color: {
                solid: '#47E6B1',
                background: 'white'
            }
          }
        ]}
  );

  d3.select('.week').selectAll('li')
      .data(data).enter()
      .append('li').on('click', function (d) {
        // Update active class, date and main chart
        d3.selectAll('.circle').classed('active', false);
        d3.select(this).select('.circle').classed('active', true);
        d3.select('.date').text(d.date);
        mainChart.update(d.series);
      })
      .append('div').attr('class', 'circle').text(function (d) {
        return d.day;
      })
      .each(function (d, i) {
        d.date = dateFormatter(getDate(i));
        d.series = [getRandom(), getRandom(), getRandom()];
        new RadialProgressChart(this.parentNode, {
          diameter: 10,
          round: true,
          shadow: {
              width: 0
          },
          stroke: {
            width: 6,
            gap: 1
          },
          series: [
            {
              value: 30,
              color: {
                  solid: '#f3a39a',
                  background: 'white'
              }
            },
            {
              value: 70,
              color: {
                  solid: '#fce8b3',
                  background: 'white'
              }
            },
            {
              value: 60,
              color: {
                  solid: '#47E6B1',
                  background: 'white'
              }
            }
          ]
        });
      });

  // Return some chronological dates
  function getDate(i) {
    var date = new Date('2015-06-16');
    date.setDate(date.getDate() + i);
    return date;
  }

  // Random int between 20-80
  function getRandom() {
    return Math.round(Math.random() * 60) + 20;
  }

  // Select monday by default
  document.querySelector('li').click();

  var progress = new RadialProgressChart('.progresscircular', {
    diameter: 48,
     stroke: {
       width: 6,
       gap: 1
     },
    round: true,
    shadow: {
        width: 0
    },
   series: [{
     value: 0,
     color: '#2C7BE5'
   }],
   center: function(p) {
     return p + ' %'
   }
 });

 function getRandom(min, max) {
   return Math.random() * (max - min) + min;
 }

 function loop(p) {
   if (p > 100) {
     setTimeout(function() {
       loop(0)
     }, 3000)
   } else {
     progress.update(p);
     setTimeout(function() {
       loop(p + 1)
     }, 90)
   }
 }

 loop(10);
