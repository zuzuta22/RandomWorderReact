var React         = require('react');
var RWStore       = require('../stores/RandomWordStore');
var Header        = require('./Header.react');
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
        <Header />
        <RWSelector />
        <RWDisplay words={this.state.value} />
        <Footer />
      </div>
    );
  }
});

module.exports = RWApp;
