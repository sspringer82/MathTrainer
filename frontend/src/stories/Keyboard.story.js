import React from 'react';
import { storiesOf } from '@storybook/react';
import { decorateAction } from '@storybook/addon-actions';

import { Keyboard } from '../Keyboard';

storiesOf('Keyboard', module).add('display', () => (
  <Keyboard handleClick={value => action('button clicked')} />
));
