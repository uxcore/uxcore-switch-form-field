import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from 'uxcore-form';
import Constants from 'uxcore-const';
import SwitchFormField from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('SwitchFormField', () => {
  it('should be render correctly', () => {
    mount(<Form>
      <SwitchFormField jsxlabel="useless prop" />
    </Form>);
  });

  it('should be render correctly in EDIT mode', () => {
    mount(<Form>
      <SwitchFormField mode={Constants.MODE.EDIT} />
    </Form>);
  });

  it('should be render correctly with value', () => {
    const values = {
      checked: true,
    };

    mount(<Form jsxvalues={values}>
      <SwitchFormField name="checked" mode={Constants.MODE.EDIT} />
    </Form>);
  });

  it('should handle change correctly', () => {
    const values = {
      checked: true,
    };

    let checked = true;

    class App extends React.Component {
      handleChange() {
        const values = this.refs.form.getValues().values;
        checked = values.checked;
      }

      render() {
        return (
          <Form ref="form" jsxvalues={values} jsxonChange={this.handleChange.bind(this)}>
            <SwitchFormField jsxname="checked" />
          </Form>
        );
      }
    }

    const app = mount(<App />);

    app.find('.kuma-switch-inner').simulate('click');
    expect(checked).to.be(false);
  });
});
