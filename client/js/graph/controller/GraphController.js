'use strict';

angular
  .module('app')
  .controller('GraphController', ['$scope', '$state', 'Data', function($scope, $state, Data) {
    $scope.graph = [];

    $scope.chartConfig = {
        options: {
            chart: {
                zoomType: 'x'
            },
            rangeSelector: {
                enabled: true
            },
            navigator: {
                enabled: true
            }
        },
        series: [],
        title: {
            text: 'Angular Demo'
        },
        useHighStocks: true
    }

    $scope.chartConfig.series.push({
        name: "X",
        id: 1,
        data: [
            [1147651200000, 23.15],
            [1147737600000, 23.01],
            [1147824000000, 22.73],
            [1147910400000, 22.83],
            [1147996800000, 22.56],
            [1148256000000, 22.88],
            [1148342400000, 22.79],
            [1148428800000, 23.50],
            [1148515200000, 23.74],
            [1148601600000, 23.72],
            [1148947200000, 23.15],
            [1149033600000, 22.65]
        ]
    },   {

                type : 'flags',
                data : [{
                    x : Date.UTC(2006, 6, 25),
                    title : 'H',
                    text : 'Euro Contained by Channel Resistance'
                }, {
                    x : Date.UTC(2006, 7, 28),
                    title : 'G',
                    text : 'EURUSD: Bulls Clear Path to 1.50 Figure'
                }, {
                    x : Date.UTC(2006, 6, 4),
                    title : 'F',
                    text : 'EURUSD: Rate Decision to End Standstill'
                }, {
                    x : Date.UTC(2006, 5, 5),
                    title : 'E',
                    text : 'EURUSD: Enter Short on Channel Break'
                }, {
                    x : Date.UTC(2006, 6, 6),
                    title : 'D',
                    text : 'Forex: U.S. Non-Farm Payrolls Expand 244K, U.S. Dollar Rally Cut Short By Risk Appetite'
                }, {
                    x : Date.UTC(2006, 7, 6),
                    title : 'C',
                    text : 'US Dollar: Is This the Long-Awaited Recovery or a Temporary Bounce?'
                }],
                onSeries : 'dataseries',
                shape : 'circlepin',
                width : 16
            }

    );

    $scope.graph = Data.find(
      function(data) { 
      /* success */ },
      function(errorResponse) { /* error */ }
    );
    $scope.showData = function(date, value) {
        return date + " -> " + value;
    }      


  }]);
