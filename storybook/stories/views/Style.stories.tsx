import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Style from '../../../src/views/Styling/index';

storiesOf('Style', module)
  .add('Dark mode', () => <Style />);