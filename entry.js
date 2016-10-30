var d3 = require("d3");

var svg = d3.select('body').append('svg');
svg.attr('width', 320)
    .attr('height', 200)
    .style('border', "1px solid #ffaa00")

svg.selectAll('circle')
    .data([5, 8, 15, 16, 23])
    .enter().append('circle')
    .attr('r', function (d) { return d })
    .attr('cx', function (d, i) { return 2*d + i * 25 })
    .attr('cy', function (d, i) { return 2*d + i * 25 })
