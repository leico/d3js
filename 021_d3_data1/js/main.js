
var dataset = [ 25, 7, 5, 26, 11 ];

d3.select('body')
  .selectAll('div')
  .data(dataset)
  .enter()
  .append('div')
  .attr('class', 'bar')
  .style({
      'height'       : function(data){ return data * 5 + 'px'; }
    , 'margin-right' : '2px'
  });
