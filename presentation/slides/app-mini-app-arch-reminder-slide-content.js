import styled from '@emotion/styled';
import React from 'react';
import { Heading, Image, Layout } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';
import { images } from '../images';

const ArchItem = styled.div`
  height: 270px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 3rem 3rem;
  opacity: ${props => (props.faded ? '0.2' : 1)};
`;

const Seperator = styled.div`
  border: 4px #231942 dashed;
  height: 1px;
  position: absolute;
  width: 90px;
  transform: translateX(-148px);
`;

export const AppMiniAppReminderSlideContent = () => (
  <>
    <Heading size={2}>
      building apps&nbsp;
      <HeadingImage src={icons.hammer} />
    </Heading>
    <Layout style={{ justifyContent: 'center', width: '1200px', marginLeft: '-100px', marginTop: '5rem' }}>
      <ArchItem>
        <Heading size={3}>CSR</Heading>
        <Image src={images.archApp} height={200} />
        <Heading size={5}>app</Heading>
      </ArchItem>
      <ArchItem>
        <Heading size={3}>&nbsp;</Heading>
        <Image src={images.archMiniApp} height={200} />
        <Heading size={5}>mini app</Heading>
        <Seperator style={{ opacity: '0.2' }} />
      </ArchItem>
      <ArchItem faded>
        <Heading size={3}>&nbsp;</Heading>
        <Image src={images.archSprinkles} height={200} />
        <Heading size={5}>sprinkles</Heading>
        <Seperator />
      </ArchItem>
      <ArchItem faded>
        <Heading size={3}>SSR</Heading>
        <Image src={images.archStatic} height={200} />
        <Heading size={5}>static</Heading>
        <Seperator />
      </ArchItem>
    </Layout>
  </>
);

export const AppMiniAppReminderSlideNotes = (
  <>
    <h3>mini-app reminder</h3>
    <ul>
      <li>Very similar to App, but just smaller in scope.</li>
      <li>Usually a pointed interaction that requires hgih-interactability (e.g. a map)</li>
    </ul>
    <h3>app reminder</h3>
    <ul>
      <li>Highly interactive client, may use its own routing</li>
      <li>Because page skeleton is static, can pre-render this for even better TTR/TTI</li>
      <li>Still not intended to be incredibly deep</li>
    </ul>
    <h3>discuss</h3>
    <ul>
      <li> because we have web components, can start composing spa</li>
      <li> spa could be any technology, but keeping agnostic has advantages</li>
    </ul>
    <h3>demo cart selector</h3>
    <ul>
      <li> barely app....</li>
    </ul>
  </>
);
