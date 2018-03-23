import React from 'react';
import { Keyboard } from './Keyboard';
import { Task } from './Task';

export const NOT_CHECKED = 0;
export const CHECKED_WRONG = 1;
export const CHECKED_CORRECT = 2;

const operands = [1, '+', 1];

export class Trainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      state: NOT_CHECKED,
    };
  }

  render() {
    return (
      <div>
        <Task
          operands={operands}
          result={this.state.result}
          state={this.state.state}
        />
        <Keyboard handleClick={value => this.handleClick(value)} />
      </div>
    );
  }

  handleClick(value) {
    this.setState(prevState => {
      let result = prevState.result;
      switch (value) {
        case 'del':
          result =
            prevState.result < 10 ? '' : Math.floor(prevState.result / 10);
          break;
        case 'ok':
          this.check();
          break;
        default:
          result = parseInt(
            '' + (prevState.result !== null ? prevState.result : '') + value,
            10,
          );
          break;
      }

      return {
        ...prevState,
        result,
      };
    });
  }

  check() {
    const result = 1 + 1;
    let state = CHECKED_WRONG;
    if (result === this.state.result) {
      state = CHECKED_CORRECT;
    }
    this.setState(prevState => ({ ...prevState, state }));
  }
}
