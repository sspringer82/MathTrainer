import React from 'react';
import { storiesOf } from '@storybook/react';

import { Task } from '../Task';

const operands = [1, '+', 1];
const result = 2;
storiesOf('Task', module).add('display', () => (
  <Task operands={operands} result={result} />
));
