import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

export const LitElementSlideContent = () => (
  <>
    <Heading size={1}>
      web components&nbsp;
      <HeadingImage src={icons.fire} />
    </Heading>
  </>
);

export const LitElementSlideNotes = (
  <>
    <h3>lit element</h3>
    <ul>
      <li> web components - web native</li>
      <li> emphasize this is a base web element (native browser)</li>
      <li> set attributes, receive events</li>
      <li> using lit element as a wrapper over base - attribute strings .etc</li>
    </ul>
    <h3>show web component 👉</h3>
    <ul>
      <li>show shadomroot + dom</li>
      <li>devtools</li>
      <li>show lit element + attribute</li>
    </ul>
  </>
);
