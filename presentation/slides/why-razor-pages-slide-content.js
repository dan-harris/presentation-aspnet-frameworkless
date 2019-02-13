import React from 'react';
import { Appear, Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

export const WhyRazorPagesSlideContent = () => (
  <>
    <Heading size={2}>aspnet, with pages...</Heading>
    <Appear>
      <Heading size={1}>
        razor pages&nbsp;
        <HeadingImage src={icons.knife} />
      </Heading>
    </Appear>
  </>
);

export const WhyRazorPagesSlideNotes = (
  <>
    <h3>aspnet razor pages basics</h3>
    <ul>
      <li> simplified way of returning views</li>
      <li> essentially wrapper around MVC</li>
      <li> useful items like tag helpers</li>
      <li> can have a look at a bit more code later</li>
      <li> ... but won't dive too deeply into razor pages itself (mostly because I probably don't have the knowledge to)</li>
    </ul>
  </>
);
