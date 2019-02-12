import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

export const OnReflectionSlideContent = () => (
  <>
    <Heading size={1}>
      still thinking...&nbsp;
      <HeadingImage src={icons.thinkingFace} />
    </Heading>
  </>
);

export const OnReflectionSlideNotes = (
  <>
    <h3>on reflection</h3>
    <ul>
      <li> why the new tech? </li>
      <li> similar to backend, why wouldn't we use these patterns frontend?</li>
      <li> good engineering backend, why not frontend?</li>
      <li> easy to trace flow</li>
      <li> testability</li>
      <li> pattern is a full page reload/request</li>
      <li> keeps our state in sync</li>
    </ul>
  </>
);
