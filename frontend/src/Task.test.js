import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Task } from './Task';
import { getTextFromStyledByClassName } from './helpers/getTextFromStyledByClassName';
import { NOT_CHECKED, CHECKED_WRONG, CHECKED_CORRECT } from './Trainer';

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

  test('it shoud show no message if task is not checked', () => {
    const operands = [1, '+', 1];
    const result = 2;

    const wrapper = shallow(
      <Task operands={operands} result={result} state={NOT_CHECKED} />,
    );
    expect(wrapper.find(`.message`).length).toBe(0);
  });

  test('it should show "you fool, that\'s wrong" if state is CHECKED_WRONG', () => {
    const operands = [1, '+', 1];
    const result = 2;
    const message = "you fool, that's wrong";

    const wrapper = shallow(
      <Task operands={operands} result={result} state={CHECKED_WRONG} />,
    );
    expect(wrapper.find(`.message`).text()).toBe(message);
  });

  test('it should show "yeah! you\'re right" if state is CHECKED_WRONG', () => {
    const operands = [1, '+', 1];
    const result = 2;
    const message = "yeah! you're right";

    const wrapper = shallow(
      <Task operands={operands} result={result} state={CHECKED_CORRECT} />,
    );
    expect(wrapper.find(`.message`).text()).toBe(message);
  });
});
