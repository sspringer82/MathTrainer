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
      operation: {
        op1: 1,
        op2: 1,
        operation: '+',
        result: 2,
      },
      result: null,
      state: NOT_CHECKED,
    };
  }

  componentWillMount() {
    this.createOperation();
  }

  render() {
    const operands = [
      this.state.operation.op1,
      this.state.operation.operation,
      this.state.operation.op2,
    ];
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
    let state = CHECKED_WRONG;
    if (this.state.operation.result === this.state.result) {
      state = CHECKED_CORRECT;
    }
    this.setState(prevState => ({ ...prevState, state }));
    setTimeout(() => this.reset(), 1000);
  }

  reset() {
    this.setState(prevState => {
      return {
        ...prevState,
        result: '',
        operation: this.createOperation(),
        state: NOT_CHECKED,
      };
    });
  }

  createOperation() {
    const op1 = Math.floor(Math.random() * 10);
    const op2 = Math.floor(Math.random() * 10);
    const result = op1 + op2;
    return { op1, op2, operation: '+', result };
  }
}
