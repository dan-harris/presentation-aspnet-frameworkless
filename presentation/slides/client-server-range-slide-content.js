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

const Seperator = styled.div`
  border: 4px #231942 dashed;
  height: 1px;
  width: 100%;
  margin-top: 100px;
`;

const ScalePoint = styled.div`
  background-color: #231942;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  align-self: flex-end;
  transform: translateY(-17px) translateX(2px);
`;

const ScaleItem = styled.div`
  height: 270px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`;

const ScaleSubItem = styled(ScaleItem)`
  width: 150px;
  margin: 0;
`;

const SubDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  height: 1.5rem;
  transform: translateX(42.5%);
`;

export const ClientServerRangeSlideContent = () => (
  <>
    {/* backing content */}
    <BackingLayout>
      <ScaleItem>
        <Heading size={3}>CSR</Heading>
        <Image src={images.client} height={200} />
        <Heading size={5}>single-page app</Heading>
      </ScaleItem>
      <ScaleSubItem>
        <Seperator />
        <ScalePoint />
        <SubDescription>mini spa / app</SubDescription>
      </ScaleSubItem>
      <ScaleSubItem>
        <Seperator />
        <ScalePoint />
        <SubDescription>web components</SubDescription>
      </ScaleSubItem>
      <ScaleSubItem>
        <Seperator />
        <ScalePoint />
        <SubDescription>light interaction</SubDescription>
      </ScaleSubItem>
      <ScaleSubItem style={{ width: '120px' }}>
        <Seperator />
        <ScalePoint style={{ opacity: 0 }} />
        <SubDescription />
      </ScaleSubItem>
      <ScaleItem>
        <Heading size={3}>SSR</Heading>
        <Image src={images.server} height={175} style={{ marginBottom: 25 }} />
        <Heading size={5}>multi-page app</Heading>
      </ScaleItem>
    </BackingLayout>
    {/* content appear */}
    <Layout style={{ justifyContent: 'center', width: '1200px', marginLeft: '-100px' }}>
      <Appear>
        <ScaleItem>
          <Heading size={3}>CSR</Heading>
          <Image src={images.client} height={200} />
          <Heading size={5}>single-page app</Heading>
        </ScaleItem>
      </Appear>
      <Appear>
        <ScaleSubItem>
          <Seperator />
          <ScalePoint />
          <SubDescription>mini spa / app</SubDescription>
        </ScaleSubItem>
      </Appear>
      <Appear>
        <ScaleSubItem>
          <Seperator />
          <ScalePoint />
          <SubDescription>web components</SubDescription>
        </ScaleSubItem>
      </Appear>
      <Appear>
        <ScaleSubItem>
          <Seperator />
          <ScalePoint />
          <SubDescription>light interaction</SubDescription>
        </ScaleSubItem>
      </Appear>
      <Appear>
        <ScaleSubItem style={{ width: '120px' }}>
          <Seperator />
          <ScalePoint style={{ opacity: 0 }} />
          <SubDescription />
        </ScaleSubItem>
      </Appear>
      <Appear>
        <ScaleItem>
          <Heading size={3}>SSR</Heading>
          <Image src={images.server} height={175} style={{ marginBottom: 25 }} />
          <Heading size={5}>multi-page app</Heading>
        </ScaleItem>
      </Appear>
    </Layout>
  </>
);

export const ClientServerRangeSlideNotes = (
  <>
    <h3>about the scale</h3>
    <ul>
      <li>started thinking about scale of rendering</li>
      <li>technically sliding scale... can ssr spa</li>
      <li>explain csr / ssr</li>
    </ul>
    <h3>client</h3>
    <ul>
      <li>fully client driven</li>
      <li>traditional SPA...</li>
      <li>things like PWA, mobile</li>
      <li>explain csr</li>
    </ul>
    <h3>mini SPA / Mini-app</h3>
    <ul>
      <li>similar to SPA, but smaller in scope</li>
      <li>page skeleton + (outer) routing controlled elsewhere</li>
      <li>slight distinction to SPA</li>
    </ul>
    <h3>web Components</h3>
    <ul>
      <li>again, slight step down from mini-app</li>
      <li>generally different scope, as can compose multiple components (e.g. SPA)</li>
      <li>slight distinction to SPA</li>
    </ul>
    <h3>light interaction</h3>
    <ul>
      <li>Direct DOM manipulation</li>
      <li>event listeners .etc</li>
      <li>e.g. alot of the methods that jQuery provides</li>
      <li>side note - jQuery API was so good, that browser native has them... no need for jQuery most of the time</li>
      <li>ideally hardly any scope & just presentational</li>
    </ul>
    <h3>server</h3>
    <ul>
      <li>server render</li>
      <li>aspnet, tada</li>
      <li>purely static markup, no client side interaction</li>
    </ul>
  </>
);
