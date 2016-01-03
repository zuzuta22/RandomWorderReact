var React       = require('react');
var RS          = require('randomstrings')
var RWSelector  = require('./RWSelector.react');
var RWAction    = require('../actions/RWAction');

var RWGenerateBtn = React.createClass({

  generate: function (e) {
    e.preventDefault();
    var lowercase = this.props.options[0].selected;
    var uppercase = this.props.options[1].selected;
    var digit     = this.props.options[2].selected;
    var symbol    = this.props.options[3].selected;
    var length = this.props.length.selected;
    var number = this.props.number.selected;

    var randomstring = RS(length, lowercase, uppercase, digit, symbol);

    for (var i=0; i<number; i++) {
      RWAction.create(RS(length, lowercase, uppercase, digit, symbol));
    };
    // RWAction.create(randomstring);  
  },

  render: function () {
    return (
      <button onClick={this.generate}>Generate</button>
    );
  }
});

module.exports = RWGenerateBtn;
