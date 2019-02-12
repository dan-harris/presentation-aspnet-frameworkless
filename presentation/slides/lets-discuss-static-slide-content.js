import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { images } from '../images';

export const LetsDiscussStaticSlideContent = () => (
  <>
    <Heading size={1}>
      lets discuss static&nbsp;
      <HeadingImage src={images.archStatic} />
    </Heading>
  </>
);

export const LetsDiscussStaticSlideNotes = (
  <>
    <ul>
      <li> reminder 👉 static arch (or full SSR + light interaction) </li>
      <li> traditionally might use a utility framework like jQuery or jQueryUI </li>
      <li> no problems with jQuery... but is generally superseded by native browser capability </li>
      <li> + aren't types nicer? </li>
    </ul>
  </>
);
