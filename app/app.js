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
	}).when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutController'
    }).when('/abonneer', {
		templateUrl: 'views/abonneer.html',
		controller: 'SubscribeController'
    }).when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'SubscribeController'
	}).when('/page/:id', {
		templateUrl: 'views/page.html',
		controller: 'PageController'
	}).otherwise({
		redirectTo: '/'
	});
}]);