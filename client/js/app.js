'use strict';
 
angular
 .module('app', [
   'lbServices',
   'ui.router',
   'highcharts-ng'
 ])
 .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
   $stateProvider.state('home', {
       url: '',
       templateUrl: 'js/graph/views/templates/home.html'
     });

   $stateProvider.state('graph', {
       url: '/graph',
       templateUrl: 'js/graph/views/templates/graph.html',
       controller: 'GraphController'       
     });

   $stateProvider.state('graph2', {
       url: '/graph2',
       templateUrl: 'js/graph/views/templates/graph2.html',
       controller: 'Graph2Controller'              
     });

   $urlRouterProvider.otherwise('home');
 }]);