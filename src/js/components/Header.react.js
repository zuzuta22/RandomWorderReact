var React = require('react');
var AppBar = require('material-ui/lib/app-bar');

var Header = React.createClass({
  render: function () {
    return (
      <AppBar title="RandomWorder" />
    );
  }
});

module.exports = Header;
