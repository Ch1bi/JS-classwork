angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('TasksCtrl', function($scope, Tasks, $ionicModal, $cordovaToast) {
  $scope.tasks = Tasks.all();
  $scope.remove = function(task) {
    Tasks.remove(task);
  };

  $ionicModal.fromTemplateUrl("templates/modal.html", {
    scope: $scope,
    animation: "slide-in-up"
  }).then(function(modal){
    $scope.modal = modal;
  });






  $scope.new = {
    taskName: "",
    taskDesc: ""
  };
    $scope.newTask = function(){
        if(Tasks.create($scope.new)){
          $cordovaToast.show("Task Created", "short", "bottom");
          $scope.modal.hide();
        }
    }

})

.controller('TaskDetailCtrl', function($scope, $stateParams, Tasks) {
  $scope.task = Tasks.get($stateParams.taskId);
})

.controller('AccountCtrl', function($scope) {});