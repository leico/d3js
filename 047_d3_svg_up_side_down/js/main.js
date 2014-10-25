
var width  = 500;
var height = 100;

var dataset = [
                  [   5,   20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [  25,   67 ],
                  [  85,   21 ],
                  [ 220,   88 ]
              ];

var padding = 20;

var xScale = d3.scale.linear()
               .domain(  [ 0, d3.max(dataset, function(data){ return data[0]; }) ]  )
               .range (  [ padding, width - padding * 2]  );
var yScale = d3.scale.linear()
               .domain(  [ 0, d3.max(dataset, function(data){ return data[1]; }) ]  )
               .range (  [ height - padding, padding ]  );


var svg = d3.select('body')
            .append('svg')
            .attr({
                'width'  :  width
              , 'height' : height
            });

var circles = svg.selectAll('circle')
                 .data(dataset)
                 .enter()
                 .append('circle')
                 .attr({
                     'cx' : function(data){ return xScale(data[0]); }
                   , 'cy' : function(data){ return yScale(data[1]); }
                   ,  'r' : function(data){ return Math.sqrt(height - data[1]); }
                 });

var texts = svg.selectAll('text')
               .data(dataset)
               .enter()
               .append('text')
               .text(function(data){ return data[0] + ',' + data[1]; })
               .attr({
                   'x' : function(data){ return xScale(data[0]); }
                 , 'y' : function(data){ return yScale(data[1]); }

                 , 'font-family' : 'sans-serif'
                 , 'font-size'   : '11px'
                 , 'fill'        : 'red'
               });
