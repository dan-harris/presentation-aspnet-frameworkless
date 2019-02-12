import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

export const AddComplexitySlideContent = () => (
  <>
    <Heading size={1}>
      add complexity...&nbsp;
      <HeadingImage src={icons.screamFace} />
    </Heading>
  </>
);

export const AddComplexitySlideNotes = (
  <>
    <ul>
      <li> have a good platform for orchestrating components </li>
      <li> lets make the components more complex....</li>
      <li> essentially become either apps or mini apps...</li>
    </ul>
  </>
);
