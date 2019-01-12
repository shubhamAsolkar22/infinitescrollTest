'use strict';

/**
 * @ngdoc function
 * @name infyscrollApp.controller:InfyctrlCtrl
 * @description
 * # InfyctrlCtrl
 * Controller of the infyscrollApp
 */
angular.module('infyscrollApp',['ui.grid', 'ui.grid.infiniteScroll'])
  .controller('InfyctrlCtrl', function ($scope, $http, $timeout) {
    var vm = this;
    $scope.counter = 0;
    vm.addData = function(){
      $scope.Mdata.push({id:1000,name:'ssss',age:203});
    };
    vm.gridOptions = {
      
      customScroller: function myScrolling(uiGridViewport, scrollHandler) {
        uiGridViewport.on('scroll', function myScrollingOverride(event) {
  
            let viewport = event.target;
            let canvas = viewport.querySelector('.ui-grid-canvas');
           
           if(viewport.offsetHeight + viewport.scrollTop > canvas.scrollHeight){
            console.log('Yeah!!',$scope.counter++,$scope.Mdata);
             $scope.Mdata.push({id:1000,name:'ssss',age:203});         
          }
        })},

      columnDefs: [
        { name:'id'},
        { name:'name' },
        { name:'age' }
      ],
      data: 'Mdata',
    
    };
   
   
    $scope.Mdata = [{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}
    ,{id:1,name:'sdssd sds',age:23}];
   
  });


