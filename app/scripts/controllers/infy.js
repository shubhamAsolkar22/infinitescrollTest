'use strict';

/**
 * @ngdoc function
 * @name infyscrollApp.controller:InfyctrlCtrl
 * @description
 * # InfyctrlCtrl
 * Controller of the infyscrollApp
 */
angular.module('infyscrollApp',['ui.grid', 'ui.grid.pagination'])
  .controller('InfyctrlCtrl', function ($scope, $http, $timeout) {
   
   
    $scope.addData = function() {
      /* var n = $scope.gridOpts.data.length + 1;
      debugger;
      let a = [];
      for(let i=1;i<5;i++){
        a.push({
          "firstName": "New " + n,
          "lastName": "Person " + n,
          "company": "abc",
          "employed": true,
          "gender": "male"
        });
        n++;
      }
      $scope.gridOpts.data = $scope.gridOpts.data.concat(a); */
      $scope.gridOpts.paginationPageSize +=2;
    };
   
   
   
   
   
    var columnDefs1 = [
      { name: 'firstName' },
      { name: 'lastName' },
      { name: 'company' },
      { name: 'gender' }
    ];
   
    var data1 = [
      {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "gender": "male"
      },
      {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "gender": "female"
      },
      {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "gender": "female"
      },
      {
        "firstName": "Misty",
        "lastName": "Oneill",
        "company": "Letpro",
        "gender": "female"
      },{
        "firstName": "Waters",
        "lastName": "Shepherd",
        "company": "Kongene",
        "employed": true
      },
      {
        "firstName": "Hopper",
        "lastName": "Zamora",
        "company": "Acium",
        "employed": true
      },
      {
        "firstName": "Marcy",
        "lastName": "Mclean",
        "company": "Zomboid",
        "employed": true
      },
      {
        "firstName": "Tania",
        "lastName": "Cruz",
        "company": "Marqet",
        "employed": true
      },
      {
        "firstName": "Kramer",
        "lastName": "Cline",
        "company": "Parleynet",
        "employed": false
      },
      {
        "firstName": "Bond",
        "lastName": "Pickett",
        "company": "Brainquil",
        "employed": false
      },{
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "gender": "male"
      },
      {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "gender": "female"
      },
      {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "gender": "female"
      },
      {
        "firstName": "Misty",
        "lastName": "Oneill",
        "company": "Letpro",
        "gender": "female"
      },{
        "firstName": "Waters",
        "lastName": "Shepherd",
        "company": "Kongene",
        "employed": true
      },
      {
        "firstName": "Hopper",
        "lastName": "Zamora",
        "company": "Acium",
        "employed": true
      },
      {
        "firstName": "Marcy",
        "lastName": "Mclean",
        "company": "Zomboid",
        "employed": true
      },
      {
        "firstName": "Tania",
        "lastName": "Cruz",
        "company": "Marqet",
        "employed": true
      },
      {
        "firstName": "Kramer",
        "lastName": "Cline",
        "company": "Parleynet",
        "employed": false
      },
      {
        "firstName": "Bond",
        "lastName": "Pickett",
        "company": "Brainquil",
        "employed": false
      }
    ];
   
   
    var columnDefs2 = [
      { name: 'firstName' },
      { name: 'lastName' },
      { name: 'company' },
      { name: 'employed' }
    ];
   
    
   
   
    $scope.gridOpts = {
      columnDefs: columnDefs1,
      data: data1,
      paginationPageSize: 10,
      customScroller: function myScrolling(uiGridViewport, scrollHandler) {
        uiGridViewport.on('scroll', function myScrollingOverride(event) {
          $timeout(function(){

            let viewport = event.target;
            let canvas = viewport.querySelector('.ui-grid-canvas');
           
           if(viewport.offsetHeight + viewport.scrollTop > canvas.scrollHeight){
            console.log('Yeah!!',$scope.data1);
            /* $scope.gridOpts.data.push({
              "firstName": "Cox",
              "lastName": "Carney",
              "company": "Enormo",
              "gender": "male"
            }); */
            $scope.addData();                    
          }
        });
        }
        )}
      
    };
  });


