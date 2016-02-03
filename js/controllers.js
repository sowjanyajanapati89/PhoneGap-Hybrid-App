angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicLoading, $state, loginAPI, logoutAPI) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  // $scope.$on('$ionicView.enter', function(e) {
  //   console.log("page loaded - search ")
  // });
  $scope.isLoggedin = _is_loggedin;

  // -----------------------------
  // Form data for the login modal
  // -----------------------------
  $scope.loginData = {};

  // ---------------------------------------------
  // Create the login modal that we will use later
  // ---------------------------------------------
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // ----------------------------------------
  // Triggered in the login modal to close it
  // ----------------------------------------
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // --------------------
  // Open the login modal
  // --------------------
  $scope.login = function() {
    $scope.modal.show();
  };

  // -------------------------------------------------------------
  // Perform the login action when the user submits the login form
  // -------------------------------------------------------------
  $scope.doLogin = function() {
    console.log('Doing login................');
    _body = {
      'email' : $scope.loginData.email,
      'password' : $scope.loginData.password
    }
    loginAPI.call(_body).then(function(resp){
      $scope.login = resp.data.user;
      if(resp.meta.code == "200") {
        window.localStorage['_is_loggedin'] = true;
        window.localStorage['first_name'] = $scope.login.first_name;
        window.localStorage['user_id'] = $scope.login.id;
        window.localStorage['email'] = $scope.login.email;
        window.localStorage['phone'] = $scope.login.phone;
        window.localStorage['ethnicity'] = $scope.login.ethnicity;
        window.location.href = "#/app/search";
        //window.location.reload();
        console.log(resp.data);
      }else{
        // Setup the loader
        $ionicLoading.show({
          content: 'Loading',
          template: 'invalid username or password',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
        $timeout(function () {
          $ionicLoading.hide();
        }, 2000);
      }
      //console.log(resp);
    }, function(err){
      alert(err);
    });
  };

 

  // -----------------------
  // Perform logout function
  // -----------------------
  $scope.logout = function(){
    console.log("------------ Loging Out -------------");
    logoutAPI.call().then(function(resp){
      $scope.logout = resp;
      if(resp.meta.code == "200"){
        window.localStorage.clear();
        $state.go('app.search');
        window.location.reload();
      }else{
        // Setup the loader
        $ionicLoading.show({
          content: 'Loading',
          template: 'Logout failed.... '+resp.meta.code,
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
        $timeout(function () {
          $ionicLoading.hide();
        }, 2000);
      }
    }, function(err){
      alert(err);
    });
  }

  // -----------------------------
  // Form data for the login modal
  // -----------------------------
  $scope.signupData = {};    
    
  // // -------------------------------------------------------------
  // // Perform the signUp action when the user submits the SignUp form
  // // -------------------------------------------------------------
  // $scope.doSignUp = function() {
  //   console.log('Doing SignUp................');
  //   _body = {
  //     'firstName' : $scope.signupData.firstName,
  //     'lastName' : $scope.signupData.lastName,  
  //     'emailOrMobileNumber' : $scope.signupData.emailOrMobileNumber,  
  //     'password' : $scope.signupData.password
  //   }
  //   signupAPI.call(_body).then(function(resp){
  //     $scope.login = resp.data.user;
  //     if(resp.meta.code == "200") {
  //       window.localStorage['_is_loggedin'] = true;
     
  //       window.location.href = "#/app/search";
  //       //window.location.reload();
  //       console.log(resp.data);
  //     }else{
  //       // Setup the loader
  //       $ionicLoading.show({
  //         content: 'Loading',
  //         template: 'invalid username or password',
  //         animation: 'fade-in',
  //         showBackdrop: true,
  //         maxWidth: 200,
  //         showDelay: 0
  //       });
  //       $timeout(function () {
  //         $ionicLoading.hide();
  //       }, 2000);
  //     }
  //     //console.log(resp);
  //   }, function(err){
  //     alert(err);
  //   });
  // };    
    
  // ----------------
  // Get User Details
  // ----------------
  if(window.localStorage['first_name'] != null && window.localStorage['first_name'] != undefined) { $scope.first_name = window.localStorage['first_name'];}
  if(window.localStorage['user_id'] != null && window.localStorage['user_id'] != undefined) { $scope.id = window.localStorage['user_id'];}
})

.controller('signUpCtrl', function($scope, $ionicModal, $timeout, $ionicLoading, $state, signupAPI) {
 
  // -----------------------------
  // Form data for the login modal
  // -----------------------------
  $scope.signupData = {};    
    
  // -------------------------------------------------------------
  // Perform the signUp action when the user submits the SignUp form
  // -------------------------------------------------------------
  $scope.doSignUp = function() {
    console.log('Doing SignUp................');
        
    _body = {
    
      'first_Name' : $scope.signupData.firstName,
      'last_Name' : $scope.signupData.lastName,  
      'email' : $scope.signupData.email,  
      'password' : $scope.signupData.password,
      'password_confirm' : $scope.signupData.password_confirm,
      'tcs': $scope.signupData.tcs
    }
    signupAPI.call(_body).then(function(resp){
      $scope.login = resp.data.user;
      if(resp.meta.code == "200") {
        window.localStorage['_is_loggedin'] = true;
     
        window.location.href = "#/app/search";
        //window.location.reload();
        console.log(resp.data);
      }else{
        // Setup the loader
        $ionicLoading.show({
          content: 'Loading',
          template: 'invalid username or password',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
        $timeout(function () {
          $ionicLoading.hide();
        }, 2000);
      }
      //console.log(resp);
    }, function(err){
      alert(err);
    });
  };    
    
 
})

//Sowji Sart logout
//.controller('logoutCtrl', function($scope, $ionicModal, $timeout, $ionicLoading, $state, logoutAPI) {
// $scope.doSignUp = function() {
//     console.log('Doing SignUp................');
//     _body = {
//         {
//     "data": {},
//     "links": {
//         "self": {
//             "href": "/v1/users/logout",
//             "title": "You are here."
//         }
//     },
//     "meta": {
//         "code": 200,
//     }
// }

//  $scope.logout = function(){
//     console.log("------------ Loging Out -------------");
//     logoutAPI.call().then(function(resp){
//       $scope.logout = resp;
//       if(resp.meta.code == "200"){
//         window.localStorage.clear();
//         $state.go('app.search');
//         window.location.reload();
//       }else{
//         // Setup the loader
//         $ionicLoading.show({
//           content: 'Loading',
//           template: 'Logout failed.... '+resp.meta.code,
//           animation: 'fade-in',
//           showBackdrop: true,
//           maxWidth: 200,
//           showDelay: 0
//         });
//         $timeout(function () {
//           $ionicLoading.hide();
//         }, 2000);
//       }
//     }, function(err){
//       alert(err);
//     });
//   }
//             }
//             }
            
// })

// {
//     "data": {},
//     "links": {
//         "self": {
//             "href": "/v1/users/logout",
//             "title": "You are here."
//         }
//     },
//     "meta": {
//         "code": 200,
//     }
// }

//Sowji End logout

.controller('SearchOppCtrl', function($scope, $state, $http, $ionicModal, $ionicLoading, $cordovaGeolocation, filterFilter, $timeout, locationAPI, doitAPI){
  $scope.$on('$ionicView.enter', function(e) {
    console.log("page loaded - search volunteering ");
  });

  // ----------------------
  // Handling Modal Windows
  // ----------------------
  $ionicModal.fromTemplateUrl('templates/modal-skills-chooser.html', { scope: $scope, animation: 'slide-in-up' }).then(function(modal) { $scope.skillsChooser = modal; });
  $ionicModal.fromTemplateUrl('templates/modal-interestedin.html', { scope: $scope, animation: 'slide-in-up' }).then(function(modal) { $scope.interestedinChooser = modal; });
  $ionicModal.fromTemplateUrl('templates/modal-distance-chooser.html', { scope: $scope, animation: 'slide-in-up' }).then(function(modal) { $scope.distanceChooser = modal; });
  $ionicModal.fromTemplateUrl('templates/modal-roles.html', { scope: $scope, animation: 'slide-in-up' }).then(function(modal) { $scope.rolesChooser = modal; });
  $ionicModal.fromTemplateUrl('templates/modal-location.html', { scope: $scope, animation: 'slide-in-up' }).then(function(modal) { $scope.locationChooser = modal; });

  $scope.showSkillsChooser = function() {
    $scope.skillsChooser.show();
  }

  $scope.hideSkillsChooser = function() {
    $scope.skillsChooser.hide();
  }

  $scope.showInterestedinChooser = function() {
    $scope.interestedinChooser.show();
  }

  $scope.hideInterestedinChooser = function() {
    $scope.interestedinChooser.hide();
  }

  $scope.showLocationChooser = function() {
    $scope.locationChooser.show();
  }

  $scope.hideLocationChooser = function() {
    $scope.locationChooser.hide();
  }

  $scope.showDistanceChooser = function() {
    $scope.distanceChooser.show();
  }

  $scope.hideDistanceChooser = function() {
    $scope.distanceChooser.hide();
  }

  $scope.showRolesChooser = function() {
    $scope.rolesChooser.show();
  }

  $scope.hideRolesChooser = function() {
    $scope.rolesChooser.hide();
  }

  // ----------------------------
  // Setting Up Default Variables
  // ----------------------------
  $scope.isLoggedin = _is_loggedin;
  $scope.interests = interests;
  $scope.skills = skills;
  $scope.selection_interests = [];
  $scope.selection_skills = [];
  $scope.selection_location = [];
  $scope.listOfLocations = [];
  $scope.skills_text = "Please Select";
  $scope.interests_text = "Please Select";
  $scope.distance_text = "Please Select";
  $scope.location_text = "Please Select";
  $scope.selection_skills_names;
  $scope.selection_interests_names;
  $scope.selection_location_names;
  $scope.search = {};
  $scope.distance = {};

  // -------------------------------------------------------------
  // Setting Up $watch functions for locations, interests & skills
  // -------------------------------------------------------------

  // 1. Location -------------

  $scope.$watch('listOfLocations|filter:{selected:true}', function (nv) {
    $scope.selection_location = nv.map(function (interest) {
      return interest.name;
    });
    var str = $scope.selection_location.toString();
    var ordinates = str.split(",");
    $scope.distance.lat = ordinates[0];
    $scope.distance.lng = ordinates[1];
    $scope.distance.location = "true";
  }, true);

  $scope.$watch('listOfLocations|filter:{selected:true}', function (nv) {
    $scope.selection_location_names = nv.map(function (interest) {
      return interest.id;
    });
    $scope.location_text = $scope.selection_location_names[0];
  }, true);

  $scope.$watch('distance', function (nv){
    if(nv.value){
      $scope.distance_text = nv.value+" Miles";
    }
  }, true);

  $scope.updateLocation = function(position, listOfLocations) {
    angular.forEach(listOfLocations, function(item, index) {
      if (position != index)
      item.selected = false;
    });
  };

  // 2. Interests -----------

  $scope.$watch('interests|filter:{selected:true}', function (nv) {
    $scope.selection_interests = nv.map(function (interest) {
      return interest.name;
    });
  }, true);

  $scope.$watch('interests|filter:{selected:true}', function (nv) {
    $scope.selection_interests_names = nv.map(function (skill) {
      return skill.id;
    });
    var length = $scope.selection_interests_names.length;
    if(length > 0){
      if(length > 1){
        $scope.interests_text = $scope.selection_interests_names[0]+" & More";
      }else {
        $scope.interests_text = $scope.selection_interests_names[0];
      }
    }
  }, true);

  // 3. Skills --------------

  $scope.$watch('skills|filter:{selected:true}', function (nv) {
    $scope.selection_skills = nv.map(function (skill) {
      return skill.name;
    });
  }, true);

  $scope.$watch('skills|filter:{selected:true}', function (nv) {
    $scope.selection_skills_names = nv.map(function (skill) {
      return skill.id;
    });
    var length = $scope.selection_skills_names.length;
    if(length > 0){
      if(length > 1){
        $scope.skills_text = $scope.selection_skills_names[0]+" & More";
      }else {
        $scope.skills_text = $scope.selection_skills_names[0];
      }
    }
  }, true);

  if(window.localStorage['first_name'] != null && window.localStorage['first_name'] != undefined) {
    $scope.first_name = window.localStorage['first_name'];
  };

  // ------------------
  // Get Users Location
  // ------------------
  $scope.searchLocation = function(){
    var location = $scope.search.query;
    var length = location.length;
    if(length >= 3){
      $http.get('https://api.do-it.org/v1/location/uk/locations?name='+location).success(function(resp) {
        $scope.listOfLocations = [];
        for(i in resp.data.items){
          var temp = {
            name : resp.data.items[i].lat+","+resp.data.items[i].lng,
            id : resp.data.items[i].name,
            selected : false
          };
          $scope.listOfLocations.push(temp);
        }
        console.log($scope.listOfLocations);
      });
    }else{
      $scope.listOfLocations = [];
    }
  }
  // -------------------
  // GPS Location Finder
  // -------------------
  $scope.findOrdinates = function(){
    // -----------------
    // Open Popup Loader
    // -----------------
    $ionicLoading.show({
      content: 'Loading',
      template: 'Fetching Your Current Location',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    // ------------------
    // Close Popup Loader
    // ------------------
    $timeout(function () {
      $ionicLoading.hide();
    }, 1000);
    //var posOptions = {timeout: 10000, enableHighAccuracy: false};

    var fgGeo2 = window.navigator.geolocation;

    fgGeo2.getCurrentPosition(function(location) {
      // -----------------
      // Open Popup Loader
      // -----------------
      $ionicLoading.show({
        content: 'Loading',
        template: 'Location Available',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });

      // ------------------
      // Close Popup Loader
      // ------------------
      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);

      //console.log(location);
      var item_lat = location.coords.latitude; //13.016331;
      var item_lng = location.coords.longitude; //80.246263;
      $scope.distance.lat = item_lat;
      $scope.distance.lng = item_lng;
      $scope.location_text = "Using your current location";
    }, function(err){
      // -----------------
      // Open Popup Loader
      // -----------------
      $ionicLoading.show({
        content: 'Loading',
        template: 'No location data',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
      // ------------------
      // Close Popup Loader
      // ------------------
      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
      //console.log("No location data");
      //console.log(err);
    });
  };

  // -----------------------
  // To Serach Opportunities
  // -----------------------
  $scope.searchOpportunities = function(){
    if(!$scope.distance.lat){
      // Setup the loader
      $ionicLoading.show({
        content: 'Loading',
        template: 'Please Enter Your Location',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });

      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
    }else{
      console.log($scope.distance.lat+"::"+$scope.distance.lng);
      if(($scope.distance.lat != null && $scope.distance.lat != undefined) && ($scope.distance.lng != null && $scope.distance.lng != undefined)){
        var _latitude = $scope.distance.lat;
        var _longtitude = $scope.distance.lng;
        var _miles = $scope.distance.value;
      }else{
        var _latitude = "";
        var _longtitude = "";
        var _miles = "";
      }
      if($scope.selection_interests != null && $scope.selection_interests != undefined){var _interests = $scope.selection_interests;}else{var _interests = "";}
      if($scope.selection_skills != null && $scope.selection_skills != undefined){var _skills = $scope.selection_skills;}else{var _skills = "";}
      //$state.go('app.search-res', {lat: $scope.distance.lat, lng: $scope.distance.lng, miles : $scope.distance.value, interests: $scope.selection_interests, skills: $scope.selection_skills});
      $state.go('app.search-res', {lat: _latitude, lng: _longtitude, miles : _miles, interests: _interests, skills: _skills});
    }
  };
})

.controller('VolunteeringCtrl', function($scope, $state, $timeout, $stateParams, $ionicModal, $ionicLoading, doitAPI, oppList_NextAPI) {
  $scope.$on('$ionicView.enter', function(e) {
    console.log("page loaded - search volunteering ");
  });

  $scope.isLoggedin = _is_loggedin;
  $scope.noMoreItemsAvailable = false;
  $scope.current_page = 1;

  // Setup the loader
  $ionicLoading.show({
    content: 'Loading',
    template: 'Searching....',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  _reqParams = {lat: $stateParams.lat ,lng:$stateParams.lng , miles: $stateParams.miles, interests: $stateParams.interests, skills: $stateParams.skills, page: $scope.current_page};
  console.log(_reqParams);
  $scope.listOfOpportunities;
  $scope.links;

  // --------------------
  // Search Opportunities
  // --------------------
  // Deafault Page
  $scope.searchOpportunities = function(){
    doitAPI.call(_reqParams).then(function(resp){
      for(var i in resp.data.items) {
        var _tsdate = resp.data.items[i].specific_start_date;
        var _created = resp.data.items[i].created;
        var _updated = resp.data.items[i].updated;
        var _tedate = resp.data.items[i].specific_end_date;
        resp.data.items[i].specific_start_date = moment(_tsdate).format('LL');
        resp.data.items[i].created = moment(_created).format('LL');
        resp.data.items[i].specific_end_date = moment(_tedate).format('LL');
        resp.data.items[i].updated = moment(_updated).format('LL');
      }
      $scope.listOfOpportunities = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      $scope.links = resp.links;
      $scope.hasItems = true;
      if(!resp.links.next){$scope.noMoreItemsAvailable = true;}
      console.log($scope.listOfOpportunities);
    }, function(err){
      alert(err);
    });
  };
  // Next Page
  $scope.opportunities_next = function(){
    $scope.current_page = $scope.current_page + 1;
    _reqParams.page = $scope.current_page;
    doitAPI.call(_reqParams).then(function(resp){
      for(var i in resp.data.items) {
        var _tsdate = resp.data.items[i].specific_start_date;
        var _created = resp.data.items[i].created;
        var _updated = resp.data.items[i].updated;
        var _tedate = resp.data.items[i].specific_end_date;
        resp.data.items[i].specific_start_date = moment(_tsdate).format('LL');
        resp.data.items[i].created = moment(_created).format('LL');
        resp.data.items[i].specific_end_date = moment(_tedate).format('LL');
        resp.data.items[i].updated = moment(_updated).format('LL');
      }
      $scope.listOfOpportunities = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      $scope.links = resp.links;
      $scope.hasItems = true;
      if(!resp.links.next){$scope.noMoreItemsAvailable = true;}else{$scope.noMoreItemsAvailable = false;}
      console.log($scope.listOfOpportunities);
    }, function(err){
      alert(err);
    });
  };
  // Previous Page
  $scope.opportunities_previous = function(){
    $scope.current_page = $scope.current_page - 1;
    _reqParams.page = $scope.current_page;
    doitAPI.call(_reqParams).then(function(resp){
      for(var i in resp.data.items) {
        var _tsdate = resp.data.items[i].specific_start_date;
        var _created = resp.data.items[i].created;
        var _updated = resp.data.items[i].updated;
        var _tedate = resp.data.items[i].specific_end_date;
        resp.data.items[i].specific_start_date = moment(_tsdate).format('LL');
        resp.data.items[i].created = moment(_created).format('LL');
        resp.data.items[i].specific_end_date = moment(_tedate).format('LL');
        resp.data.items[i].updated = moment(_updated).format('LL');
      }
      $scope.listOfOpportunities = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      $scope.links = resp.links;
      $scope.hasItems = true;
      if(!resp.links.next){$scope.noMoreItemsAvailable = true;}else{$scope.noMoreItemsAvailable = false;}
      console.log($scope.listOfOpportunities);
    }, function(err){
      alert(err);
    });
  };
  // ------------------
  // View Opportunities
  // ------------------
  $scope.viewOpportunity = function(uuid){
    $state.go('app.opportunity-view', {uuid : uuid});
  };

  $timeout(function () {
    $ionicLoading.hide();
  }, 2000);
})

.controller('viewOpportunityCtrl', function($scope, $state, $stateParams, $timeout, $ionicLoading, doitOppViewAPI, saveOppAPI, userSubscriptionAPI, applicationAPI){
  $scope.$on('$ionicView.enter', function(e) {
    console.log("page loaded - search volunteering ");
  });

  $scope.is_loggedin = _is_loggedin;
  $scope._status;
  _reqParams = {
    uuid : $stateParams.uuid
  };

  $ionicLoading.show({
    content: 'Loading',
    template: 'Please Wait...',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  $scope.viewOpportunity = function() {
    console.log("Opening Opportunity-view");
    doitOppViewAPI.call(_reqParams).then(function(resp){
      $scope.opportunityData = resp.data.opportunity;
      $scope.opportunityData.advertise_start_date = moment($scope.opportunityData.advertise_start_date).format('LL');
      $scope.opportunityData.advertise_end_date = moment($scope.opportunityData.advertise_end_date).format('LL');
      $scope.opportunityData.created = moment($scope.opportunityData.created).format('LL');
      $scope.opportunityData.updated = moment($scope.opportunityData.updated).format('LL');
      $scope.opportunityData.specific_start_date = moment($scope.opportunityData.specific_start_date).format('LL');
      $scope.opportunityData.specific_end_date = moment($scope.opportunityData.specific_end_date).format('LL');
      console.log($scope.opportunityData);
    }, function(err){
      alert(err);
    });
  };

  $scope.saveOpportunity = function() {
    console.log("--------- Saving Opportunity ------------");
    //opp_id = $stateParams.uuid;
    saveOppAPI.call(_reqParams).then(function(resp){
      //console.log(resp);
      //$scope.status_one = resp;
      // Setup the loader
      if(resp.meta.code == "200" || resp.meta.code == "201"){
        $ionicLoading.show({
          content: 'Loading',
          template: 'Opportunity Saved',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }else{
        $ionicLoading.show({
          content: 'Loading',
          template: 'Failed',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }

      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
    }, function(err){
      alert(err);
    });
  };

  $scope.apply_opportunity = function(){
    applicationAPI.call(_reqParams).then(function(resp){
      // Setup the loader
      if(resp.meta.code == '200' || resp.meta.code == '201'){
        $ionicLoading.show({
          content: 'Loading',
          template: 'Applied Successfully...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }else{
        $ionicLoading.show({
          content: 'Loading',
          template: 'Application Failed',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }
      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
    });
  };

  // --------------
  // Subscribe User
  // --------------
  $scope.userSubscription = function(org_id){
    uuid = org_id;
    userSubscriptionAPI.call(uuid).then(function(resp){
      $scope.response = resp;
      // Setup the loader
      if(resp.meta.code == '200' || resp.meta.code == '201'){
        $ionicLoading.show({
          content: 'Loading',
          template: 'User Subscribed...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }else{
        $ionicLoading.show({
          content: 'Loading',
          //template: 'Subscription Failed....',
          template: 'Subscription Failed...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }

      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
      $scope.sub_status = resp;
      console.log(resp);
      //console.log($scope.opportunityData);
    }, function(err){
      alert(err);
    });
  };

  $timeout(function () {
    $ionicLoading.hide();
  }, 3000);
})

.controller('JobsCtrl', function($scope, $state, $http, $stateParams, $ionicModal, $ionicLoading, $timeout){
  $scope.$on('$ionicView.enter', function(e) {
    console.log("page loaded - search volunteering ");
  });

  $ionicModal.fromTemplateUrl('templates/modal-roles.html', { scope: $scope, animation: 'slide-in-up' }).then(function(modal) { $scope.rolesChooser = modal; });
  $ionicModal.fromTemplateUrl('templates/modal-location.html', { scope: $scope, animation: 'slide-in-up' }).then(function(modal) { $scope.locationChooser = modal; });

  $scope.showRolesChooser = function() {
    $scope.rolesChooser.show();
  };

  $scope.hideRolesChooser = function() {
    $scope.rolesChooser.hide();
  };

  $scope.showLocationChooser = function() {
    $scope.locationChooser.show();
  };

  $scope.hideLocationChooser = function() {
    $scope.locationChooser.hide();
  };

  $scope.isLoggedin = _is_loggedin;
  $scope.salary = {};
  $scope.roles = roles;
  $scope.selection_roles = [];
  $scope.selection_roles_name = [];
  $scope.selection_roles_text = "Please Select";
  $scope.co_ordinates = {};
  $scope.search = {};

  $scope.listOfLocations = [];

  $scope.updateSelection = function(position, roles) {
    angular.forEach(roles, function(item, index) {
      if (position != index)
      item.selected = false;
    });
  };

  // Watch roles for changes
  $scope.$watch('roles|filter:{selected:true}', function (nv) {
    $scope.selection_roles = nv.map(function (role) {
      return role.name;
    });
  }, true);

  $scope.$watch('roles|filter:{selected:true}', function (nv) {
    $scope.selection_roles_name = nv.map(function (role) {
      return role.id;
    });
    var length = $scope.selection_roles_name.length;
    if(length > 0){
      $scope.selection_roles_text = $scope.selection_roles_name[0];
    }
  }, true);

  $scope.updateLocation = function(position, listOfLocations) {
    angular.forEach(listOfLocations, function(item, index) {
      if (position != index)
      item.selected = false;
    });
  };

  $scope.$watch('listOfLocations|filter:{selected:true}', function (nv) {
    $scope.selection_location = nv.map(function (interest) {
      return interest.name;
    });
    var str = $scope.selection_location.toString();
    var ordinates = str.split(",");
    $scope.co_ordinates.lat = ordinates[0];
    $scope.co_ordinates.lng = ordinates[1];
  }, true);

  $scope.$watch('listOfLocations|filter:{selected:true}', function (nv) {
    $scope.selection_location_names = nv.map(function (interest) {
      return interest.id;
    });
    $scope.co_ordinates.location = $scope.selection_location_names[0];
  }, true);

  $scope.findOrdinates = function(){
    $ionicLoading.show({
      content: 'Loading',
      template: 'Fetching Your Current Location',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });

    var fgGeo2 = window.navigator.geolocation;

    fgGeo2.getCurrentPosition(function(location) {
      $ionicLoading.hide();
      $ionicLoading.show({
        content: 'Loading',
        template: 'Location Available',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });

      //console.log(location);
      $scope.co_ordinates.lat = location.coords.latitude;
      $scope.co_ordinates.lng = location.coords.longitude;
      $scope.co_ordinates.location = "Using your current location";

      $timeout(function () {
        $ionicLoading.hide();
      }, 1000);
    }, function(err){
      $ionicLoading.show({
        content: 'Loading',
        template: 'No location data',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });

      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
    });
  };

  // ------------------
  // Get Users Location
  // ------------------
  $scope.searchLocation = function(){
    var location = $scope.search.query;

    var length = location.length;

    if(length >= 3){
      $http.get('https://api.do-it.org/v1/location/uk/locations?name='+location).success(function(resp) {
        $scope.listOfLocations = [];
        for(i in resp.data.items){
          var temp = {
            name : resp.data.items[i].lat+","+resp.data.items[i].lng,
            id : resp.data.items[i].name,
            selected : false
          };
          $scope.listOfLocations.push(temp);
        }
        console.log($scope.listOfLocations);
      });
    }else{
      $scope.listOfLocations = [];
    }
  };

  $scope.searchJobs = function(){
    if($scope.selection_roles != null && $scope.selection_roles != undefined) { var _role = $scope.selection_roles; } else { var _role = ""; }

    if($scope.salary.salary_from != null && $scope.salary.salary_from != undefined) { var from_salary = $scope.salary.salary_from; } else { var from_salary = "";}

    if($scope.salary.salary_to != null && $scope.salary.salary_to != undefined) { var to_salary = $scope.salary.salary_to; } else { var to_salary = "";}

    if(($scope.co_ordinates.lat != null && $scope.co_ordinates.lat != undefined) && ($scope.co_ordinates.lng != null && $scope.co_ordinates.lng != undefined)){
      var _latitude = $scope.co_ordinates.lat;
      var _longtitude = $scope.co_ordinates.lng;
    }else{
      var _latitude = "";
      var _longtitude = "";
    }

    $state.go('app.jobs-res', {role : _role, lat : _latitude, lng : _longtitude, salaryFrom : from_salary, salaryTo: to_salary});
  };
})

.controller('SearchJobsCtrl', function($scope, $state, $stateParams, jobsAPI){
  $scope.$on('$ionicView.enter', function(e) {
    console.log("page loaded - search volunteering ");
  });

  $scope.isLoggedin = _is_loggedin;
  $scope.current_page = 1;
  $scope.noMoreItemsAvailable = false;
  //_reqParams = {role: $stateParams.role, location_id: $stateParams.locationId, salary_from: $stateParams.salaryFrom, salary_to: $stateParams.salaryTo};
  _reqParams = {role : $stateParams.role, lat: $stateParams.lat, lng: $stateParams.lng, salary_from: $stateParams.salaryFrom, salary_to: $stateParams.salaryTo, page: $scope.current_page};
  console.log(_reqParams);

  $scope.searchJobs = function(){
    jobsAPI.call(_reqParams).then(function(resp){
      $scope.listOfJobs = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      $scope.hasItems = true;
      console.log($scope.listOfJobs);
    }, function(err){
      alert(err);
    });
  };

  $scope.jobs_nextpage = function(){
    $scope.current_page = $scope.current_page+1;
    _reqParams.page = $scope.current_page;
    jobsAPI.call(_reqParams).then(function(resp){
      $scope.listOfJobs = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      $scope.hasItems = true;
      if(!resp.links.next){$scope.noMoreItemsAvailable = true;}else{$scope.noMoreItemsAvailable = false;}
      console.log($scope.listOfJobs);
    }, function(err){
      alert(err);
    });
  };

  $scope.jobs_previouspage = function(){
    $scope.current_page = $scope.current_page-1;
    _reqParams.page = $scope.current_page;
    jobsAPI.call(_reqParams).then(function(resp){
      $scope.listOfJobs = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      $scope.hasItems = true;
      if(!resp.links.next){$scope.noMoreItemsAvailable = true;}else{$scope.noMoreItemsAvailable = false;}
      console.log($scope.listOfJobs);
    }, function(err){
      alert(err);
    });
  };

  $scope.viewJobs = function(id){
    $state.go('app.job-view', {uuid : id});
  }
})

.controller('viewJobsCtrl', function($scope, $state, $stateParams, $ionicLoading, $timeout, viewJobAPI, saveJobsAPI){
  $scope.$on('$ionicView.enter', function(e) {
    console.log("page loaded - search volunteering ");
  });

  $scope.is_loggedin = _is_loggedin;

  _reqParams = {
    uuid : $stateParams.uuid
  };

  $scope.viewJob = function() {
    console.log("Opening Job-view");
    viewJobAPI.call(_reqParams).then(function(resp){
      $scope.jobData = resp.data.job;
      $scope.jobData.application_deadline = moment($scope.jobData.application_deadline).format('LL');
      console.log($scope.jobData);
    }, function(err){
      alert(err);
    });
  };

  $scope.save_for_later = function(){
    saveJobsAPI.call(_reqParams).then(function(resp){
      if(resp.meta.code == "200" || resp.meta.code == "201") {
        $ionicLoading.show({
          content: 'Loading',
          template: 'Job Saved',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }else{
        $ionicLoading.show({
          content: 'Loading',
          template: 'Failed to save job'+resp.meta.code,
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }

      $scope.job_post_res = resp;

      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
    }, function(err){
      alert(err);
    });
  };
})
// .controller('OrgsCtrl', function($scope, $state, $stateParams, $ionicModal, $timeout, $ionicLoading, $http, orgsAPI){
//   $scope.$on('$ionicView.enter', function(e) {
//     console.log("page loaded - search volunteering ");
//   });

//   $scope.isLoggedin = _is_loggedin;
//   $scope.current_page = 1;
//   $scope.noMoreItemsAvailable = false;
//   _reqParams = {page : $scope.current_page};
//   $scope.listOrgs = function(){
//     orgsAPI.call(_reqParams).then(function(resp){
//       $scope.listOfOrgs = resp.data.items;
//       $scope.total_items = resp.meta.total_items;
//       $scope.hasItems = true;
//       if(!resp.links.next){$scope.noMoreItemsAvailable = true;}else{$scope.noMoreItemsAvailable = false;}
//       console.log(resp);
//       //console.log($scope.next);
//     }, function(err){
//       alert(err);
//     });
//   };

//   $scope.organisations_nextpage = function(){
//     $scope.current_page = $scope.current_page+1;
//     _reqParams.page = $scope.current_page;
//     orgsAPI.call(_reqParams).then(function(resp){
//       $scope.listOfOrgs = resp.data.items;
//       $scope.total_items = resp.meta.total_items;
//       $scope.hasItems = true;
//       if(!resp.links.next){$scope.noMoreItemsAvailable = true;}else{$scope.noMoreItemsAvailable = false;}
//       console.log(resp);
//       //console.log($scope.next);
//     }, function(err){
//       alert(err);
//     });
//   };

//   $scope.organisations_previouspage = function(){
//     $scope.current_page = $scope.current_page-1;
//     _reqParams.page = $scope.current_page;
//     orgsAPI.call(_reqParams).then(function(resp){
//       $scope.listOfOrgs = resp.data.items;
//       $scope.total_items = resp.meta.total_items;
//       $scope.hasItems = true;
//       if(!resp.links.next){$scope.noMoreItemsAvailable = true;}else{$scope.noMoreItemsAvailable = false;}
//       console.log(resp);
//       //console.log($scope.next);
//     }, function(err){
//       alert(err);
//     });
//   };

//   $scope.viewOrg = function(id){
//     $state.go('app.org-view', {id : id});
//   }
// })

.controller('OrgCtrl', function($scope, $state, $stateParams, $ionicLoading, $timeout, userSubscriptionAPI, orgAPI){
  $scope.$on('$ionicView.enter', function(e) {
    console.log("page loaded - search volunteering ");
  });

  $scope.isLoggedin = _is_loggedin;
  _reqParams = {id : $stateParams.id};

  // Loader Function
  $ionicLoading.show({
    content: 'Loading',
    template: 'Please Wait...',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  // -------------
  // Get Orgs Data
  // -------------
  $scope.viewOrg = function(){
    orgAPI.call(_reqParams).then(function(resp){
      $scope.orgData = resp.data.recruiter;
      $scope.orgData.created = moment($scope.orgData.created).format('LL');
      console.log($scope.orgData);
    }, function(err){
      alert(err);
    });
  };

  // --------------
  // Subscribe User
  // --------------
  $scope.userSubscription = function(org_id){
    uuid = org_id;
    userSubscriptionAPI.call(uuid).then(function(resp){
      $scope.response = resp;
      // Setup the loader
      if(resp.meta.code == '200' || resp.meta.code == '201'){
        $ionicLoading.show({
          content: 'Loading',
          template: 'User Subscribed...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }else{
        $ionicLoading.show({
          content: 'Loading',
          template: 'Subscription Failed...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }

      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
      $scope.sub_status = resp;
      //console.log(resp);
      //console.log($scope.opportunityData);
    }, function(err){
      alert(err);
    });
  };

  // ----------------------------
  // View Opportunities Of An Org
  // ----------------------------
  $scope.viewOpportunities = function(org_id){
    $state.go('app.org-opps-list',{id:org_id});
  }

  // ----------------------------
  // View Opportunities Of An Org
  // ----------------------------
  $scope.viewOpportunitie = function(org_id){
    //console.log(org_id);
    uuid = org_id;
    userSubscriptionAPI.call(uuid).then(function(resp){
      // Setup the loader
      if(resp.meta.code == 200){
        $ionicLoading.show({
          content: 'Loading',
          template: 'User Subscribed...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }else{
        $ionicLoading.show({
          content: 'Loading',
          //template: 'Subscription Failed....',
          template: ' Subscription Failed...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }

      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
      $scope.sub_status = resp;
      console.log(resp);
      //console.log($scope.opportunityData);
    }, function(err){
      alert(err);
    });
  };
  // ------------------------
  // Default timeout function
  // ------------------------
  $timeout(function () {
    $ionicLoading.hide();
  }, 3000);
})

.controller('OrgOppsCtrl', function($scope, $state, $stateParams, orgsOppAPI){
  $scope.$on('$ionicView.enter', function(e) {
    console.log("page loaded - search volunteering ");
  });

  $scope.isLoggedin = _is_loggedin;
  uuid = $stateParams.id;
  // ---------------------------------
  // Get Subscribed Organisations List
  // ---------------------------------
  $scope.getOppsList = function(){
    orgsOppAPI.call(uuid).then(function(resp){
      for(var i in resp.data.items) {
        var _tsdate = resp.data.items[i].specific_start_date;
        var _created = resp.data.items[i].created;
        var _updated = resp.data.items[i].updated;
        var _tedate = resp.data.items[i].specific_end_date;
        resp.data.items[i].specific_start_date = moment(_tsdate).format('LL');
        resp.data.items[i].created = moment(_created).format('LL');
        resp.data.items[i].specific_end_date = moment(_tedate).format('LL');
        resp.data.items[i].updated = moment(_updated).format('LL');
      }
      $scope.listOfOpportunities = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      if($scope.total_items != null || $scope.total_items != undefined ) {
        $scope.hasItems = true;
      }else{
        $scope.hasItems = false;
      }
      console.log($scope.listOfOpportunities);
    }, function(err){
      alert(err);
    });
  };
  // ----------------
  // View Opportunity
  // ----------------
  $scope.viewOpportunity = function(uuid){
    $state.go('app.opportunity-view', {uuid : uuid})
  };
})

.controller('dashboardCtrl', function($scope, $state, $stateParams, infoAPI){
  $scope.isLoggedin = _is_loggedin;
  $scope.profile = {};

  _userId = $stateParams.id;
  //console.log(_userId);

  // --------------------
  // Get User Information
  // --------------------
  $scope.getUserInfo = function(){
    infoAPI.call(_userId).then(function(resp){
      $scope.profile = resp.data.user;
      $scope.profile.email = window.localStorage['email'];
      console.log($scope.profile);
    }, function(err){
      alert(err);
    });
  }

  // --------------
  // Get User Stats
  // --------------
  $scope.viewStats = function(){
    $state.go('app.stats', {id:_userId});
  }

  // ---------------------------
  // Get User Saved Oppotunities
  // ---------------------------
  $scope.getOppInfo = function() {
    $state.go('app.opportunities-saved');
  }

  // ------------------
  // Edit Users Profile
  // ------------------
  $scope.editProfile = function(){
    $state.go('app.edit-profile', {id:_userId});
  }

  // ---------------------------------
  // Get User Subscribed Organisations
  // ---------------------------------
  $scope.listOfOrganisations = function(){
    $state.go('app.organisations-subscribed');
  }

  // --------------------------------
  // Get User Registered Oppotunities
  // --------------------------------
  $scope.listOfOpportunities = function(){
    $state.go('app.opportunities-registered', {id:_userId});
  }

  // -------------------
  // Get User Saved Jobs
  // -------------------
  $scope.listOfJobs = function(){
    console.log("ghhhhh");
    $state.go('app.jobs-saved');
  }
})

.controller('subscribed-orgsCtrl', function($scope, $state, subscribed_orgsAPI){
  $scope.isLoggedin = _is_loggedin;
  // ---------------------------------
  // Get Subscribed Organisations List
  // ---------------------------------
  $scope.getSubedOrgs = function(){
    subscribed_orgsAPI.call().then(function(resp){
      $scope.orgsList = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      if($scope.total_items != null || $scope.total_items != undefined ) {
        $scope.hasItems = true;
      }else{
        $scope.hasItems = false;
      }
      console.log($scope.orgsList);
    }, function(err){
      alert(err);
    });
  };
  $scope.viewOrg = function(id){
    $state.go('app.org-view', {id : id});
  };
})

.controller('registered-oppsCtrl', function($scope, $state, $stateParams, registered_oppsAPI){
  $scope.isLoggedin = _is_loggedin;
  userId = $stateParams.id;
  //console.log(_userId);

  // ----------------------------------
  // Get User's Registered Oppotunities
  // ----------------------------------
  $scope.getRegOpps = function(){
    registered_oppsAPI.call(userId).then(function(resp){
      $scope.oppsList = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      if($scope.total_items != null || $scope.total_items != undefined ) {
        $scope.hasItems = true;
      }else{
        $scope.hasItems = false;
      }
      console.log($scope.orgsList);
    }, function(err){
      alert(err);
    });
  };
  $scope.viewOpportunity = function(id){
    $state.go('app.opportunity-view', {uuid : id});
  };
})

// .controller('recruiter-dashboardCtrl', function($scope, $state, $stateParams, infoAPI){
//   $scope.isLoggedin = _is_loggedin;
//   $scope.profile = {};

//   _userId = $stateParams.id;
//   //console.log(_userId);

//   // --------------------
//   // Get User Information
//   // --------------------
//   $scope.getUserInfo = function(){
//     infoAPI.call(_userId).then(function(resp){
//       $scope.profile = resp.data.user;
//       $scope.profile.email = window.localStorage['email'];
//       console.log($scope.profile);
//     }, function(err){
//       alert(err);
//     });
//   }

//   // ------------------------------
//   // Get User Managed Opportunities
//   // ------------------------------
//   $scope.listOfOpportunities = function(){
//     $state.go('app.opportunities-managed');
//   }

//   // ------------------------------
//   // Get User Managed Organisations
//   // ------------------------------
//   $scope.listOfOrganisations = function(){
//     $state.go('app.organisations-managed', {id : _userId});
//   }

//   // ---------------------------
//   // Get User Managed Volunteers
//   // ---------------------------
//   $scope.listOfVolunteers = function(){
//     $state.go('app.volunteers-managed');
//   }

//   // ---------------------
//   // Get User Managed Jobs
//   // ---------------------
//   $scope.listOfJobs = function(){
//     $state.go('app.jobs-managed');
//   }

//   // ------------------------------
//   // Get Current Users Applications
//   // ------------------------------
//   $scope.listOfApplications = function(){
//     $state.go('app.applications-user');
//   }
// })

.controller('statsCtrl', function($scope, $state, $stateParams, infoAPI){
  $scope.isLoggedin = _is_loggedin;
  $scope.profile = {};
  /*$scope.profile = {
    'first_name' : 'neetu',
    'email' : 'neetuagw@spartatec.co.uk',
    'bio' : 'I am a Mobile Application Developer specialising in Andrid Platform'
  };*/

  _userId = $stateParams.id;
  console.log(_userId);

  $scope.getUserInfo = function(){
    infoAPI.call(_userId).then(function(resp){
      $scope.profile = resp.data.user;
      $scope.profile.email = window.localStorage['email'];
      console.log($scope.profile);
    }, function(err){
      alert(err);
    });
  }
})

.controller('savedOpportunitiesCtrl', function($scope, $state, $ionicModal, savedOppAPI){
  $scope.isLoggedin = _is_loggedin;
  $scope.opportunityData = {};
  $scope.getOppInfo = function(){
    savedOppAPI.call().then(function(resp){
      $scope.opportunityData = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      if($scope.total_items != null || $scope.total_items != undefined ) {
        $scope.hasItems = true;
      }else{
        $scope.hasItems = false;
      }
      console.log($scope.opportunityData);
    }, function(err){
      alert(err);
    });
  };
  $scope.viewOpportunity = function(uuid){
    $state.go('app.opportunity-view', {uuid : uuid});
  };
})

.controller('savedJobsCtrl', function($scope, $state, $ionicModal, savedJobsAPI){
  $scope.isLoggedin = _is_loggedin;
  $scope.jobsData = {};
  $scope.hasItems = false;
  $scope.getJobs = function(){
    savedJobsAPI.call().then(function(resp){
      $scope.jobsData = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      if($scope.total_items != null || $scope.total_items != undefined ) {
        $scope.hasItems = true;
      }else{
        $scope.hasItems = false;
      }
      //console.log($scope.jobsData);
    }, function(err){
      alert(err);
    });
  }
})

.controller('recruiter-oppCtrl', function($scope, $state, $ionicModal, recOppsAPI){
  $scope.isLoggedin = _is_loggedin;
  $scope.hasItems;
  $scope.listOfOpportunities = {};
  $scope.getOppsList = function(){
    recOppsAPI.call().then(function(resp){
      $scope.listOfOpportunities = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      if($scope.total_items != null || $scope.total_items != undefined ) {
        $scope.hasItems = true;
      }else{
        $scope.hasItems = false;
      }
      console.log($scope.listOfOpportunities);
    }, function(err){
      alert(err);
    });
  };
  $scope.viewOpportunity = function(uuid){
    $state.go('app.opp-reg-view', {uuid : uuid});
  };
})

.controller('recruiter-orgCtrl', function($scope, $state, $ionicModal, $stateParams, recOrgsAPI){
  $scope.hasItems;
  $scope.isLoggedin = _is_loggedin;
  $scope.listOfOrganisations = {};
  _userId = $stateParams.id;
  $scope.getOrgsList = function(){
    recOrgsAPI.call(_userId).then(function(resp){
      $scope.listOfOrganisations = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      if($scope.total_items != null || $scope.total_items != undefined ) {
        $scope.hasItems = true;
      }else{
        $scope.hasItems = false;
      }
      console.log($scope.listOfOrganisations);
    }, function(err){
      alert(err);
    });
  };
  $scope.viewOrg = function(id){
    $state.go('app.org-view', {id : id});
  }
})

.controller('recruiter-volCtrl', function($scope, $state, $ionicModal, recVolsAPI){
  $scope.hasItems;
  $scope.isLoggedin = _is_loggedin;
  $scope.listOfVolunteers = {};
  $scope.getVolsList = function(){
    recVolsAPI.call().then(function(resp){
      $scope.listOfVolunteers = resp.data.volunteers;
      $scope.total_items = resp.meta.total_items;
      if($scope.total_items != null || $scope.total_items != undefined ) {
        $scope.hasItems = true;
      }else{
        $scope.hasItems = false;
      }
      console.log($scope.listOfVolunteers);
    }, function(err){
      alert(err);
    });
  }
})

.controller('recruiter-appCtrl', function($scope, $state, $ionicModal, recAppsAPI){
  $scope.hasItems;
  $scope.isLoggedin = _is_loggedin;
  $scope.listOfApplications = {};
  $scope.getAppsList = function(){
    recAppsAPI.call().then(function(resp){
      $scope.listOfApplications = resp.data.items;
      $scope.total_items = resp.meta.total_items;
      if($scope.total_items != null || $scope.total_items != undefined ) {
        $scope.hasItems = true;
      }else{
        $scope.hasItems = false;
      }
      console.log($scope.listOfApplications);
    }, function(err){
      alert(err);
    });
  }
})

.controller('recruiter-jobsCtrl', function($scope, $state, $ionicModal, recJobsAPI){
  $scope.hasItems;
  $scope.isLoggedin = _is_loggedin;
  $scope.listOfJobs = {};
  $scope.getJobsList = function(){
    recJobsAPI.call().then(function(resp){
      $scope.listOfJobs = resp.data;
      $scope.total_items = resp.meta.total_items;
      if($scope.total_items != null || $scope.total_items != undefined ) {
        $scope.hasItems = true;
      }else{
        $scope.hasItems = false;
      }
      console.log($scope.listOfJobs);
    }, function(err){
      alert(err);
    });
  }
})

.controller('profile-editCtrl', function($scope, $state, $ionicModal, $stateParams, proEditAPI, updatePasswordAPI, infoAPI, updateEmailAPI){
  $scope.formData = {};
  $scope.isLoggedin = _is_loggedin;
  $scope.response;
  $scope.profile = {};
  $scope.ethnicities = [
    { "value" : 1, "text" : "British" }, { "value" : 5, "text" : "Irish" },
    { "value" : 6, "text" : "Gypsy or Irish Traveller" }, { "value" : 7, "text" : "Other White background" },
    { "value" : 8, "text" : "White and Black Caribbean" }, { "value" : 9, "text" : "White and Black African" },
    { "value" : 10, "text" : "White and Asian" }, { "value" : 11, "text" : "Other Mixed / Multiple ethnic background" },
    { "value" : 12, "text" : "Indian" }, { "value" : 13, "text" : "Pakistani" },
    { "value" : 14, "text" : "Bangladeshi" }, { "value" : 15, "text" : "Chinese" },
    { "value" : 16, "text" : "Other Asian background" }, { "value" : 17, "text" : "African" },
    { "value" : 18, "text" : "Caribbean" }, { "value" : 19, "text" : "Other Black / African / Caribbean background" },
    { "value" : 20, "text" : "Arab" }, { "value" : 21, "text" : "Other ethnic group" }
  ];
  _userId = $stateParams.id;

  $scope.updateUser = function(){
    body = {
      "first_name" : $scope.profile.first_name,
      "last_name" : $scope.profile.last_name,
      //"gender" : $scope.profile.gender,
      "ethnicity" : $scope.profile.ethnicity,
      "phone" : $scope.profile.phone,
      "bio" : $scope.profile.bio
    };

    //console.log(body);

    proEditAPI.call(body, _userId).then(function(resp){
      //console.log(resp);
      $scope.response = resp;
      /*$scope.userData = resp.data;
      if(resp.meta.code == 200){
        alert("Successfully Updated Your Profile");
      }
      console.log($scope.userData);*/
    }, function(err){
      alert(err);
    });
  }

  $scope.getUserInfo = function(){
    infoAPI.call(_userId).then(function(resp){
      $scope.profile = resp.data.user;
      $scope.profile.email = window.localStorage['email'];
      $scope.profile.phone = window.localStorage['phone'];
      $scope.profile.ethnicity = window.localStorage['ethnicity'];
      console.log($scope.profile);
    }, function(err){
      alert(err);
    });
  }

  $scope.updateEmail = function(){
    body = {
      "email" : $scope.profile.email,
      "email_confirm" : $scope.profile.email_confirm
    };
    updateEmailAPI.call(body, _userId).then(function(resp){
      console.log(resp);
      $scope.response = resp.meta.errors;
      //alert("");
    }, function(err){
      alert(err);
    });
  }

  $scope.updatePassword = function(){
    body = {
      "password": $scope.profile.password,
      "password_confirm": $scope.profile.password_confirm,
      "password_current": $scope.profile.password_current
    };
    updatePasswordAPI.call(body, _userId).then(function(resp){
      console.log(resp);
      $scope.response = resp;
      //alert("");
    }, function(err){
      alert(err);
    });
  }
})

// .controller('articlesCtrl', function($scope, $state, $http, articlesAPI){
//   $scope.news = {};
//   $scope.isLoggedin = _is_loggedin;
//   $scope.current_page = 1;
//   $scope.articles = [];
//   $scope.getArticles = function(){
//     articlesAPI.call().then(function(resp){
//       $scope.articles = resp.data.items;
//       console.log($scope.articles);
//     }, function(err){
//       alert(err);
//     });
//   };

//   $scope.loadMore = function(){
//     $scope.current_page = $scope.current_page+1;
//     console.log($scope.current_page);
//     $http.get('https://api.do-it.org/v1/news?page='+$scope.current_page).success(function(resp) {
//       //console.log(resp);
//       for(i in resp.data.items){
//         $scope.articles.push(resp.data.items[i]);
//       }
//       console.log($scope.articles);
//       $scope.$broadcast('scroll.infiniteScrollComplete');
//     });

//   }



//   $scope.getStarted = function(){
//     $state.go('app.news-doit');
//   };
//   $scope.viewArticle = function(article_id) {
//     $state.go('app.news-view', {id : article_id});
//   }
// })

.controller('articleCtrl', function($scope, $state, $stateParams, articleAPI){
  article_id = $stateParams.id;
  $scope.isLoggedin = _is_loggedin;
  $scope.news = {};
  $scope.getArticle = function(){
    articleAPI.call(article_id).then(function(resp){
      $scope.article = resp.data.article;
      console.log($scope.article);
    }, function(err){
      alert(err);
    });
  }

  $scope.viewArticle = function(article_id) {
    $state.go('app.news-view', {id : article_id});
  }
})

.controller('getStartedtCtrl', function($scope, $state, $ionicModal, doitAPI) {

})
.controller('DemoCtrl', function($scope, $state, $ionicModal, doitAPI) {
  $ionicModal.fromTemplateUrl('templates/modal-skills-chooser.html', { scope: $scope, animation: 'slide-in-up' }).then(function(modal) { $scope.skillsChooser = modal; });
  $ionicModal.fromTemplateUrl('templates/modal-interestedin.html', { scope: $scope, animation: 'slide-in-up' }).then(function(modal) { $scope.interestedinChooser = modal; });
  $ionicModal.fromTemplateUrl('templates/modal-distance-chooser.html', { scope: $scope, animation: 'slide-in-up' }).then(function(modal) { $scope.distanceChooser = modal; });
  $ionicModal.fromTemplateUrl('templates/modal-roles.html', { scope: $scope, animation: 'slide-in-up' }).then(function(modal) { $scope.rolesChooser = modal; });

  $scope.showSkillsChooser = function() {
    $scope.skillsChooser.show();
  }

  $scope.hideSkillsChooser = function() {
    $scope.skillsChooser.hide();
  }

  $scope.showInterestedinChooser = function() {
    $scope.interestedinChooser.show();
  }

  $scope.hideInterestedinChooser = function() {
    $scope.interestedinChooser.hide();
  }

  $scope.showDistanceChooser = function() {
    $scope.distanceChooser.show();
  }

  $scope.hideDistanceChooser = function() {
    $scope.distanceChooser.hide();
  }

  $scope.showRolesChooser = function() {
    $scope.rolesChooser.show();
  }

  $scope.hideRolesChooser = function() {
    $scope.rolesChooser.hide();
  }

  $scope.searchOpportunities = function() {
    console.log("searching...");
    $state.go('app.search-res');
  }

  $scope.searchJobs = function() {
    console.log("searching...");
    $state.go('app.jobs-res');
  }

  $scope.viewOpportunity = function() {
    console.log("opening opp..");
    $state.go('app.opportunity-view');
  }

  $scope.test1 = function() {
    console.log("test api call - test 1");
    doitAPI.call();
  }

  $scope.isLoggedin = _is_loggedin;

  setTimeout(function() {
    console.log("test api call");
    doitAPI.call().then(function(resp){
      console.log(resp);
      // console.log(resp.data.items.length);
    }, function(err){});
  }, 2000);
})

.controller('view-opp-reg-ctrl', function($scope, $state, $stateParams, $timeout, $ionicLoading, doitOppViewAPI, saveOppAPI, applyOppAPI, userSubscriptionAPI){
  $scope.$on('$ionicView.enter', function(e) {
    console.log("page loaded - search volunteering ");
  });

  $scope.is_loggedin = _is_loggedin;
  $scope._status;
  _reqParams = {
    uuid : $stateParams.uuid
  };

  $ionicLoading.show({
    content: 'Loading',
    template: 'Please Wait...',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  $scope.viewOpportunity = function() {
    console.log("Opening Opportunity-view");
    doitOppViewAPI.call(_reqParams).then(function(resp){
      $scope.opportunityData = resp.data.opportunity;
      $scope.opportunityData.advertise_start_date = moment($scope.opportunityData.advertise_start_date).format('LL');
      $scope.opportunityData.advertise_end_date = moment($scope.opportunityData.advertise_end_date).format('LL');
      $scope.opportunityData.created = moment($scope.opportunityData.created).format('LL');
      $scope.opportunityData.updated = moment($scope.opportunityData.updated).format('LL');
      $scope.opportunityData.specific_start_date = moment($scope.opportunityData.specific_start_date).format('LL');
      $scope.opportunityData.specific_end_date = moment($scope.opportunityData.specific_end_date).format('LL');
      console.log($scope.opportunityData);
    }, function(err){
      alert(err);
    });
  };

  $timeout(function () {
    $ionicLoading.hide();
  }, 3000);
})
