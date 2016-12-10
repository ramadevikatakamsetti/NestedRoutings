(function(){
    
    
    angular.module("route",["header","home","register","login","loginDetails", "ui.router"]);
    
    angular.module("route").config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
//               $urlRouterProvider.otherwise("/home");
        
        
        $stateProvider.state("home", {
            url:"/home",
            templateUrl: "app/template/home/home.html"
        })
        $stateProvider.state("home.login", {
            url:"/login",
            templateUrl: "app/template/login/login.html"
        })
        $stateProvider.state("home.login.loginDetails",{
            url:"/loginDetials",
            templateUrl:"app/template/LoginDetails/login.html"
        })
        $stateProvider.state("home.register", {
            url:"/register",
            templateUrl: "app/template/register/register.html"
             })
    }
               ]);
})();