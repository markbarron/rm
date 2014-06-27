$(function() {

  var data = [ ["$2,750", 91701], ["$2,800", 91702], ["$2,850", 91703], ["$2,900", 91704], ["$2,950", 91705], ["$3,000", 91706], ["$3,050", 91707], ["$3,100", 91708], ["$3,150", 91709], ["$3,200", 91710] ];
  $.plot("#rent-bar-chart", [ data ], {
    series: {
        bars: {
          show: true,
          barWidth: 0.5,
          align: "center",
          fill: true,
          horizontal: true,
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
      "#13C4A5"
    ],
    xaxis: {
      mode: "categories",
      tickLength: 0,
      font: {
        size: 12,
        family: "Open Sans, Arial",
        color: "#697695"
      }
    },
    yaxis: {
      ticks: 10,
      tickSize: 1,
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
$("#rent-bar-chart").bind("plothover", function (event, pos, item) {
  if(item) {
    if(previousPoint != item.dataIndex) {
      previousPoint = item.dataIndex;

      $("#tooltip").remove();
      var x = item.datapoint[0].toFixed(0),
        y = item.datapoint[1].toFixed(0);

      var month = item.series.xaxis.ticks[item.dataIndex].label;

      showTooltip(item.pageX, item.pageY, y + 
        " : " + month);
    }
  }
  else {
    $("#tooltip").remove();
    previousPoint = null;
  }
});