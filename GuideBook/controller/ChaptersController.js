Guidebook.controller(
    'ChaptersController',
    function ($scope, $location, $routeParams, ChapterModel, NoteModel) {
        var chapters = ChapterModel.getChapters();
        for (var i=0; i<chapters.length; i++) {
            chapters[i].notes = NoteModel.getNotesForChapter(chapters[i].id);
        }
        // setting properties into $scope is making them available to the view or controller
        $scope.chapters = chapters;
        $scope.selectedChapterId = $routeParams.chapterId;
        $scope.onDelete = function(noteId) {
            var confirmDelete = confirm('Are you sure you want to delte this note?');
            if(confirmDelete) {
                $location.path('/deleteNote/' + $routeParams.chapterId + '/' + noteId);
            }
        };
    }
);
                     