var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    NoteConstants = require('../constants/note_constants'),
    _notes = {},
    _currentNote = {id: null},
    NoteStore = new Store(AppDispatcher);



NoteStore.find = function(noteId) {
    return _notes[noteId];
};

NoteStore.currentNote = function() {
    return _currentNote;
};



module.exports = NoteStore;
