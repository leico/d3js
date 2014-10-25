
var width  = 500;
var height = 300;

var dataset = [];
var numData = 50;
var xRange  = Math.random() * 1000;
var yRange  = Math.random() * 1000;
for(var i = 0 ; i < numData ; ++ i){

  dataset.push([
      Math.round(Math.random() * xRange)
    , Math.round(Math.random() * yRange)
  ]);
}

var padding = 30;

var xScale = d3.scale.linear()
               .domain(  [ 0, d3.max(dataset, function(data){ return data[0]; }) ]  )
               .range (  [ padding, width - padding * 2]  );
var yScale = d3.scale.linear()
               .domain(  [ 0, d3.max(dataset, function(data){ return data[1]; }) ]  )
               .range (  [ height - padding, padding ]  );
var rScale = d3.scale.linear()
               .domain(  [0, d3.max(dataset, function(data){ return data[1]; }) ] )
               .range ( [2, 5] );


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
                   ,  'r' : function(data){ return rScale(data[1]); }
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



var xAxis = d3.svg.axis()
              .scale(xScale)
              .orient('bottom')
              .ticks(5);

var yAxis = d3.svg.axis()
              .scale(yScale)
              .orient('left')
              .ticks(7);


svg.append('g')
   .attr({
       'class'     : 'axis'
     , 'transform' : 'translate(0,' + (height - padding) + ')'
   })
   .call(xAxis);

svg.append('g')
   .attr({
       'class'     : 'axis'
     , 'transform' : 'translate(' + padding + ', 0)'
   })
   .call(yAxis);

