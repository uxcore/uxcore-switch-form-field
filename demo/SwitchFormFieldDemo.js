/**
 * SwitchFormField Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const SwitchFormField = require('../src');
const Form = require('uxcore-form/build/Form');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Form>
          <SwitchFormField jsxlabel="开关" checkedChildren="是" unCheckedChildren="否" />
        </Form>
      </div>
    );
  }
}

module.exports = Demo;
