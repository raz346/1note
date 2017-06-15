var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    NoteConstants = require('../constants/note_constants'),
    NotebookConstants = require('../constants/notebook_constants'),
    SessionConstants = require('../constants/session_constants'),
    NotificationStore = new Store(AppDispatcher),
    _notification;

NotificationStore.__onDispatch = function (payload) {
    switch(payload.actionType) {
        case NotebookConstants.CREATE_NOTEBOOK:
            _notification = "Notebook '" + payload.notebook.title + "' created";
            NotificationStore.__emitChange();
            break;
        case NotebookConstants.REMOVE_NOTEBOOK:
            _notification = "Notebook '" + payload.notebook.title + "' deleted";
            NotificationStore.__emitChange();
            break;
        case NoteConstants.CREATE_NOTE:
            _notification = "Note '" + payload.note.title + "' created";
            NotificationStore.__emitChange();
            break;
        case NoteConstants.UPDATE_NOTE:
            _notification = "Note '" + payload.note.title + "' updated";
            NotificationStore.__emitChange();
            break;
        case NoteConstants.REMOVE_NOTE:
            _notification = "Note '" + payload.note.title + "' deleted";
            NotificationStore.__emitChange();
            break;
        case SessionConstants.CURRENT_USER_RECEIVED:
            _notification = "User info updated";
            NotificationStore.__emitChange();
            break;
    }
};

NotificationStore.getMessage = function() {
    return _notification;
};

module.exports = NotificationStore;
