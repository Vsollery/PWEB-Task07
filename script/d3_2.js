// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 40, left: 100},
    width = 460 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object 
var svg1 = d3.select("#lollipop")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("https://raw.githubusercontent.com/Vsollery/Fruits/main/Fruits.csv", function(data) {
  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 80])
    .range([ 0, width]);
  svg1.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

// Y axis
var y = d3.scaleBand()
  .range([ 0, height ])
  .domain(data.map(function(d) { return d.Fruits; }))
  .padding(1);
svg1.append("g")
  .call(d3.axisLeft(y))


// Lines
svg1.selectAll("myline")
  .data(data)
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(d.Amounts); })
    .attr("x2", x(0))
    .attr("y1", function(d) { return y(d.Fruits); })
    .attr("y2", function(d) { return y(d.Fruits); })
    .attr("stroke", "blue")

// Circles
svg1.selectAll("mycircle")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(d.Amounts); })
    .attr("cy", function(d) { return y(d.Fruits); })
    .attr("r", "4")
    .style("fill", "#AA4A44")
    .attr("stroke", "#AA4A44")
})

