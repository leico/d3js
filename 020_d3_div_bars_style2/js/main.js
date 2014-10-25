
var dataset = [5, 10, 15, 20, 25];

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
