// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    

});  /*---------------end of device ready----------------*/






/*-------------
myApp.onPageInit('index', function (page) {
    // Do something here for the page

     function checkAUTH(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("can stay on this page");
             window.location.assign("main.html"); 
        }
      });
}

   
checkAUTH();
    
}) ---------end of index page ------*/






