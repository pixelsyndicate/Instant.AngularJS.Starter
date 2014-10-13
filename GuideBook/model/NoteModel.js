Guidebook.service('NoteModel', function () {
    
    /// Should return a JSON array of chapter objects
    this.getNotesForChapter = function (chapterId) {
        // the parameter chapterId is used as the key for this database
        var chapter = JSON.parse(window.localStorage.getItem(chapterId));
        if (!chapter) {
            return [];
        }
        return chapter.notes;
    };
    
    /// this saves 
    this.addNote = function (chapterId, noteContent) {
        var now = new Date();
        // use the noteContent parameter and create a new note object model
        // we are using the current Date() as our primary KEY
        var note = { content: noteContent, id: now };
        // get the current from database
        // the parameter chapterId is used as the key for this database
        var chapter = JSON.parse(window.localStorage.getItem(chapterId));
        if (!chapter) {
            chapter = { id: chapterId, notes: [] };
        }
        
        // this .push() will add the new note to the chapter's notes collection
        chapter.notes.push(note);
        // save current to our database
        // the parameter chapterId is used as the key for this database
        // the value is JSON formatted using stringify()
        window.localStorage.setItem(chapterId, JSON.stringify(chapter));
    };
    
    /// this deletes
    this.deleteNote = function (chapterId, noteId) {
        
        // get the current data
        // the parameter chapterId is used as the key for this database
        var chapter = JSON.parse(window.localStorage.getItem(chapterId));
        
        // ignore if there are not notes for this chapter
        if (!chapter || !chapter.notes) {
            return;
        }
        
        
        for (var i=0; i<chapter.notes.length; i++)
        {
            if(chapter.notes[i].id === noteId) {
                chapter.notes.splice(i,1);
                // save date to our database
                // the parameter chapterId is used as the key for this database
                // the value is JSON formatted using stringify()
                window.localStorage.setItem(chapterId, JSON.stringify(chapter));
                return;
            }
            
        }
    };
});