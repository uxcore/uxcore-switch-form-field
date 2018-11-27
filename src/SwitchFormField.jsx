/**
 * SwitchFormField Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import RadioGroup from 'uxcore-radiogroup';
import Switch from 'uxcore-switch';
import FormField from 'uxcore-form-field';
import assign from 'object-assign';
import Constants from 'uxcore-const';

const { Item } = RadioGroup;

const RadioValues = {
  On: 'on',
  Off: 'off',
};

const switchPropKeys = Object.keys(Switch.propTypes);
const radioGroupPropKeys = Object.keys(RadioGroup.propTypes);

function getSwitchProps(formFieldProps) {
  const ret = {};

  switchPropKeys
    .filter(key => Object.keys(formFieldProps).indexOf(key) !== -1)
    .forEach((key) => {
      ret[key] = formFieldProps[key];
    });

  return ret;
}

function getRadioGroupProps(formFieldProps) {
  const ret = {};

  radioGroupPropKeys
    .filter(key => Object.keys(formFieldProps).indexOf(key) !== -1)
    .forEach((key) => {
      ret[key] = formFieldProps[key];
    });

  return ret;
}

class SwitchFormField extends FormField {
  addSpecificClass() {
    const me = this;

    if (me.props.jsxprefixCls === 'kuma-uxform-field') {
      return `${me.props.jsxprefixCls} kuma-switch-uxform-field`;
    }

    return me.props.jsxprefixCls;
  }

  handleChange(checked) {
    let checkedValue;

    if (checked === RadioValues.On) {
      checkedValue = true;
    } else if (checked === RadioValues.Off) {
      checkedValue = false;
    } else {
      checkedValue = !!checked;
    }

    const me = this;
    me.handleDataChange(checkedValue);
  }

  renderRadioGroup() {
    const { props, state } = this;
    const { checkedChildren, unCheckedChildren } = props;
    const radioGroupProps = getRadioGroupProps(props);
    const { value } = state;

    return (
      <RadioGroup
        {...radioGroupProps}
        value={value ? RadioValues.On : RadioValues.Off}
        onChange={this.handleChange.bind(this)}
        style={{}}
        className=""
      >
        <Item value={RadioValues.On} text={checkedChildren} />
        <Item value={RadioValues.Off} text={unCheckedChildren} />
      </RadioGroup>
    );
  }

  renderSwitch() {
    const { props, state } = this;
    const switchProps = getSwitchProps(props);
    const { value } = state;

    return (
      <Switch
        {...switchProps}
        checked={value}
        onChange={this.handleChange.bind(this)}
        style={{}}
        className=""
      />
    );
  }

  renderField() {
    const me = this;
    const { props, state } = me;

    const mode = props.jsxmode || props.mode;
    const { checkedChildren, unCheckedChildren, useRadioGroup } = props;

    if (mode === Constants.MODE.EDIT) {
      return useRadioGroup ? this.renderRadioGroup() : this.renderSwitch();
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

SwitchFormField.defaultProps = assign({ useRadioGroup: false }, FormField.defaultProps);

// http://facebook.github.io/react/docs/reusable-components.html
SwitchFormField.propTypes = assign({ useRadioGroup: PropTypes.bool }, FormField.propTypes);

SwitchFormField.displayName = 'SwitchFormField';

module.exports = SwitchFormField;
