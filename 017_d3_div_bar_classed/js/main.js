
var dataset = [5, 10, 15, 20, 25];

d3.select('body')
  .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
      .text(function(d){
        return "data:" + d;
      })
      .style('color', function(d){
        
        if(d > 15){
          return 'black';
        }

        return 'red';
      });

d3.select('body').append('div').classed('bar', true);

console.log(d3.selectAll('p'));
