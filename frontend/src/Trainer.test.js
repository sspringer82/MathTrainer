import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Trainer } from './Trainer';
import { getTextFromStyledByClassName } from './helpers/getTextFromStyledByClassName';

Enzyme.configure({ adapter: new Adapter() });

describe('<Trainer />', () => {
  test('should show the result 4 if button 4 is clicked', () => {
    const wrapper = mount(<Trainer />);
    wrapper.find('button[value="4"]').simulate('click');
    expect(getTextFromStyledByClassName(wrapper, 'result')).toBe('4');
  });

  test('should delete the last digit of the result if del is pressed', () => {
    const wrapper = mount(<Trainer />);
    wrapper.find('button[value="4"]').simulate('click');
    wrapper.find('button[value="4"]').simulate('click');
    wrapper.find('button[value="del"]').simulate('click');
    expect(getTextFromStyledByClassName(wrapper, 'result')).toBe('4');
  });

  test('should delete all digits', () => {
    const wrapper = mount(<Trainer />);
    wrapper.find('button[value="4"]').simulate('click');
    wrapper.find('button[value="del"]').simulate('click');
    expect(getTextFromStyledByClassName(wrapper, 'result')).toBe('');
  });
});
