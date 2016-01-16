var assign        = require('object-assign');
var EventEmitter  = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var RWConstants   = require('../constants/RWConstants');

var _length = {
  min       : 4,
  max       : 20,
  selected  : 8
};

var CHANGE_EVENT = "lengthChange";

var LengthStore = assign({}, EventEmitter.prototype, {
  getAll: function () {
    return _length
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function (payload) {
    if (payload.actionType === RWConstants.PW_LENGTH_CHANGE) {
      _length.selected = payload.value;

      LengthStore.emitChange();
    }
  })
});

module.exports = LengthStore;
