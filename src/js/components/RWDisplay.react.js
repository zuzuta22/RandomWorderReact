var React = require('react');
var List  = require('material-ui/lib/lists/list');
var ListItem = require('material-ui/lib/lists/list-item');


var RWDisplay = React.createClass({
  render: function () {
    var words = this.props.words;
    return (
      <List>
        {words.map(function(word){
          return <ListItem primaryText={word} key={word} ></ListItem>
        })}
      </List>
    )
  }
});

module.exports = RWDisplay;
