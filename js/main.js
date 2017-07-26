
var app = angular.module('tutorialWebApp', ['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap','ui.router','angular.backtop']);

app.config(function ($routeProvider,$stateProvider) {
  $routeProvider
    .when("/", {controller: "MainController"})
    .when("/", {templateUrl: "partials/home.html", controller: "CarouselDemoCtrl"})
    .when("/about", {templateUrl: "partials/about.html"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "AccordionDemoCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html"})
    .when("/services", {templateUrl: "partials/services.html", controller: "TabsDemoCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "Collapsemain"})
    .when("/services", {templateUrl: "partials/services.html", controller: "CollapseDemoCtrl1"})
    .when("/services", {templateUrl: "partials/services.html", controller: "CollapseDemoCtrl2"})
    .when("/services", {templateUrl: "partials/services.html", controller: "CollapseDemoCtrl3"})
    .when("/contact", {templateUrl: "partials/contact.html"})
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    .otherwise("/404", {templateUrl: "partials/404.html"});

    $stateProvider      
        // .state('pricing.service1', {url: "/pricing",templateUrl:'partials/service1.html'})
        // .state('pricing.service2', {url: "/pricing",templateUrl:'partials/service2.html'})
        // .state('pricing.service3', {url: "/pricing",templateUrl:'partials/service3.html'});
        // .state('pricing.service4', {url: "/pricing",templateUrl:'partials/service4.html'});

    new WOW().init();

});

// app.config(function($stateProvider){
//     $stateProvider      
//         .state('pricing.price1', {url: "/price1",templateUrl:'partials/price1.template.html'})
//         .state('pricing.price2', {url: "/price2",templateUrl:'partials/price2.template.html'})
//         .state('pricing.price3', {url: "/price3",templateUrl:'partials/price3.template.html'});
// });
/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
});


app.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;
});


app.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 50000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 1200 + slides.length + 1;
    slides.push({
      image: ['img/images/1.png','img/images/2.png','img/images/3.png','img/images/4.png'][slides.length % 4],
      text: ['Επισκεφθείτε το Ηλεκτροννικό μας Κατάστημα','Περνάμε καλά και αυτό φαίνεται','Τί άλλο θες Μωρέ','I love that','eisai xazos'][slides.length % 4],
      id: currIndex++
    });
  };
    for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }
  $('.fadeInDown').hover(function(){     
    $(this).find('.round').addClass('roundactive');
    }
    ,function(){
    $(this).find('.round').removeClass('roundactive');
});


});//controller

app.controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.model = {name: 'Tabs'};
});

app.controller('CollapseDemoCtrl1', function ($scope) {
  $scope.isCollapsed = false;
  $scope.showMenu = false;
});

app.controller('CollapseDemoCtrl2', function ($scope) {
  $scope.isCollapsed = false;
  $scope.showMenu = false;
});

app.controller('CollapseDemoCtrl3', function ($scope) {
  $scope.isCollapsed = false;
  $scope.showMenu = false;
});

app.controller('Collapsemain', function ($scope) {
  $scope.isCollapsedHorizontal = false;
  $scope.showMenu = false;
});


app.controller('MainController', function ($rootScope) {

$rootScope.$on('$stateChangeStart', 
function(event, toState, toParams, fromState, fromParams, options){ 
    event.preventDefault(); 
    console.log("TEST");
})

});
      // app.run(['$rootScope', '$state', '$stateProvider', function ($rootScope, $state, $stateProvider) {
      //   $rootScope.$state = $state;
      //   $rootScope.$stateParams = $stateParams;
      //   $rootScope.$on('$stateChangeStart', function ($rootScope, $state, $stateParams) {
      //     console.log($stateChangeStart);
      //   });
      //   $rootScope.$on('stateChangeSuccess', function ($rootScope, $state, $stateParams) {
      //     console.log($stateChangeSuccess);
      //   });
      //   console.log($stateProvider);
      //   console.log($rootScope.$stateParams);
      // }]);