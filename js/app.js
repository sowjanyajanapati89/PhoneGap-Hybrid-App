// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    // if (window.cordova && window.cordova.plugins.Keyboard) {
    //   // cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    //   cordova.plugins.Keyboard.disableScroll(true);

    // }
    // if (window.StatusBar) {
    //   // org.apache.cordova.statusbar required
    //   // StatusBar.styleDefault();
    //   StatusBar.styleLight();
    // }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/volunteering.html',
        controller: 'SearchOppCtrl'
      }
    }
  })

  .state('app.search-res', {
    url: '/search/res/:locationId/:lat/:lng/:miles/:interests/:skills',
    views: {
      'menuContent': {
        templateUrl: 'templates/volunteering-res.html',
        controller: 'VolunteeringCtrl'
      }
    }
  })

  .state('app.opportunity-view', {
    url: '/search/res/view/:uuid',
    views: {
      'menuContent': {
        templateUrl: 'templates/volunteering-view.html',
        controller: 'viewOpportunityCtrl'
      }
    }
  })

  .state('app.opp-reg-view', {
    url: '/search/res/view/reg/:uuid',
    views: {
      'menuContent': {
        templateUrl: 'templates/opportunity-registered-view.html',
        controller: 'view-opp-reg-ctrl'
      }
    }
  })

  .state('app.opportunities-saved', {
    url: '/dashboard/opportunities',
    views: {
      'menuContent': {
        templateUrl: 'templates/opportunities-saved.html',
        controller: 'savedOpportunitiesCtrl'
      }
    }
  })

  .state('app.signin', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'DemoCtrl'
      }
    }
  })

  .state('app.dashboard', {
    url: '/dashboard/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  // .state('app.recruiter-dashboard', {
  //   url: '/recDashboard/:id',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/recruiter-dashboard.html',
  //       controller: 'recruiter-dashboardCtrl'
  //     }
  //   }
  // })

  .state('app.stats', {
    url: '/dashboard/stats/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/stats.html',
        controller: 'statsCtrl'
      }
    }
  })

  .state('app.feedback', {
    url: '/feedback',
    views: {
      'menuContent': {
        templateUrl: 'templates/feedback.html',
        controller: 'DemoCtrl'
      }
    }
  })

  .state('app.jobs', {
    url: '/jobs',
    views: {
      'menuContent': {
        templateUrl: 'templates/jobs.html',
        controller: 'JobsCtrl'
      }
    }
  })

  .state('app.jobs-res', {
    url: '/jobs/res/:role/:lat/:lng/:salaryFrom/:salaryTo',
    views: {
      'menuContent': {
        templateUrl: 'templates/jobs-res.html',
        controller: 'SearchJobsCtrl'
      }
    }
  })

  .state('app.job-view', {
    url: '/jobs/res/view/:uuid',
    views: {
      'menuContent': {
        templateUrl: 'templates/jobs-view.html',
        controller: 'viewJobsCtrl'
      }
    }
  })

  // .state('app.organisations', {
  //   url: '/organisations',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/organisations.html',
  //       controller: 'OrgsCtrl'
  //     }
  //   }
  // })

  .state('app.org-view', {
    url: '/organisations/view/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/organisations-view.html',
        controller: 'OrgCtrl'
      }
    }
  })

  .state('app.org-opps-list', {
    url: '/organisations/opps/view/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/organisations-opportunities-list.html',
        controller: 'OrgOppsCtrl'
      }
    }
  })

  // .state('app.news', {
  //   url: '/news',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/news.html',
  //       controller: 'articlesCtrl'
  //     }
  //   }
  // })

  .state('app.news-doit', {
    url: '/news/do-it',
    views: {
      'menuContent': {
        templateUrl: 'templates/doit-news.html',
        controller: 'getStartedtCtrl'
      }
    }
  })

  .state('app.news-view', {
    url: '/news/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/news-view.html',
        controller: 'articleCtrl'
      }
    }
  })

  .state('app.opportunities-managed', {
    url: '/recruiter/opportunities',
    views: {
      'menuContent': {
        templateUrl: 'templates/opportunities-managed.html',
        controller: 'recruiter-oppCtrl'
      }
    }
  })

  .state('app.organisations-managed', {
    url: '/recruiter/organisations/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/organisations-managed.html',
        controller: 'recruiter-orgCtrl'
      }
    }
  })

  .state('app.organisations-subscribed', {
    url: '/dashboard/organisations',
    views: {
      'menuContent': {
        templateUrl: 'templates/organisations-subscribed.html',
        controller: 'subscribed-orgsCtrl'
      }
    }
  })

  .state('app.opportunities-registered', {
    url: '/dashboard/opportunities/registered/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/opportunities-registered.html',
        controller: 'registered-oppsCtrl'
      }
    }
  })

  .state('app.jobs-managed', {
    url: '/recruiter/jobs',
    views: {
      'menuContent': {
        templateUrl: 'templates/jobs-managed.html',
        controller: 'recruiter-jobsCtrl'
      }
    }
  })

  .state('app.jobs-saved', {
    url: '/dashboard/jobs/saved',
    views: {
      'menuContent': {
        templateUrl: 'templates/jobs-saved.html',
        controller: 'savedJobsCtrl'
      }
    }
  })

  .state('app.volunteers-managed', {
    url: '/recruiter/volunteers',
    views: {
      'menuContent': {
        templateUrl: 'templates/volunteers-managed.html',
        controller: 'recruiter-volCtrl'
      }
    }
  })

  .state('app.applications-user', {
    url: '/recruiter/applications',
    views: {
      'menuContent': {
        templateUrl: 'templates/applications-managed.html',
        controller: 'recruiter-appCtrl'
      }
    }
  })

  .state('app.edit-profile', {
    url: '/dashboard/users/edit/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/edit_profile.html',
        controller: 'profile-editCtrl'
      }
    }
  })

  .state('app.info', {
    url: '/info',
    views: {
      'menuContent': {
        templateUrl: 'templates/info.html',
        controller: 'DemoCtrl'
      }
    }
  })
    
    
   .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html',
        controller: 'signUpCtrl'
      }
    }
  });
    
 // .state('app.logout', {
 //    url: '/logout',
 //    views: {
 //      'menuContent': {
 //        templateUrl: 'templates/logout.html',
 //        controller: 'logoutCtrl'
 //      }
 //    }
 //  })

	//Sowjanya End

  // .state('app.single', {
  //   url: '/search/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/playlist.html',
  //       controller: 'PlaylistCtrl'
  //     }
  //   }
  // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
