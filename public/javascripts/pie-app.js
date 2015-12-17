var app = angular.module('simple-chart', []);
google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainController', ['$scope', '$http',  function($scope, $http) {
  $http.get('/data').success(function(data){
    
  var dataArray = formatDataForView(data);

  var table = google.visualization.arrayToDataTable(dataArray, false);
  var chart = new google.visualization.PieChart(document.getElementById('piechart_div'));
  
  var options = {'title':'Fruits and Veggie consumption by Teenagers'}
  chart.draw(table, options);

  });
}]);

function formatDataForView(data) {
  
    var dataArray = [], keysArray = [];
    
    //hardcode the keys - not ideal :-/
    keysArray.push('Ethnicity');
    keysArray.push('Consumption');
    dataArray.push(keysArray);
    
    //get the values
    data.forEach(function(value){
        var dataEntry = [];
        for(var prop in value) {
          dataEntry.push(value[prop]);
        }
        dataEntry[1] = parseInt(dataEntry[1], 0);
        dataArray.push(dataEntry);
    });
  
    return dataArray;
}