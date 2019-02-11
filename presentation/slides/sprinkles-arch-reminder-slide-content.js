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

export const SprinklesArchReminderSlideContent = () => (
  <>
    <Heading size={2}>
      ...sprinkles of components&nbsp;
      <HeadingImage src={icons.highVoltage} />
    </Heading>
    <Layout style={{ justifyContent: 'center', width: '1200px', marginLeft: '-100px', marginTop: '5rem' }}>
      <ArchItem faded>
        <Heading size={3}>CSR</Heading>
        <Image src={images.archApp} height={200} />
        <Heading size={5}>app</Heading>
      </ArchItem>
      <ArchItem faded>
        <Heading size={3}>&nbsp;</Heading>
        <Image src={images.archMiniApp} height={200} />
        <Heading size={5}>mini app</Heading>
        <Seperator />
      </ArchItem>
      <ArchItem>
        <Heading size={3}>&nbsp;</Heading>
        <Image src={images.archSprinkles} height={200} />
        <Heading size={5}>sprinkles</Heading>
        <Seperator style={{ opacity: '0.2' }} />
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

export const SprinklesArchReminderSlideNotes = (
  <>
    <h3>Sprinkles Reminder</h3>
    <ul>
      <li>small component-based interactivity</li>
      <li>slightly more encapsulated than static</li>
      <li>slight distinction to SPA</li>
    </ul>
  </>
);
