/**
 * SwitchFormField Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react'
import Switch from 'uxcore-switch'
import FormField from 'uxcore-form-field'
import assign from 'object-assign'
import Constants from 'uxcore-const'

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
    const switchUselessPropKeys = [`jsxlabel`, `verticalAlign`, `labelMatchInputHeight`,
      `jsxshow`, `jsxshowLabel`, `jsxprefixCls`, `jsxflex`, `jsxname`, `jsxplaceholder`,
      `jsxtips`, `standalone`, `jsxinstant`, `jsxVerticalAlign`, `jsxsize`, `asyncValidate`,
      `totalFlex`, `attachFormField`, `detachFormField`, `handleDataChange`, `getValues`, `resetValues`];
    const switchProps = {...me.props};

    switchUselessPropKeys.forEach(key => {
      if (switchProps.hasOwnProperty(key)) {
        delete switchProps[key];
      }
    });

    const mode = me.props.jsxmode || me.props.mode;

    if (mode === Constants.MODE.EDIT) {
      return (
        <Switch {...switchProps} checked={me.state.value} onChange={me.handleChange.bind(me)} style={{}} className="" />
      );
    }
    return (
      <span>{me.state.value ? me.props.checkedChildren : me.props.unCheckedChildren}</span>
    );
  }
}

SwitchFormField.defaultProps = assign({}, FormField.defaultProps);


// http://facebook.github.io/react/docs/reusable-components.html
SwitchFormField.propTypes = assign({}, FormField.propTypes);

SwitchFormField.displayName = 'SwitchFormField';

module.exports = SwitchFormField;
