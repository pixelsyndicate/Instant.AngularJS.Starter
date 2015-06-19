
// this will specify our view mappings

var guidebookConfig = function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'ChaptersController',
        templateUrl: 'view/chapters.html'
    }).when('/chapter/:chapterId', {
        controller: 'ChaptersController',
        templateUrl: 'view/chapters.html'
    }).when('/addNote/:chapterId', {
        controller: 'AddNoteController',
        templateUrl: 'view/AddNote.html'
    }).when('/deleteNote/:chapterId/:noteId', {
        controller: 'DeleteNoteController',
        templateUrl: 'view/addNote.html'
    });
};

// here we are defining an Angular namespace ('called a module')
var Guidebook = angular.module('Guidebook', ['ngRoute'])
    .config(guidebookConfig);
// using a namespace, we are keeping the controllers and models in their own application namespace