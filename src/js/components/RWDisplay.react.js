var React = require('react');
// var RWApp = require('./RWApp.react');

var RWDisplay = React.createClass({
  render: function () {
    var words = this.props.words;
    return (
      <div>
        {words.map(function(word){
          return <span>{word}<br /></span>
        })}
      </div>
    )
  }
});

module.exports = RWDisplay;
