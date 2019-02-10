import styled from '@emotion/styled';
import React from 'react';
import Confetti from 'react-confetti';
import { Appear, Heading, Layout } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

const ConfettiContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const CentredSpectacleContent = styled.div`
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WhyTypescriptSlideContent = () => (
  <>
    <CentredSpectacleContent>
      <Layout style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Heading size={2}>so why typescript?</Heading>
        <Appear>
          <Heading size={1}>
            types&nbsp;
            <HeadingImage src={icons.partyPopper} />
          </Heading>
        </Appear>
      </Layout>
    </CentredSpectacleContent>
    <Appear>
      <ConfettiContainer>
        <Confetti width={1920} height={1080} colors={['#5e548e']} gravity={0.15} />
      </ConfettiContainer>
    </Appear>
  </>
);

export const WhyTypescriptSlideNotes = (
  <>
    <ul>
      <li> brief overview </li>
      <li> again... types!! </li>
      <li> syntactically similar to c# </li>
      <li> IDE + tooling is well supported </li>
      <li> handles some of the compile options + providing things like decorators </li>
      <li> only a compile time type-check </li>
      <li> ... so don't expect the kind of static typing from something like c# </li>
      <li> personally, think its essential apart from small websites </li>
    </ul>
  </>
);
