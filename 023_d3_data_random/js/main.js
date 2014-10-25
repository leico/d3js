
var dataset = [];
for(var i = 0 ; i < 25 ; ++ i)
  dataset.push(Math.random() * 30);


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

console.log(dataset);
