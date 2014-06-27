$(function() {

  var data = [ ["Jan", 12400], ["Feb", 9600], ["Mar", 13500], ["Apr", 12900], ["May", 11700], ["Jun", 7600], ["Jul", 7200], ["Aug", 6400], ["Sep", 6700], ["Oct", 5500], ["Nov", 6200], ["Dec", 6400] ];
  $.plot("#bar-chart", [ data ], {
    series: {
        bars: {
          show: true,
          barWidth: 0.5,
          align: "center",
          fill: true,
          fillColor: {
            colors: [
              { opacity: 1 },
              { opacity: 0.8 }
            ]
          }
        },
        shadowSize: 0,
    },
    grid: {
      hoverable: true,
      clickable: true,
      tickColor: "#f9f9f9",
      borderWidth: 0
    },
    legend: {
      labelBoxBorderColor: "#ffffff"
    },
    colors: [
      "#30a0eb"
    ],
    xaxis: {
      mode: "categories",
      tickLength: 0,
      font: {
        size: 12,
        family: "Open Sans, Arial",
        variant: "small-caps",
        color: "#697695"
      }
    },
    yaxis: {
      ticks: 3,
      tickDecimals: 0,
      font: {
        size: 12,
        color: "#9da3a9"
      }
    }
  });
});

function showTooltip(x,y, contents) {
  $('<div id="tooltip">' + contents + '</div>').css ( {
    position: 'absolute',
    display: 'none',
    top: y - 30,
    left: x - 50,
    color: "#fff",
    padding: '2px 5px',
    'border-radius': '6px',
    'background-color': '#000',
    opacity: 0.80
  }).appendTo("body").fadeIn(200);
}
var previousPoint = null;
$("#bar-chart").bind("plothover", function (event, pos, item) {
  if(item) {
    if(previousPoint != item.dataIndex) {
      previousPoint = item.dataIndex;

      $("#tooltip").remove();
      var x = item.datapoint[0].toFixed(0),
        y = item.datapoint[1].toFixed(0);

      var month = item.series.xaxis.ticks[item.dataIndex].label;

      showTooltip(item.pageX, item.pageY, month + 
        " : $" + y);
    }
  }
  else {
    $("#tooltip").remove();
    previousPoint = null;
  }
});