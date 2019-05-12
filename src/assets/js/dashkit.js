//
// Plugin instantiation (optional) ==================================
//

'use strict';

// Header
//
// Header card chart

var Header = (function() {

  //
  // Variables
  //

  var $headerChart = $('#headerChart');


  //
  // Methods
  //

  function init($chart) {

    // Create chart
    var headerChart = new Chart($chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            gridLines: {
              color: ThemeCharts.colors.gray[900],
              zeroLineColor: ThemeCharts.colors.gray[900]
            },
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '$' + value + 'k';
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

              content += '<span class="popover-body-value">$' + yLabel + 'k</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Performance',
          data: [0,10,5,15,10,20,15,25,20,30,25,40]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', headerChart);

  };


  //
  // Events
  //

  if ($headerChart.length) {
    init($headerChart);
  }

})();

//
// macroNutrientsChart

var Header = (function() {

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
            gridLines: {
              color: ThemeCharts.colors.gray[900],
              zeroLineColor: ThemeCharts.colors.gray[900]
            },
            ticks: {
              callback: function(value) {
                if ( !(value % 5) ) {
                  return value + ' %';
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

              content += '<span class="popover-body-value">' + yLabel + ' %</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Macro-nutrients',
          data: [7,5,10,8,10,6,6]
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
                  return '$' + value + 'k'
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

              content += '<span class="popover-body-value">$' + yLabel + 'k</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Performance',
          data: [0,10,5,15,10,20,15,25,20,30,25,40]
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


// Performance alias
//
// Performance alias card chart

var PerformanceAlias = (function() {

  //
  // Variables
  //

  var $performanceChartAlias = $('#performanceChartAlias');


  //
  // Methods
  //

  function init($chart) {

    // Create chart
    var performanceChartAlias = new Chart($chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '$' + value + 'k'
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

              content += '<span class="popover-body-value">$' + yLabel + 'k</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Performance',
          data: [0,10,5,15,10,20,15,25,20,30,25,40]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', performanceChartAlias);
  }


  //
  // Events
  //

  if ($performanceChartAlias.length) {
    init($performanceChartAlias);
  }

})();


// Orders
//
// Orders card chart

var Orders = (function() {

  //
  // Variables
  //

  var $ordersChart = $('#ordersChart');
  var $ordersSelect = $('[name="ordersSelect"]');


  //
  // Methods
  //

  // Init chart
  function initChart($chart) {

    // Create chart
    var ordersChart = new Chart($chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '$' + value + 'k'
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

              content += '<span class="popover-body-value">$' + yLabel + 'k</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales',
          data: [25,20,30,22,17,10,18,26,28,26,20,32]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', ordersChart);
  }

  // Toggle select
  function toggleSelect($this) {

    if ( $this.attr('id') == 'ordersSelectAll' ) {

      if ( $this.is(':checked') ) {
         $ordersSelect.prop('checked', true);
       } else {
         $ordersSelect.prop('checked', false)
       }
    }
  }


  //
  // Events
  //

  // Init chart
  if ($ordersChart.length) {
    initChart($ordersChart);
  }

  // Toggle select
  $ordersSelect.on('change', function() {
    toggleSelect($(this));
  });

})();


// Orders alias
//
// Orders alias card chart

var OrdersAlias = (function() {

  //
  // Variables
  //

  var $ordersChartAlias = $('#ordersChartAlias');


  //
  // Methods
  //

  // Init chart
  function init($chart) {

    // Create chart
    var ordersChartAlias = new Chart($chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '$' + value + 'k'
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

              content += '<span class="popover-body-value">$' + yLabel + 'k</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales',
          data: [25,20,30,22,17,10,18,26,28,26,20,32]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', ordersChartAlias);
  }


  //
  // Events
  //

  if ($ordersChartAlias.length) {
    init($ordersChartAlias);
  }

})();


// Devices
//
// Devices card chart

var Devices = (function() {

  //
  // Variables
  //

  var $devicesChart = $('#devicesChart');


  //
  // Methods
  //

  // Init chart
  function init($chart) {

    // Create chart
    var devicesChart = new Chart($chart, {
      type: 'doughnut',
      options: {
        tooltips: {
          callbacks: {
            title: function(item, data) {
              var title = data.labels[item[0].index];
              return title;
            },
            label: function(item, data) {
              var value = data.datasets[0].data[item.index];
              var content = '';

              content += '<span class="popover-body-value">' + value + '%</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Fat', 'Protein', 'Carbs'],
        datasets: [{
          data: [70, 25, 5],
          backgroundColor: [
            ThemeCharts.colors.bgGreenLight,
            ThemeCharts.colors.bgOrangeLight,
            ThemeCharts.colors.bgRedLight
          ],
          hoverBorderColor: ( ThemeCharts.colorScheme == 'dark' ) ? ThemeCharts.colors.gray[800] : ThemeCharts.colors.white
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', devicesChart);
  }

  // Generate legend
  function generateLegend($chart) {
    var content = $chart.data('chart').generateLegend();
    var legend = $chart.data('target');
    var $legend = $(legend);

    $legend.html(content);
  }


  //
  // Events
  //

  if ($devicesChart.length) {

    // Init chart
    init($devicesChart);

    // Generate legend
    generateLegend($devicesChart);
  }

})();


// Weekly hours
//
// Weekly hours card chart

var WeeklyHours = (function() {

  //
  // Variables
  //

  var $weeklyHoursChart = $('#weeklyHoursChart');


  //
  // Methods
  //

  function init($chart) {

    // Create chart
    var weeklyHoursChart = new Chart($chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return value + 'hrs'
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

              content += '<span class="popover-body-value">' + yLabel + 'hrs</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [21, 12, 28, 15, 5, 12, 17, 2]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', weeklyHoursChart);
  }


  //
  // Events
  //

  if ($weeklyHoursChart.length) {
    init($weeklyHoursChart);
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
        max: 100,
        round: true,
        shadow: {
            width: 0
        },
        series: [
          {
            value: 24,
            color: '#FDC2CC',
          },
          {
            value: 42,
            color: '#fce8b3',
          },
          {
            value: 74,
            color: '#47E6B1',
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
          stroke: {
            width: 6,
            gap: 1
          },
          series: d.series
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
