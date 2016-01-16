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
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <RWSelector />
          </div>
          <div className="col-md-8 col-sm-12">
            <RWDisplay words={this.state.value} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = RWApp;
