import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

export const TimeForSprinklesSlideContent = () => (
  <>
    <Heading size={1}>
      time for sprinkles...&nbsp;
      <HeadingImage src={icons.iceCream} />
    </Heading>
  </>
);

export const TimeForSprinklesSlideNotes = (
  <>
    <h3>bit more complicated</h3>
    <ul>
      <li> when we want to start componentisizing UI elements / small encapsulated interactions </li>
      <li> web components!! </li>
      <li> link back to mini / arch </li>
      <li> show example order page </li>
    </ul>
  </>
);
