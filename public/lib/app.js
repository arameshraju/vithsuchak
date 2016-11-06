var app=angular.module('vsApp',['ngRoute','firebase']);
app.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/login', {
                templateUrl : 'views/login.html',
                controller  : 'loginCtrl'
            
})
    .otherwise({
        redirectTo: '/login'
    });
        
        
});
app.config(function() {
  var config = {
    apiKey: "AIzaSyDnfKYpLl03w6uMHzhts9iEhNIV4yyTA3c",
    authDomain: "vithsuchak.firebaseapp.com",
    databaseURL: "https://vithsuchak.firebaseio.com",
    storageBucket: "vithsuchak.appspot.com"
    
  };
  firebase.initializeApp(config);
});
app.controller('mainCtrl',function($scope){
    
});
app.controller('loginCtrl',function($scope,$firebaseAuth,$firebaseObject){
     $scope.authObj = $firebaseAuth();
    //**************Sign Up code***************//
//$scope.authObj.$createUserWithEmailAndPassword("alluri.ramesh@gmail.com", "@ramehs77")
//  .then(function(firebaseUser) {
//    console.log("User " + firebaseUser.uid + " created successfully!");
//  }).catch(function(error) {
//    console.error("Error: ", error);
//  });
        //*************Sign in code**********************//
    $scope.authObj.$signInWithEmailAndPassword("alluri.ramesh@gmail.com", "@ramehs77").then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
    }).catch(function(error) {
        console.error("Authentication failed:", error);
    });
    
    //*********************Data save()*********//
    var ref = firebase.database().ref();
    var obj = $firebaseObject(ref);
    obj.test = [
        {name:'ramesh',age:30},
        {name:'raju',age:35},
        {name:'alluri',age:30},
    ];
    obj.$save().then(function(ref) {
        ref.key === obj.$id; // true
        
    }, function(error) {
    console.log("Error:", error);
    });
    
    
});