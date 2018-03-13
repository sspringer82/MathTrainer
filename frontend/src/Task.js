import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Operand = styled.div`
  margin: 5px;
`;
const Result = styled.div`
  margin: 5px;
`;

export const Task = ({ operands = [], result }) => {
  return (
    <Container>
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
  result: PropTypes.number,
};
