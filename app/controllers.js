angular.module('app.controllers', [
	'app.directives'
])
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$http.get('data/posts.json').success(function(data){
			$scope.posts = data;
			
		});
        var limitStep = 3;
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
        
        $scope.showSearchBar = function() {
            return true;
        };
        
        $scope.menuGoTo = function(category) {
            $("#indexColumnWrapper").removeClass("visible")
            $("#indexColumnWrapper").addClass("notVisible");
            $("#indexSubmenu").removeClass("notVisible");
            $("#indexSubmenu").addClass("visible");
            $scope.currentCategory=category;
            $scope.categoryActive=true;
            return true;
        };
        
        $scope.backToIndex = function() {
            $("#indexSubmenu").removeClass("visible");
            $("#indexSubmenu").addClass("notVisible");
            $("#indexColumnWrapper").removeClass("notVisible");
            $("#indexColumnWrapper").addClass("visible");
            $scope.categoryActive=false;
            return true;
        };
        
        $scope.categoryFilter = (item)=> {
            if ($scope.categoryActive) {
                return item.category == $scope.currentCategory;
            }
            
            else {
                return item;
            }
        };
        
	}])
	.controller('PageController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		$http.get('data/pages.json').success(function(data){
			$scope.page = data[$routeParams.id];
		});
		
	}])
    .controller('AboutController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		$http.get('data/pages.json').success(function(data){
			$scope.page = data[$routeParams.id];
		});
		
	}])
    .controller('SubscribeController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
            $http.get('data/pages.json').success(function(data){
                $scope.page = data[$routeParams.id];
            });

        }])
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/posts.json').success(function(data){
			$scope.post = data[$routeParams.id];
		});
	}]);