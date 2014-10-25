
var width  = 500;
var height = 50;

var dataset = [5, 10, 15, 20, 25];


var svg = d3.select('body')
            .append('svg')
            .attr({
                'width'  :  width
              , 'height' : height
            });

var circles = svg.selectAll('circle')
                 .data(dataset)
                 .enter()
                 .append('circle');

circles.attr({
    'cx' : function(d, i){ return (i * 50) + 25; }
  , 'cy' : height / 2
  , 'r'  : function(d, i){ return d; }
});
