import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Keyboard } from './Keyboard';

Enzyme.configure({ adapter: new Adapter() });

describe('<Keyboard />', () => {
  test('should call click handler with 1 if 1 is clicked', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<Keyboard handleClick={handleClick} />);
    wrapper.find('button[value="1"]').simulate('click');
    expect(handleClick).toHaveBeenCalledWith('1');
    wrapper.unmount();
  });
});
