import styled from '@emotion/styled';
import React from 'react';
import { Appear, Heading, Image, Layout } from 'spectacle';
import { images } from '../images';

const BackingLayout = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  margin-left: 2.75rem;
  justify-content: center;
  opacity: 0.2;
  width: 1200px;
  margin-left: -100px;
`;

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

export const ArchitecturePatternsSlideContent = () => (
  <>
    {/* backing content (for fadein) */}
    <BackingLayout>
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
    </BackingLayout>
    {/* content appear */}
    <Layout style={{ justifyContent: 'center', width: '1200px', marginLeft: '-100px' }}>
      <Appear>
        <ArchItem>
          <Heading size={3}>CSR</Heading>
          <Image src={images.archApp} height={200} />
          <Heading size={5}>app</Heading>
        </ArchItem>
      </Appear>
      <Appear>
        <ArchItem>
          <Heading size={3}>&nbsp;</Heading>
          <Image src={images.archMiniApp} height={200} />
          <Heading size={5}>mini app</Heading>
          <Seperator />
        </ArchItem>
      </Appear>
      <Appear>
        <ArchItem>
          <Heading size={3}>&nbsp;</Heading>
          <Image src={images.archSprinkles} height={200} />
          <Heading size={5}>sprinkles</Heading>
          <Seperator />
        </ArchItem>
      </Appear>
      <Appear>
        <ArchItem>
          <Heading size={3}>SSR</Heading>
          <Image src={images.archStatic} height={200} />
          <Heading size={5}>static</Heading>
          <Seperator />
        </ArchItem>
      </Appear>
    </Layout>
  </>
);

export const ArchitecturePatternsSlideNotes = (
  <>
    <h3>App</h3>
    <ul>
      <li>Highly interactive client, may use its own routing</li>
      <li>Because page skeleton is static, can pre-render this for even better TTR/TTI</li>
      <li>Still not intended to be incredibly deep</li>
    </ul>
    <h3>Mini-app</h3>
    <ul>
      <li>Very similar to App, but just smaller in scope.</li>
      <li>Usually a pointed interaction that requires hgih-interactability (e.g. a map)</li>
    </ul>
    <h3>Sprinkles</h3>
    <ul>
      <li>small component-based interactivity</li>
      <li />
      <li>slight distinction to SPA</li>
    </ul>
    <h3>Static</h3>
    <ul>
      <li>Direct DOM manipulation</li>
      <li>event listeners .etc</li>
      <li>e.g. alot of the methods that jQuery provides</li>
      <li>side note - jQuery API was so good, that browser native has them... no need for jQuery most of the time</li>
      <li>ideally hardly any scope & just presentational</li>
    </ul>
    <h3>segue</h3>
    <ul>
      <li>so.... back to the quest</li>
      <li>how can we create a pattern to support all of these various architectures</li>
      <li>also in a agnostic/frameworkless way?</li>
    </ul>
  </>
);
