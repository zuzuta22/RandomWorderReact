var assign        = require('object-assign');
var EventEmitter  = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var RWConstants   = require('../constants/RWConstants');

var _options = {
  lowerCase   : true,
  upperCase   : false,
  digit       : false,
  specialchar : false
};

var CHANGE_EVENT = "optionsChange";

var OptionsStore = assign({}, EventEmitter.prototype, {
  getAll: function () {
    return _options;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function (payload) {
    if (payload.actionType === RWConstants.PW_OPTIONS_CHANGE) {
      if (payload.value.title === "lowerCase") {
        _options.lowerCase = payload.value.selected;
      };
      if (payload.value.title === "upperCase") {
        _options.upperCase = payload.value.selected;
      };
      if (payload.value.title === "digit") {
        _options.digit = payload.value.selected;
      };
      if (payload.value.title === "specialchar") {
        _options.specialchar = payload.value.selected;
      };

      OptionsStore.emitChange();
    }
  })

});

module.exports = OptionsStore;
