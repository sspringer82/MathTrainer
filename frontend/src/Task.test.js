import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Task } from './Task';
import { getTextFromStyledByClassName } from './helpers/getTextFromStyledByClassName';

Enzyme.configure({ adapter: new Adapter() });

describe('<Task />', () => {
  test('it should display 1 + 1 = 2', () => {
    const operands = [1, '+', 1];
    const result = 2;

    const wrapper = shallow(<Task operands={operands} result={result} />);
    expect(getTextFromStyledByClassName(wrapper, 'operand0')).toBe('1');
    expect(getTextFromStyledByClassName(wrapper, 'operand1')).toBe('+');
    expect(getTextFromStyledByClassName(wrapper, 'operand2')).toBe('1');
    expect(getTextFromStyledByClassName(wrapper, 'result')).toBe('2');
  });
});
