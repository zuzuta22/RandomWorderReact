var React                 = require('react');
var injectTapEventPlugin  = require("react-tap-event-plugin");
injectTapEventPlugin();
var jsranger              = require('jsranger');
var RS                    = require('randomstrings');
var RWAction              = require('../actions/RWAction');
var OptionsStore          = require('../stores/OptionsStore');
var NumberStore           = require('../stores/NumberStore');
var LengthStore           = require('../stores/LengthStore');
var Checkbox              = require('material-ui/lib/checkbox');
var SelectField           = require('material-ui/lib/select-field');
var MenuItem              = require('material-ui/lib/menus/menu-item');
var RaisedButton          = require('material-ui/lib/raised-button');

var RWSelector = React.createClass({
  getInitialState: function () {
    return {
      options: OptionsStore.getAll(),
      number: NumberStore.getAll(),
      length: LengthStore.getAll()
    };
  },

  componentDidMount: function () {
    var self = this;

    OptionsStore.addChangeListener(function () {
      self.setState(OptionsStore.getAll());
    });

    NumberStore.addChangeListener(function () {
      self.setState(NumberStore.getAll());
    });

    LengthStore.addChangeListener(function () {
      self.setState(LengthStore.getAll());
    })
  },

  __changeLowerCase: function (event, checked) {
    RWAction.optionsChange("lowerCase", checked);
  },

  __changeUpperCase: function (event, checked) {
    RWAction.optionsChange("upperCase", checked);
  },

  __changeDigit: function (event, checked) {
    RWAction.optionsChange("digit", checked);
  },

  __changeSpecial: function (event, checked) {
    RWAction.optionsChange("specialchar", checked);
  },

  __changeLength: function (event, index, value) {
    RWAction.lengthChange(value);
  },

  __changeNumber: function(event, index, value) {
    RWAction.numberChange(value);
  },

  __generator: function (event) {
    // var randomstring = RS(length, lowerCase, upperCase, digit, symbol);

    for (var i=0; i<this.state.number.selected; i++) {
      RWAction.create(RS
        (
          this.state.length.selected,
          this.state.lowerCase,
          this.state.upperCase,
          this.state.digit,
          this.state.specialchar
        )
      );
    };
  },

  render: function () {

    var lengthbox = (function () {
      var L = jsranger(this.state.length.min, this.state.length.max+1);
      var options = L.map(function (o) {
        return (
          <MenuItem value={o} label={o} primaryText={o} />
        )
      });
      return (
        options
      )
    }.bind(this))();

    var numberbox = (function () {
      var L = jsranger(this.state.number.min, this.state.number.max+1);
      var options = L.map(function (o) {
        return (
          <MenuItem value={o} label={o} primaryText={o} />
        )
      });
      return (
        options
      )
    }.bind(this))();

    return (
      <div>
        <form>
          <Checkbox
            label="Lower Case"
            defaultChecked={this.state.lowerCase}
            checked={this.state.options.lowerCase}
            onCheck={this.__changeLowerCase}
            />
          <Checkbox
            label="Upper Case"
            defaultChecked={this.state.options.upperCase}
            checked={this.state.options.upperCase}
            onCheck={this.__changeUpperCase}
            />
          <Checkbox
            label="Digit"
            defaultChecked={this.state.options.digit}
            checked={this.state.options.digit}
            onCheck={this.__changeDigit}
            />
          <Checkbox
            label="Specials"
            defaultChecked={this.state.options.specialchar}
            checked={this.state.options.specialchar}
            onCheck={this.__changeSpecial}
            />

          <SelectField
            value={this.state.length.selected}
            floatingLabelText="Length"
            onChange={this.__changeLength}
           >
            {lengthbox}
          </SelectField>

          <br />

          <SelectField
            value={this.state.number.selected}
            floatingLabelText="Number"
            onChange={this.__changeNumber}
            >
             {numberbox}
          </SelectField>

          <br />

          <RaisedButton label="Generate" primary={true} onTouchTap={this.__generator}/>

        </form>
      </div>
    )
  }

});

module.exports = RWSelector;
