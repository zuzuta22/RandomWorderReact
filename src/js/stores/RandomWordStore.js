var assign        = require('object-assign');
var EventEmitter  = require('events').EventEmitter
var AppDispatcher = require('../dispatcher/AppDispatcher');
var RWConstants   = require('../constants/RWConstants');

var _words = {value: []};

var CHANGE_EVENT = "change"

var RandomWordStore = assign({}, EventEmitter.prototype, {
  getAll: function () {
    return _words
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function (payload) {
    if (payload.actionType === RWConstants.RW_CREATE) {
      _words.value.push(payload.value);

      RandomWordStore.emitChange();
    }
  })
});

module.exports = RandomWordStore;
