var assign          = require('object-assign');
var EventEmitter    = require('events').EventEmitter;
var AppDispatcher   = require('../dispatcher/AppDispatcher');
var RWConstants     = require('../constants/RWConstants');

var _number = {
  min       : 1,
  max       : 20,
  selected  : 1
};

var CHANGE_EVENT = "numberChange";

var NumberStore = assign({}, EventEmitter.prototype, {
  getAll: function () {
    return _number;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function (payload) {
    if (payload.actionType === RWConstants.PW_NUMBER_CHANGE) {
      _number.selected = payload.value;

      NumberStore.emitChange();

    }
  })
});

module.exports = NumberStore;
