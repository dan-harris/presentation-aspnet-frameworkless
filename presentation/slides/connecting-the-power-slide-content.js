import styled from '@emotion/styled';
import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

const RumbleHeading = styled(Heading)`
  @keyframes rumble {
    0% {
      -webkit-transform: rotate(0deg);
    }
    25% {
      -webkit-transform: translate(3px, 0px) rotate(-3deg);
    }
    50% {
      -webkit-transform: translate(0px, -3px) rotate(0deg);
    }
    75% {
      -webkit-transform: translate(-3px, 0px) rotate(3deg);
    }
    100% {
      -webkit-transform: translate(0px, 3px) rotate(0deg);
    }
  }
  animation: rumble 0.3s infinite linear;
`;

export const ConnectingThePowerSlideContent = () => (
  <>
    <Heading size={2}>connecting the power</Heading>
    <RumbleHeading size={1}>
      1.21 jiggawatts&nbsp;
      <HeadingImage src={icons.highVoltage} />
    </RumbleHeading>
  </>
);

export const ConnectingThePowerSlideNotes = (
  <>
    <h3>link element to page class</h3>
    <ul>
      <li> show attribute setting using native in example</li>
      <li> we already have base event listening... just hook it up</li>
      <li> jsut one missing piece... easily propagating state between components</li>
      <li> created simple data bind (state object)</li>
    </ul>
  </>
);
