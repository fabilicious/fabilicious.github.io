angular.module('app', [
	'ngRoute',
	'app.controllers',
    'app.filters'
]).config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/post.html',
		controller: 'PostController'
	}).when('/post/:id', {
		templateUrl: 'views/singlepost.html',
		controller: 'SinglePostController'
	}).when('/page/:id', {
		templateUrl: 'views/page.html',
		controller: 'PageController'
	}).otherwise({
		redirectTo: '/'
	});
}]);