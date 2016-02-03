angular.module('starter.services', [])
.factory('doitAPI', function($rootScope, $q, $state) {
  // $cordovaProgress, $cordovaSpinnerDialog, $cordovaToast
  return {
    call: function() {
      console.log("AJAX Call start");
      var def = $q.defer();
      // --------------------
      // Search Opportunities
      // --------------------
      var request = new XMLHttpRequest();
      //request.open('GET', 'https://api.do-it.org/v1/opportunities?location_id='+_reqParams.location_id+'&miles='+_reqParams.miles+'&interests='+_reqParams.interests+'&skills='+_reqParams.skills);
      request.open('GET', 'https://api.do-it.org/v1/opportunities?lat='+_reqParams.lat+'&lng='+_reqParams.lng+'&miles='+_reqParams.miles+'&interests='+_reqParams.interests+'&skills='+_reqParams.skills+'&page='+_reqParams.page);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          console.log('Status:', this.status);
          console.log('Headers:', this.getAllResponseHeaders());
          //console.log(this.responseText);
          def.resolve(JSON.parse(this.responseText));
        }
      };
      console.log(_reqParams);
      if(_reqParams) {
        request.send(JSON.stringify(_reqParams));
      }else{
        request.send();
      }
      // var request = new XMLHttpRequest();
			// request.open('POST', 'https://api.do-it.org/v1/users/login');
			// request.setRequestHeader('Content-Type', 'application/json');

			// request.onreadystatechange = function () {
			//   if (this.readyState === 4) {
			//     // console.log('Status:', this.status);
			//     // console.log('Headers:', this.getAllResponseHeaders());
      //        console.log(this.getResponseHeader('x-auth-token'));
      //        _authtoken = this.getResponseHeader('x-auth-token');
			//     // console.log('Body:', this.responseText);
      //        def.resolve(JSON.parse(this.responseText));
			//   }
			// };

			// var body = {
			//   'email': 'jeffreyroshan@gmail.com',
			//   'password': 'demo@1234'
			// };

			// request.send(JSON.stringify(body));


      //var request = new XMLHttpRequest();
      //request.open('GET', 'https://api.do-it.org/v1/users/messages');
      //request.setRequestHeader('Content-Type', 'application/json');
      //if(_authtoken)
      //request.setRequestHeader('X-Auth-Token', _authtoken);

      //request.onreadystatechange = function () {
      //  if (this.readyState === 4) {
          // console.log('Status:', this.status);
          // console.log('Headers:', this.getAllResponseHeaders());
          // console.log(this.responseText);
      //    def.resolve(JSON.parse(this.responseText));
      //  }
      //};

      //request.send();


   //    var request = new XMLHttpRequest();
   //    request.open('GET', 'https://api.do-it.org/v1/opportunities');
   //    request.setRequestHeader('Content-Type', 'application/json');

   //    request.onreadystatechange = function () {
   //      if (this.readyState === 4) {
   //        console.log('Status:', this.status);
   //        console.log('Headers:', this.getAllResponseHeaders());
   //        // console.log(this.responseText);
   //        def.resolve(JSON.parse(this.responseText));
   //      }
   //    };

   //    request.send();
   //    // def.resolve(data);
			// // def.reject('Error: '+errorThrown);
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('oppList_NextAPI', function($rootScope, $q, $state) {
  // $cordovaProgress, $cordovaSpinnerDialog, $cordovaToast
  return {
    call: function() {
      console.log("AJAX Call start");
      var def = $q.defer();
      // --------------------
      // Search Opportunities
      // --------------------
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.do-it.org'+_url);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          console.log('Status:', this.status);
          console.log('Headers:', this.getAllResponseHeaders());
          //console.log(this.responseText);
          def.resolve(JSON.parse(this.responseText));
        }
      };
      console.log(_reqParams);
      if(_reqParams) {
        request.send(JSON.stringify(_reqParams));
      }else{
        request.send();
      }
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('doitOppViewAPI', function($rootScope, $q, $state){
  return {
    call: function() {
      console.log("AJAX Call start");
      var def = $q.defer();

      // ----------------
      // View Opportunity
      // ----------------
      //console.log(_reqParams.id);
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.do-it.org/v1/opportunities/'+_reqParams.uuid);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          console.log('Status:', this.status);
          console.log('Headers:', this.getAllResponseHeaders());
          //console.log(this.responseText);
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('jobsAPI', function($rootScope, $q, $state){
  return {
    call: function() {

      console.log("AJAX Call start");
      var def = $q.defer();

      // ------------
      // Input filter
      // ------------
      var url = "https://api.do-it.org/v1/jobs?";
      if(_reqParams.role != "") { url += "role="+_reqParams.role+"&"}
      if(_reqParams.salary_from != "") { url += "salary_from="+_reqParams.salary_from+"&"}
      if(_reqParams.salary_to != "") { url += "salary_to="+_reqParams.salary_to+"&"}
      if(_reqParams.lat != "" && _reqParams.lng != "") { url += "lat="+_reqParams.lat+"&lng="+_reqParams.lng+"&miles=50"+"&"}
      url += "page="+_reqParams.page;
      console.log(url);
      // ----------------
      // View Opportunity
      // ----------------
      var request = new XMLHttpRequest();
      //request.open('GET', 'https://api.do-it.org/v1/jobs?role='+_reqParams.role+'&salary_from='+_reqParams.salary_from+'&salary_to='+_reqParams.salary_to+'&location_id='+_reqParams.location_id);
      //request.open('GET', 'https://api.do-it.org/v1/jobs?role='+_reqParams.role+'&salary_from='+_reqParams.salary_from+'&lat='+_reqParams.lat+'&lng='+_reqParams.lng);
      request.open('GET', url);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          console.log('Status:', this.status);
          console.log('Headers:', this.getAllResponseHeaders());
          //console.log(this.responseText);
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send(_reqParams);
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('viewJobAPI', function($rootScope, $q, $state){
  return {
    call: function() {

      console.log("AJAX Call start");
      var def = $q.defer();

      // ----------------
      // View Opportunity
      // ----------------
      //console.log(_reqParams.id);
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.do-it.org/v1/jobs/'+_reqParams.uuid);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          console.log('Status:', this.status);
          console.log('Headers:', this.getAllResponseHeaders());
          //console.log(this.responseText);
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send(_reqParams);
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

// .factory('orgsAPI', function($rootScope, $q, $state){
//   return {
//     call: function() {
//       console.log("AJAX Call start");
//       var def = $q.defer();

//       // ----------------
//       // View Opportunity
//       // ----------------
//       var request = new XMLHttpRequest();
//       request.open('GET', 'https://api.do-it.org/v1/orgs?page='+_reqParams.page);
//       request.setRequestHeader('Content-Type', 'application/json');
//       if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

//       request.onreadystatechange = function () {
//         if (this.readyState === 4) {
//           console.log('Status:', this.status);
//           console.log('Headers:', this.getAllResponseHeaders());
//           //console.log(this.responseText);
//           def.resolve(JSON.parse(this.responseText));
//         }
//       };
//       request.send();
//       return def.promise;
//     },
//     setToken: function(userid, usere, userp, authtoken, name) {
//       var def = $q.defer();
//       def.resolve(true);
//       return def.promise;
//     },
//     clearTokens: function() {
//       var def = $q.defer();
//       def.resolve(true);
//       return def.promise;
//     }
//   }
// })

.factory('orgAPI', function($rootScope, $q, $state){
  return {
    call: function() {
      console.log("AJAX Call start");
      var def = $q.defer();

      // ----------------
      // View Opportunity
      // ----------------
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.do-it.org/v1/orgs/'+_reqParams.id);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          console.log('Status:', this.status);
          console.log('Headers:', this.getAllResponseHeaders());
          //console.log(this.responseText);
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})
.factory('loginAPI', function($rootScope, $q, $state){
  return {
    call: function() {
      var def = $q.defer();
      // ----------------------
      // Login with credentials
      // ----------------------
      var request = new XMLHttpRequest();
			request.open('POST', 'https://api.do-it.org/v1/users/login');
			request.setRequestHeader('Content-Type', 'application/json');

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          _token = this.getResponseHeader('x-auth-token');
          window.localStorage['_authtoken'] = _token;
          def.resolve(JSON.parse(this.responseText));
			  }
			};
      request.send(JSON.stringify(_body));
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('signupAPI', function($rootScope, $q, $state){
  return {
    call: function() {
      var def = $q.defer();
      // ----------------------
      // signup with details
      // ----------------------
      var request = new XMLHttpRequest();
			request.open('POST', 'https://api.do-it.org/v1/users');
			request.setRequestHeader('Content-Type', 'application/json');

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
                     
          _token = this.getResponseHeader('x-auth-token');
          window.localStorage['_authtoken'] = _token;
          //def.resolve(JSON.parse(this.responseText));
			  }
			};
      request.send(JSON.stringify(_body));
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('logoutAPI', function($rootScope, $q, $state){
  return {
    call: function() {
      var def = $q.defer();
      // ----------------------
      // Login with credentials
      // ----------------------
      var request = new XMLHttpRequest();
			request.open('GET', 'https://api.do-it.org/v1/users/logout');
			request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
			  }
			};
      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('infoAPI', function($rootScope, $q, $state){
  return {
    call: function() {
      var def = $q.defer();
      // ----------------------
      // Login with credentials
      // ----------------------
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.do-it.org/v1/users/'+_userId);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('savedOppAPI', function($rootScope, $q, $state){
  return {
    call: function() {
      var def = $q.defer();
      // ----------------------
      // Login with credentials
      // ----------------------
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.do-it.org/v1/users/opportunities/saved');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('recOrgsAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // ------------------------------
      // Get User Managed Organisations
      // ------------------------------
      var request = new XMLHttpRequest();
      // https://api.do-it.org/v1/users/e87bdea1-f5ea-4be0-a7a4-541dc20ab478/orgs?page=1&sort=name&order=asc&name=suffok&start_date=2014-11-21&end_date=2014-11-21
      request.open('GET', 'https://api.do-it.org/v1/users/'+_userId+'/orgs');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send();

      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('recOppsAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // ------------------------------
      // Get User Managed Opportunities
      // ------------------------------
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.do-it.org/v1/users/opportunities/manage');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('recAppsAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // -----------------------------
      // Get User Managed Applications
      // -----------------------------
      var request = new XMLHttpRequest();
      // https://api.do-it.org/v1/users/current/applications?page=page&limit=limit
      request.open('GET', 'https://api.do-it.org/v1/users/applications/manage');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('recJobsAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // ---------------------
      // Get User Managed Jobs
      // ---------------------
      var request = new XMLHttpRequest();
      // https://api.do-it.org/v1/users/jobs/manage?title=foo&recruiter_id=e87bdea1-f5ea-4be0-a7a4-541dc20ab478&start_date=2014-08-10&end_date=2014-08-12&draft=1
      request.open('GET', 'https://api.do-it.org/v1/users/jobs/manage');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('recVolsAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // ---------------------------
      // Get User Managed Volunteers
      // ---------------------------
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.do-it.org/v1/users/volunteers/manage');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('proEditAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // -------------------
      // Update User Details
      // -------------------
      var request = new XMLHttpRequest();
      request.open('PUT', 'https://api.do-it.org/v1/users/'+_userId);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send(JSON.stringify(body));
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

// .factory('articlesAPI', function($rootScope, $q, $state){
//   return {
//     call : function(){
//       var def = $q.defer();
//       // ---------------------------
//       // Get User Managed Volunteers
//       // ---------------------------
//       var request = new XMLHttpRequest();
//       request.open('GET', 'https://api.do-it.org/v1/news');
//       request.setRequestHeader('Content-Type', 'application/json');
//       if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

//       request.onreadystatechange = function () {
//         if (this.readyState === 4) {
//           def.resolve(JSON.parse(this.responseText));
//         }
//       };
//       request.send();
//       return def.promise;
//     },
//     setToken: function(userid, usere, userp, authtoken, name) {
//       var def = $q.defer();
//       def.resolve(true);
//       return def.promise;
//     },
//     clearTokens: function() {
//       var def = $q.defer();
//       def.resolve(true);
//       return def.promise;
//     }
//   }
// })

.factory('articleAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // ---------------------------
      // Get User Managed Volunteers
      // ---------------------------
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.do-it.org/v1/news/'+article_id);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('subscribed_orgsAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // ---------------------------
      // Get User Managed Volunteers
      // ---------------------------
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.do-it.org/v1/users/subscriptions');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };
      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('registered_oppsAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // ---------------------------
      // Get User Managed Volunteers
      // ---------------------------
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.do-it.org/v1/users/current/applications');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };

      var body = {
        id : userId
      };

      request.send(JSON.stringify(body));
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('updateEmailAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // ---------------------------
      // Get User Managed Volunteers
      // ---------------------------
      var request = new XMLHttpRequest();
      //console.log(_userId);
      request.open('PUT', 'https://api.do-it.org/v1/users/email?id='+_userId);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };

      request.send(JSON.stringify(body));
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('updatePasswordAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // ---------------------------
      // Get User Managed Volunteers
      // ---------------------------
      var request = new XMLHttpRequest();
      //console.log(body);

      request.open('PUT', 'https://api.do-it.org/v1/users/password?id='+_userId);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };

      request.send(JSON.stringify(body));
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('saveOppAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // ---------------------------
      // Get User Managed Volunteers
      // ---------------------------
      var request = new XMLHttpRequest();
      //console.log(opp_id);

      request.open('POST', 'https://api.do-it.org/v1/users/opportunities/saved/'+_reqParams.uuid);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };

      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('savedJobsAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // ---------------------------
      // Get User Managed Volunteers
      // ---------------------------
      var request = new XMLHttpRequest();

      request.open('GET', 'https://api.do-it.org/v1/users/jobs/saved');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };

      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('locationAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      // ---------------------------
      // Get User Managed Volunteers
      // ---------------------------
      var request = new XMLHttpRequest();
      console.log(location);

      request.open('GET', 'https://api.do-it.org/v1/location/uk/locations?name='+location+'&limit=1');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };

      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('userSubscriptionAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      var request = new XMLHttpRequest();

      request.open('POST', 'https://api.do-it.org/v1/users/subscriptions/'+uuid);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };

      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('orgsOppAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      var request = new XMLHttpRequest();

      request.open('GET', 'https://api.do-it.org/v1/orgs/'+uuid+'/opportunities?page=1');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };

      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})

.factory('saveJobsAPI', function($rootScope, $q, $state){
  return {
    call : function(){
      var def = $q.defer();
      var request = new XMLHttpRequest();

      request.open('POST', 'https://api.do-it.org/v1/users/jobs/saved/'+_reqParams.uuid);
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader('X-Auth-Token', _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
        }
      };

      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})
.factory('applicationAPI', function($rootScope, $q, $state, $ionicLoading){
  return {
    call: function() {
      var def = $q.defer();
      // ----------------------
      // Login with credentials
      // ----------------------
      var request = new XMLHttpRequest();
      //request.open('GET', 'https://api.do-it.org/v1/orgs');
			request.open('POST', 'https://api.do-it.org/v1/opportunities/'+_reqParams.uuid+'/applications');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader("X-Auth-Token", _authtoken);}
      //console.log(_authtoken);
      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
			  }
			};
      var _body = {
        "micro_availability": [
          {
            "date": "2015-11-30",
            "start_time": "09:10",
            "end_time": "10:30"
          },
          {
            "date": "2015-12-02",
            "start_time": "15:20",
            "end_time": "16:45"
          }
        ],
      };
      request.send(JSON.stringify(_body));
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})
.factory('applicationAPI', function($rootScope, $q, $state, $ionicLoading){
  return {
    call: function() {
      var def = $q.defer();
      // ----------------------
      // Login with credentials
      // ----------------------
      var request = new XMLHttpRequest();
      //request.open('GET', 'https://api.do-it.org/v1/orgs');
			request.open('POST', 'https://api.do-it.org/v1/opportunities/'+_reqParams.uuid+'/applications');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader("X-Auth-Token", _authtoken);}
      //console.log(_authtoken);
      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
			  }
			};
      var _body = {
        "micro_availability": [
          {
            "date": "2015-11-30",
            "start_time": "09:10",
            "end_time": "10:30"
          },
          {
            "date": "2015-12-02",
            "start_time": "15:20",
            "end_time": "16:45"
          }
        ],
      };
      request.send(JSON.stringify(_body));
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})
.factory('applicationAPI', function($rootScope, $q, $state, $ionicLoading){
  return {
    call: function() {
      var def = $q.defer();
      // ----------------------
      // Login with credentials
      // ----------------------
      var request = new XMLHttpRequest();
      //request.open('GET', 'https://api.do-it.org/v1/orgs');
			request.open('POST', 'https://api.do-it.org/v1/opportunities/'+_reqParams.uuid+'/applications');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader("X-Auth-Token", _authtoken);}
      //console.log(_authtoken);
      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
			  }
			};
      var _body = {
        "micro_availability": [
          {
            "date": "2015-11-30",
            "start_time": "09:10",
            "end_time": "10:30"
          },
          {
            "date": "2015-12-02",
            "start_time": "15:20",
            "end_time": "16:45"
          }
        ],
      };
      request.send(JSON.stringify(_body));
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})
.factory('cancelApplicationAPI', function($rootScope, $q, $state, $ionicLoading){
  return {
    call: function() {
      var def = $q.defer();
      // ----------------------
      // Login with credentials
      // ----------------------
      var request = new XMLHttpRequest();
      request.open('POST', 'https://api.do-it.org/v1/opportunities/'+_reqParams.uuid+'/applications');
      request.setRequestHeader('Content-Type', 'application/json');
      if(_authtoken) {request.setRequestHeader("X-Auth-Token", _authtoken);}

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          def.resolve(JSON.parse(this.responseText));
			  }
			};
      request.send();
      return def.promise;
    },
    setToken: function(userid, usere, userp, authtoken, name) {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    },
    clearTokens: function() {
      var def = $q.defer();
      def.resolve(true);
      return def.promise;
    }
  }
})
