import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Navigation from '../../../src/views/Main'
import Shop from '../../../src/views/Main/Shop/Shop';
import { Home } from '../../../src/views/Main/Home';
// import { Catalog } from '../../../src/views/Main/Shop/Catalog/index';x
import { Catalog } from '../../../src/views/Main/Shop/Catalog/Catalog';



storiesOf('Main', module)
.add('Connected Screens', () => <Navigation />)
.add('Main', () => <Home />)
.add('Shop', () => <Shop />)
.add('Catalog', () => <Catalog />)





