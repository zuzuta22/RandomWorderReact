var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var RWConstants   = require('../constants/RWConstants');

var RWAction = {
  create: function (word) {
    AppDispatcher.dispatch({
      actionType: RWConstants.RW_CREATE,
      value: word
    });
  },
  optionsChange: function (key, selected) {
    AppDispatcher.dispatch({
      actionType: RWConstants.PW_OPTIONS_CHANGE,
      value: {title: key, selected: selected}
    });
  },
  numberChange: function (number) {
    AppDispatcher.dispatch({
      actionType: RWConstants.PW_NUMBER_CHANGE,
      value: number
    });
  },
  lengthChange: function (length) {
    AppDispatcher.dispatch({
      actionType: RWConstants.PW_LENGTH_CHANGE,
      value: length
    });
  }
};

module.exports = RWAction;
