var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var RWConstants   = require('../constants/RWConstants');

var RWAction = {
  create: function (word) {
    AppDispatcher.dispatch({
      actionType: RWConstants.RW_CREATE,
      value: word
    });
  }
};

module.exports = RWAction;
