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
  </>
);

export const IveBeenThinkingSlideNotes = (
  <>
    <h3>history</h3>
    <ul>
      <li> not too long ago i had in-depth conversation with some of my seniors </li>
      <li> about angular, SPA patterns and why everything in UI is so hard now</li>
      <li> correct in some senses... but consumers expect rich UI's</li>
      <li> everyones right... all about use case</li>
    </ul>
    <h3>so ive been thinking about use cases</h3>
    <ul>
      <li> are SPA's the answer to all problems? </li>
    </ul>
    <h3>spa & mpa</h3>
    <ul>
      <li> NO - of course not... depends 🤷‍♀️ </li>
      <li> SPA & MPA - explain, any doubts, will hopefully be clearer in a sec </li>
      <li> alot of frontend architecture espousing react, angular, vue .et .al </li>
      <li> technically don't have to create a SPA using a framework </li>
    </ul>
    <h3>aspnet</h3>
    <ul>
      <li> traditionally microsoft seems to push pattern of Angular + MVC</li>
      <li> use case of angular? discuss in next slide</li>
      <li> but really... what's the range?</li>
    </ul>
  </>
);
