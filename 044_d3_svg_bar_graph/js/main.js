
var width  = 500;
var height = 100;


var dataset = [  5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var barpadding = 1;


var svg = d3.select('body')
            .append('svg')
            .attr({
                'width'  :  width
              , 'height' : height
            });

var rects = svg.selectAll('rect')
               .data(dataset)
               .enter()
               .append('rect')
               .attr({
                   'x'      : function(data, index){ return index * (width / dataset.length); }
                 , 'y'      : function(data)       { return height - data * 4; }
                 , 'width'  : function(data)       { return width / dataset.length - barpadding; }
                 , 'height' : function(data)       { return data * 4; }

                 , 'fill' : function(data) { return 'rgb(0, 0,' + (data * 10) +')'; }
               });

var texts = svg.selectAll('text')
               .data(dataset)
               .enter()
               .append('text')
               .text(function(data){ return data; })
               .attr({
                   'x' : function(data, index){
                     var barwidth = width / dataset.length;
                     return index * barwidth + (barwidth - barpadding) / 2; 
                   }
                 , 'y' : function(data)       { return height - (data * 4)              + 14; }

                 , 'font-family' : 'sans-serif'
                 , 'font-size'   : '11px'
                 , 'fill'        : 'white'
                 , 'text-anchor' : 'middle'
               });
