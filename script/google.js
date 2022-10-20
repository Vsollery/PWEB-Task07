google.charts.load('current', {
  packages: ['corechart'],
});

google.charts.setOnLoadCallback(drawChart);

const pieChart = {
    chart: null,
    data: [
      ["Fruits", "Amounts"],
      ["Oranges", 63.31],
      ["Apples", 47.9],
      ["Bananas", 25.61],
      ["Melons", 25.56],
      ["Grapes", 18.59],
      ["Pineapples", 12.75],
      ["Strawberry", 9.21],
      ["Peaches", 8.79],
      ["Grapefruit", 7.53],
      ["Lemons", 6.72],
    ],
    element: '#pie-chart',
    options: {
      title: 'The most consumed fruits in the USA',
      width: 800,
      height: 500
    }
  };
  
  const barChart = {
    chart: null,
    data: [
      ["Fruits", "Amounts"],
      ["Oranges", 63.31],
      ["Apples", 47.9],
      ["Bananas", 25.61],
      ["Melons", 25.56],
      ["Grapes", 18.59],
      ["Pineapples", 12.75],
      ["Strawberry", 9.21],
      ["Peaches", 8.79],
      ["Grapefruit", 7.53],
      ["Lemons", 6.72],
    ],
    element: '#bar-chart',
    options:  {
      title: 'The most consumed fruits in the USA',
      width: 800,
      height: 500
    }
  };
  
  const lineChart = {
    chart: null,
    data: [
      ["Fruits", "Amounts"],
      ["Oranges", 63.31],
      ["Apples", 47.9],
      ["Bananas", 25.61],
      ["Melons", 25.56],
      ["Grapes", 18.59],
      ["Pineapples", 12.75],
      ["Strawberry", 9.21],
      ["Peaches", 8.79],
      ["Grapefruit", 7.53],
      ["Lemons", 6.72],
    ],
    element: '#line-chart',
    options: {
      title: 'The most consumed fruits in the USA',
      width: 800,
      height: 500
    }
  };

  function drawChart (){
    pieChart.chart = new google.visualization.PieChart(
      document.querySelector(pieChart.element)
    );
    pieChart.chart.draw(
      google.visualization.arrayToDataTable(pieChart.data),
      pieChart.options
    );
    
    barChart.chart = new google.visualization.BarChart(
      document.querySelector(barChart.element)
    );
    barChart.chart.draw(
      google.visualization.arrayToDataTable(barChart.data),
      barChart.options
    );
    
    lineChart.chart = new google.visualization.LineChart(
      document.querySelector(lineChart.element)
    );
    lineChart.chart.draw(
      google.visualization.arrayToDataTable(lineChart.data),
      lineChart.options
    );
    
  };
  

  
