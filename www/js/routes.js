angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.landingPage'
      2) Using $state.go programatically:
        $state.go('tabsController.landingPage');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab2/page2
  */
  .state('tabsController.landingPage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/landingPage.html',
        controller: 'landingPageCtrl'
      },
      'tab2': {
        templateUrl: 'templates/landingPage.html',
        controller: 'landingPageCtrl'
      }
    }
  })

  .state('tabsController.splash', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/splash.html',
        controller: 'splashCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.login', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.profile', {
    url: '/page8',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page3')

  

});