import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CHECKED_CORRECT, CHECKED_WRONG } from './Trainer';

const Container = styled.div`
  display: flex;
`;

const Operand = styled.div`
  margin: 5px;
`;
const Result = styled.div`
  margin: 5px;
`;

export const Task = ({ operands = [], result, state }) => {
  let message = '';
  if (state === CHECKED_CORRECT) {
    message = "yeah! you're right";
  } else if (state === CHECKED_WRONG) {
    message = "you fool, that's wrong";
  }
  return (
    <Container>
      {message ? <div className="message">{message}</div> : ''}
      {operands.map((operand, index) => (
        <Operand key={index} className={'operand' + index}>
          {operand}
        </Operand>
      ))}
      <Operand>=</Operand>
      <Result className="result">{result}</Result>
    </Container>
  );
};

Task.propTypes = {
  operands: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  state: PropTypes.number,
};
