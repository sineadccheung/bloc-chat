<!doctype html>

<html ng-app = "myApp">

  <head>
    <script src="scripts/angular-ui-router.js"></script>
    <script>
    var app = angular.module("myApp", [ui.router]);
    </script>
  </head>

  <body></body>
</html>





$stateProvider.state('contacts', {
  template: '<h1>My Contacts</h1>'
})
