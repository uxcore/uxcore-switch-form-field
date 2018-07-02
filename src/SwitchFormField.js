/**
 * SwitchFormField Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import Switch from 'uxcore-switch';
import FormField from 'uxcore-form-field';
import assign from 'object-assign';
import Constants from 'uxcore-const';

const switchPropKeys = Object.keys(Switch.propTypes);

function getSwitchProps(formFieldProps) {
  const ret = {}
  
  switchPropKeys
    .filter(key => formFieldProps.hasOwnProperty(key))
    .forEach(key => {
      ret[key] = props[key]
    });

  return ret
}

class SwitchFormField extends FormField {

  addSpecificClass() {
    const me = this;

    if (me.props.jsxprefixCls === "kuma-uxform-field") {
      return `${me.props.jsxprefixCls} kuma-switch-uxform-field`;
    }

    return me.props.jsxprefixCls;
  }

  handleChange(checked) {
    const me = this;
    me.handleDataChange(checked);
  }

  renderField() {
    const me = this;
    const { props, state } = me;

    const switchProps = getSwitchProps(props);
    const mode = props.jsxmode || props.mode;
    const { checkedChildren, unCheckedChildren } = props;

    if (mode === Constants.MODE.EDIT) {
      return (
        <Switch
          {...switchProps}
          checked={state.value}
          onChange={me.handleChange.bind(me)}
          style={{}}
          className="" />
      );
    }

    return (
      <span>
        {
          state.value ? checkedChildren : unCheckedChildren
        }
      </span>
    );
  }
}

SwitchFormField.defaultProps = assign({}, FormField.defaultProps);


// http://facebook.github.io/react/docs/reusable-components.html
SwitchFormField.propTypes = assign({}, FormField.propTypes);

SwitchFormField.displayName = 'SwitchFormField';

module.exports = SwitchFormField;
