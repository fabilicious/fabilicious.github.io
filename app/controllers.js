angular.module('app.controllers', [
	'app.directives'
])
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$http.get('data/posts.json').success(function(data){
			$scope.posts = data;
			
		});
        var limitStep = 5;
        $scope.limit = limitStep;
        
        $scope.incrementLimit = function() {
            $scope.limit += limitStep;
        };
        
        $scope.alternateStyles = function(cardNumber) {
            if (cardNumber % 2 == 0) {
                $scope.styleClass = "";
            }
            
            else {
                $scope.styleClass = "alt";
            }
            
            return $scope.styleClass;
        };
	}])
	.controller('PageController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		$http.get('data/pages.json').success(function(data){
			$scope.page = data[$routeParams.id];
		});
		
	}])
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/posts.json').success(function(data){
			$scope.post = data[$routeParams.id];
		});
	}]);