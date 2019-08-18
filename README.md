This will help you only understanding the basics of the angularjs.

To follow from start step please check step by step commits 

********************
Angularjs Development
****************
let start with basic steps to start and Angularjs app developement

**************

To add dependency related to angularjs their are multipule ways

1.Download angularjs library by going to angularjs.org 
2.You can include AngularJS library from CDN url - https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js

**************
In the Example we are going to use CDN only 
*****************
Topics to be learned as part of AngularJS basics
***********
ng-app
Expressions
Directives
controllers
scopes
Events
Services
Filter
Modules 
Routers

**********************
ng-app

ng-app directive is the starting point of Angularjs Framework.Angularjs looks for ng-app in your html document if it is found then it bootstrap itself and compiles html template.

Generally it is placed at the starting of the DOM in HTML OR BODY tag but it is fine to place any where . it will start bootstrapping itself only for the DOM elements inside it.

*********************
Expressions

Angularjs expression are like javascript expression "{{ }}" where every the curle braces are placed their angularjs try to evalute the expression inside it and it will bind to respective tag. 

***********************
Directives

Directives are markers on a DOM element that tell AngularJS to attach a specified behavior to that DOM element or even transform the DOM element and its children. In short, it extends the HTML.

Most of the directives in AngularJS are starting with ng- where ng stands for Angular. AngularJS includes various built-in directives. In addition to this, you can create custom directives for your application.

ng-app,ng-init,ng-repeat,ng-if,ng-readonly,ng-show,ng-disable,ng-click,ng-bind,ng-model.

********************
Controllers

AngularJS applications are controlled by controllers.The ng-controller directive defines the application controller.A controller is a JavaScript Object, created by a standard JavaScript object constructor.AngularJS will invoke the controller with a $scope object.

*******************
Data Binding

In the Project i have given a sample of two way binding 
two way binding is achieved by using ng-model,
when a controller data is sent to view it is one way binding

****************************

