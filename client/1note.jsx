var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Modal = require('react-modal'),

    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    browserHistory = ReactRouter.browserHistory,
    NoteForm = require('./components/notes/note_form'),
    Welcome = require('./components/welcome'),
    LoginForm = require('./components/user/login_form'),
    App = require('./components/app'),
    Search = require('./components/search/search'),
    NotebookActions = require('./actions/notebook_actions'),
    SessionStore = require('./stores/session'),
    SessionAPI = require('./utils/session_util');



window.initializeApp = function() {
    Modal.setAppElement(document.body);
    ReactDOM.render(
        routes,
        document.getElementById("root")
    );
};
