import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

export const IveBeenThinkingSlideContent = () => (
  <>
    <Heading size={1}>
      i've been thinking...&nbsp;
      <HeadingImage src={icons.thinkingFace} />
    </Heading>
    {/* <Appear>
      <Heading size={5}>... are single-page-apps really the answer?</Heading>
    </Appear> */}
  </>
);

export const IveBeenThinkingSlideNotes = (
  <>
    <h3>use case.</h3>
    <ul>
      <li> NO - of course not... depends 🤷‍♀️ </li>
    </ul>
    <h3> SPA & MPA</h3>
    <ul>
      <li> NO - of course not... depends 🤷‍♀️ </li>
      <li> SPA & MPA - explain, any doubts, will hopefully be clearer in a sec </li>
      <li> alot of frontend architecture espousing react, angular, vue .et .al </li>
      <li> technically don't have to create a SPA using a framework </li>
    </ul>
    <h3> aspnet</h3>
    <ul>
      <li> traditionally microsoft seems to push pattern of Angular + MVC</li>
      <li> but really... what's the range?</li>
    </ul>
  </>
);
