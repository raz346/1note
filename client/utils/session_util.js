var SessionActions = require('../actions/session_actions');

var SessionAPI = {
  login: function(credentials, successCallback, errorCallback) {
    $.ajax({
      type: 'POST',
      url: '/api/session',
      dataType: 'json',
      data: credentials,
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
        if (successCallback) {successCallback();}
      },
      error: function() {
        if (errorCallback) {errorCallback();}
      },
    });
  },

  guestLogin: function(loginCallback) {
    this.login({email: "FantasticMrFox@gmail.com", password: "RoaldDahl"},
                loginCallback);
  },

  logout: function() {
    $.ajax({
      type: 'DELETE',
      url: '/api/session',
      dataType: 'json',
      success: function() {
        SessionActions.logout();
      },
      error: function() {
        console.error("Failed logout...");
      },
    });
  },

  fetchCurrentUser: function(completionCallback) {
    $.ajax({
      type: 'GET',
      url: '/api/session',
      dataType: 'json',
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      error: function() {
        console.error("Failed fetchCurrentUser...");
      },
      complete: function () {
        if (completionCallback) {completionCallback();}
      }
    });
  },

  createUser: function(newUser, successCallback, errorCallback) {
    $.ajax({
      type: 'POST',
      url: '/api/users',
      dataType: 'json',
      data: {user: newUser},
      success: function(user) {
        SessionActions.currentUserReceived(user);
        if (successCallback) {successCallback();}
      },
      error: function() {
        if (errorCallback) {errorCallback();}
      }
    });
  },

  editUser: function(formData, id, successCallback) {
    $.ajax({
      type: 'PATCH',
      url: '/api/users/' + id,
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
        if (successCallback) {successCallback();}
      }

    });
  }
};

module.exports = SessionAPI;
