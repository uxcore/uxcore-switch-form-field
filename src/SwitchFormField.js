/**
 * SwitchFormField Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
const Switch = require('uxcore-switch');
const FormField = require('uxcore-form-field');
const assign = require('object-assign');

class SwitchFormField extends FormField {

  addSpecificClass() {
    let me = this;
    if (me.props.jsxprefixCls === "kuma-uxform-field") {
      return me.props.jsxprefixCls + " kuma-switch-uxform-field";
    } else {
      return me.props.jsxprefixCls
    }
  }

  handleChange(checked) {
    const me = this;
    me.handleDataChange(checked);
  }

  renderField() {
    const me = this;
    const switchProps = {...me.props};

    return (
      <Switch {...switchProps} checked={me.state.value} onChange={me.handleChange.bind(me)} style={{}}/>
    );
  }
}

SwitchFormField.defaultProps = assign({}, FormField.defaultProps);


// http://facebook.github.io/react/docs/reusable-components.html
SwitchFormField.propTypes = assign({}, FormField.propTypes);

SwitchFormField.displayName = 'SwitchFormField';

module.exports = SwitchFormField;
