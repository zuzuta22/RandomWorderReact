var React = require('react');
var jsranger = require('jsranger');
var RWGenerateBtn = require('./RWGenerateBtn.react');

var RWSelector = React.createClass({
  getInitialState: function () {
    return {
      options: [
        {id:"lowerCase", selected:true},
        {id:"upperCase", selected:false},
        {id:"digit", selected:false},
        {id:"symbol", selected:false}
      ],
      length: {min:4, max:20, selected:8},
      number: {min:1, max:20, selected:1},
    };
  },

  __changeSelection: function (id) {
    var nextState = this.state.options.map(function (o) {
      return {
        id: o.id,
        selected: (o.id === id ? !o.selected: o.selected)
      };
    });
    this.setState({options:nextState});
  },

  __changeAllChecks: function () {
    var checks = this.refs.globalSelector.getDOMNode().checked;
    var nextState = this.state.options.map(function (o) {
      return {id:o.id, selected: checks};
    });
    this.setState({options:nextState});
  },

  __changeLength: function (e) {
    state = this.state.length;
    state.selected = e.target.value;
    this.setState({length: state});
  },

  __changeNumber: function(e) {
    state = this.state.number;
    state.selected = e.target.value;
    this.setState({number: state});
  },

  render: function () {
    var checks = this.state.options.map(function (o) {
      return (
        <div>
          <input type="checkbox" checked={o.selected} onChange={this.__changeSelection.bind(this,o.id)}/>{o.id}
        </div>
      );
    }.bind(this));

    var lengthbox = (function () {
      var L = jsranger(this.state.length.min, this.state.length.max+1);
      var options = L.map(function (o) {
        return (
          <option value={o}>{o}</option>
        )
      });
      return (
        <select name="length" defaultValue={this.state.length.selected} onChange={this.__changeLength}>
          {options}
        </select>
      )
    }.bind(this))();

    var numberbox = (function () {
      var L = jsranger(this.state.number.min, this.state.number.max+1);
      var options = L.map(function (o) {
        return (
          <option value={o}>{o}</option>
        )
      });
      return (
        <select name="number" defaultValue={this.state.number.selected} onChange={this.__changeNumber}>
          {options}
        </select>
      )
    }.bind(this))();

    return (
      <div>
        <form>
          <input type="checkbox" ref="globalSelector" onChange={this.__changeAllChecks} />Check All
            <br /><br />
            {checks}
            <br />
            {lengthbox} Length
            <br />
            {numberbox} Number
            <br />
        </form>
        <RWGenerateBtn
          options={this.state.options}
          length={this.state.length}
          number={this.state.number}
          />
      </div>
    )
  }

});

module.exports = RWSelector;
