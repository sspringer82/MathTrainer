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
});
