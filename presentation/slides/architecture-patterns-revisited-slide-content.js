import styled from '@emotion/styled';
import React from 'react';
import { Heading, Image, Layout } from 'spectacle';
import { images } from '../images';

const ArchItem = styled.div`
  height: 270px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 3rem 3rem;
`;

const Seperator = styled.div`
  border: 4px #231942 dashed;
  height: 1px;
  position: absolute;
  width: 90px;
  transform: translateX(-148px);
`;

export const ArchitecturePatternsRevisitedSlideContent = () => (
  <>
    <Layout style={{ justifyContent: 'center', width: '1200px', marginLeft: '-100px' }}>
      <ArchItem>
        <Heading size={3}>CSR</Heading>
        <Image src={images.archApp} height={200} />
        <Heading size={5}>app</Heading>
      </ArchItem>
      <ArchItem>
        <Heading size={3}>&nbsp;</Heading>
        <Image src={images.archMiniApp} height={200} />
        <Heading size={5}>mini app</Heading>
        <Seperator />
      </ArchItem>
      <ArchItem>
        <Heading size={3}>&nbsp;</Heading>
        <Image src={images.archSprinkles} height={200} />
        <Heading size={5}>sprinkles</Heading>
        <Seperator />
      </ArchItem>
      <ArchItem>
        <Heading size={3}>SSR</Heading>
        <Image src={images.archStatic} height={200} />
        <Heading size={5}>static</Heading>
        <Seperator />
      </ArchItem>
    </Layout>
  </>
);

export const ArchitecturePatternsRevisitedSlideNotes = (
  <>
    <h3>revisited arch</h3>
    <ul>
      <li>we've created a way to support sliding scale of requirements/use cases</li>
      <li>agnostic & using platform natives</li>
    </ul>
  </>
);
