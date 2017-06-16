angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('TasksCtrl', function($scope, Tasks) {
 

  $scope.tasks = Tasks.all();
  $scope.remove = function(task) {
    Tasks.remove(task);
  };
})

.controller('TaskDetailCtrl', function($scope, $stateParams, Tasks) {
  $scope.task = Tasks.get($stateParams.taskId);
})

.controller('AccountCtrl', function($scope) {}
});
