import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

export const RazorTSArchSlideContent = () => (
  <>
    <Heading size={2}>
      browser > page class > razor > server&nbsp;
      <HeadingImage src={icons.thinkingFace} />
    </Heading>
  </>
);

export const RazorTSArchSlideNotes = (
  <>
    <ul>
      <li> overview of structure </li>
      <li> browser > page class > razor > server </li>
    </ul>
  </>
);
