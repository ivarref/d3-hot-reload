var d3 = require("d3");
require('./style.css');

var svg = d3.select('body').append('svg');
svg.attr('width', 320)
    .attr('height', 200)
    .style('border', "1px solid #000000");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var data = [5, 8, 15, 16, 23];
color.domain(data);

svg.selectAll('circle')
    .data(data)
    .enter().append('circle')
    .attr('r', function (d) { return d })
    .attr('fill', color)
    .attr('cx', function (d, i) { return 2*d + i * 25 })
    .attr('cy', function (d, i) { return 2*d + i * 25 });
