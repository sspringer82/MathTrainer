import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
`;

export const Keyboard = ({ handleClick }) => {
  const extractValue = event => {
    handleClick(event.target.value);
  };
  return (
    <Container onClick={extractValue}>
      <button value="7">7</button>
      <button value="8">8</button>
      <button value="9">9</button>
      <button value="4">4</button>
      <button value="5">5</button>
      <button value="6">6</button>
      <button value="1">1</button>
      <button value="2">2</button>
      <button value="3">3</button>
      <button value="Backspace">DEL</button>
      <button value="0">0</button>
      <button value="Enter">OK</button>
    </Container>
  );
};

Keyboard.propTypes = {
  handleClick: PropTypes.func,
};
