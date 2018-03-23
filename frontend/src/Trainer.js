import React from 'react';
import { Keyboard } from './Keyboard';
import { Task } from './Task';

export const NOT_CHECKED = 0;
export const CHECKED_WRONG = 1;
export const CHECKED_CORRECT = 2;

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
    window.addEventListener('keydown', e => {
      const number = parseInt(e.key, 10);
      if (
        (number >= 0 && number < 10) ||
        e.key === 'Enter' ||
        e.key === 'Backspace'
      ) {
        this.handleClick(e.key);
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown');
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
    let result = this.state.result;
    switch (value) {
      case 'Backspace':
        result = result < 10 ? '' : Math.floor(result / 10);
        break;
      case 'Enter':
        this.check();
        break;
      default:
        result = parseInt('' + (result !== null ? result : '') + value, 10);
        break;
    }
    this.setState(prevState => {
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
    this.setState(prevState => {
      setTimeout(() => this.reset(), 1000);
      return { ...prevState, state };
    });
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
