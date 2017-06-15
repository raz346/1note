var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    NotebookConstants = require('../constants/notebook_constants'),
    _notebooks = {},
    _currentNotebook = {id: null},
    NotebookStore = new Store(AppDispatcher);

var resetNotebooks = function(notebooks) {
    _notebooks = {};
    notebooks.forEach(function (notebook) {
        _notebooks[notebook.id] = notebook;
    });
};

var resetNotebook = function(notebook) {
    _notebooks[notebook.id] = notebook;
};

var deleteNotebook = function(notebook) {
    delete _notebooks[notebook.id];
};

var setCurrentNotebook = function(notebook) {
    if (notebook) {
        _currentNotebook = notebook;
    } else {
        _currentNotebook = {id: null};
    }
};

NotebookStore.__onDispatch = function (payload) {
    switch(payload.actionType) {
        case NotebookConstants.RECEIVE_ALL_NOTEBOOKS:
            resetNotebooks(payload.notebooks);
            NotebookStore.__emitChange();
            break;
        case NotebookConstants.RECEIVE_CURRENT_NOTEBOOK:
            setCurrentNotebook(payload.notebook);
            NotebookStore.__emitChange();
            break;
        // case NotebookConstants.CLEAR_CURRENT_NOTEBOOK:
        //     _currentNotebook = {id: null};
        //     NotebookStore.__emitChange();
        //     break;
        case NotebookConstants.CREATE_NOTEBOOK:
            resetNotebook(payload.notebook);
            setCurrentNotebook(payload.notebook);
            NotebookStore.__emitChange();
            break;
        case NotebookConstants.UPDATE_NOTEBOOK:
            resetNotebook(payload.notebook);
            NotebookStore.__emitChange();
            break;
        case NotebookConstants.REMOVE_NOTEBOOK:
            deleteNotebook(payload.notebook);
            NotebookStore.__emitChange();
            break;
    }
};

NotebookStore.all = function() {
    var notebooks = [];
    for (var notebookId in _notebooks) {
        if (_notebooks.hasOwnProperty(notebookId)) {
            notebooks.push(_notebooks[notebookId]);
        }
    }
    return notebooks;
};

NotebookStore.find = function(notebookId) {
    return _notebooks[notebookId];
};

NotebookStore.currentNotebook = function() {
    return _currentNotebook;
};


module.exports = NotebookStore;
