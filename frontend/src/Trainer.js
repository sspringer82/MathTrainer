import React from 'react';
import { Keyboard } from './Keyboard';
import { Task } from './Task';

const operands = [1, '+', 1];

export class Trainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    };
  }

  render() {
    return (
      <div>
        <Task operands={operands} result={this.state.result} />
        <Keyboard handleClick={value => this.handleClick(value)} />
      </div>
    );
  }

  handleClick(value) {
    this.setState(prevState => {
      return {
        ...prevState,
        result: parseInt(
          '' + (prevState.result !== null ? prevState.result : '') + value,
          10,
        ),
      };
    });
  }
}
