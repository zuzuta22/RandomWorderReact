var React         = require('react');
var RWStore       = require('../stores/RandomWordStore');
var RWSelector    = require('./RWSelector.react');
var RWDisplay     = require('./RWDisplay.react');
var Footer        = require('./Footer.react');

var RWApp = React.createClass({
  getInitialState: function () {
    return RWStore.getAll();
  },

  componentDidMount: function () {
    var self = this;

    RWStore.addChangeListener(function () {
      self.setState(RWStore.getAll());
    });
  },

  render: function () {
    return (
      <div className="rwApp">
        <h1>RandomWorder</h1>
        <RWSelector />
        <RWDisplay words={this.state.value} />
        <Footer />
      </div>
    );
  }
});

module.exports = RWApp;
