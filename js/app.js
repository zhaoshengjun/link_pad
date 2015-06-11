angular.module('linkspad', [])
  .controller('LinkController', function($scope) {
    // $scope.groups = ['iOS', 'Android']
    links = [{
      'name': 'Google',
      'address': 'http://www.google.com',
      'group': 'iOS'
    }, {
      'name': 'Inbox',
      'address': 'http://inbox.google.com',
      'group': 'Android'
    }];
    $scope.links = function() {
      return links;
    };
    randomColor = function() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    $scope.randomColor = randomColor()
    $scope.showForm = function() {
      alert("clicked");
    }
  });