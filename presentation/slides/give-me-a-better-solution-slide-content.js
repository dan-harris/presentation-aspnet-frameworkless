import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

export const GiveMeABetterSolutionSlideContent = () => (
  <>
    <Heading size={1}>
      <HeadingImage src={icons.lightBulb} />
      &nbsp;a better way?
    </Heading>
  </>
);

export const GiveMeABetterSolutionSlideNotes = (
  <>
    <h3>leave you with these questions (shout out if you want)</h3>
    <ul>
      <li> give me a better solution</li>
      <li> would you do it differently? </li>
      <li> is there a better way? pattern? </li>
      <li> implementation specifics can change</li>
      <li> my way of solving of it</li>
      <li> do it!!</li>
    </ul>
  </>
);
