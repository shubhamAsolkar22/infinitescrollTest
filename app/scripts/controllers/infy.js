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
    debugger;
    var vm = this;
 
    vm.gridOptions = {
      infiniteScrollRowsFromEnd: 40,
      infiniteScrollUp: true,
      infiniteScrollDown: true,
      columnDefs: [
        { name:'id'},
        { name:'name' },
        { name:'age' }
      ],
      data: 'data',
      onRegisterApi: function(gridApi){
        gridApi.infiniteScroll.on.needLoadMoreData($scope, getDataDown);
        gridApi.infiniteScroll.on.needLoadMoreDataTop($scope, getDataUp);
        vm.gridApi = gridApi;
      }
    };
   
    $scope.data = [];
   
    vm.firstPage = 2;
    vm.lastPage = 2;
   
    function getFirstData() {
      return $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/10000_complex.json')
      .then(function(response) {
        var newData = getPage(response.data, vm.lastPage);
   
        $scope.data = $scope.data.concat(newData);
      });
    }
   
    function getDataDown() {
      return $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/10000_complex.json')
      .then(function(response) {
        vm.lastPage++;
        var newData = getPage(response.data, vm.lastPage);
        vm.gridApi.infiniteScroll.saveScrollPercentage();
        $scope.data = $scope.data.concat(newData);
        return vm.gridApi.infiniteScroll.dataLoaded(vm.firstPage > 0, vm.lastPage < 4).then(function() {checkDataLength('up');});
      })
      .catch(function(error) {
        return vm.gridApi.infiniteScroll.dataLoaded();
      });
    }
   
    function getDataUp() {
      return $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/10000_complex.json')
      .then(function(response) {
        vm.firstPage--;
        var newData = getPage(response.data, vm.firstPage);
        vm.gridApi.infiniteScroll.saveScrollPercentage();
        $scope.data = newData.concat($scope.data);
        return vm.gridApi.infiniteScroll.dataLoaded(vm.firstPage > 0, vm.lastPage < 4).then(function() {checkDataLength('down');});
      })
      .catch(function(error) {
        return vm.gridApi.infiniteScroll.dataLoaded();
      });
    }
   
    function getPage(data, page) {
      var res = [];
      for (var i = (page * 100); i < (page + 1) * 100 && i < data.length; ++i) {
        res.push(data[i]);
      }
      return res;
    }
   
    function checkDataLength( discardDirection) {
      // work out whether we need to discard a page, if so discard from the direction passed in
      if( vm.lastPage - vm.firstPage > 3 ){
        // we want to remove a page
        vm.gridApi.infiniteScroll.saveScrollPercentage();
   
        if( discardDirection === 'up' ){
          $scope.data = $scope.data.slice(100);
          vm.firstPage++;
          $timeout(function() {
            // wait for grid to ingest data changes
            vm.gridApi.infiniteScroll.dataRemovedTop(vm.firstPage > 0, vm.lastPage < 4);
          });
        } else {
          $scope.data = $scope.data.slice(0, 400);
          vm.lastPage--;
          $timeout(function() {
            // wait for grid to ingest data changes
            vm.gridApi.infiniteScroll.dataRemovedBottom(vm.firstPage > 0, vm.lastPage < 4);
          });
        }
      }
    }
   
    vm.reset = function() {
      vm.firstPage = 2;
      vm.lastPage = 2;
   
      // turn off the infinite scroll handling up and down - hopefully this won't be needed after @swalters scrolling changes
      vm.gridApi.infiniteScroll.setScrollDirections( false, false );
      $scope.data = [];
   
      getFirstData().then(function(){
        $timeout(function() {
          // timeout needed to allow digest cycle to complete,and grid to finish ingesting the data
          vm.gridApi.infiniteScroll.resetScroll( vm.firstPage > 0, vm.lastPage < 4 );
        });
      });
    };
   
    getFirstData().then(function(){
      $timeout(function() {
        // timeout needed to allow digest cycle to complete,and grid to finish ingesting the data
        // you need to call resetData once you've loaded your data if you want to enable scroll up,
        // it adjusts the scroll position down one pixel so that we can generate scroll up events
        debugger;
        vm.gridApi.infiniteScroll.resetScroll( vm.firstPage > 0, vm.lastPage < 4 );
      });
    });

  });


