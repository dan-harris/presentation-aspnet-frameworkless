import React from 'react';
import { Heading, Image, Layout } from 'spectacle';
import { images } from '../images';

export const TitleSlideContent = () => (
  <Layout style={{ justifyContent: 'center' }}>
    <Layout fit style={{ margin: '2.25rem 2.25rem 0 0' }}>
      <Image src={images.questSwords} width={150} height={150} />
    </Layout>
    <Layout style={{ flexDirection: 'column' }}>
      <Heading size={1} textAlign="left">
        aspnet + typescript
      </Heading>
      <Heading size={2} textAlign="left">
        a quest for architecture
      </Heading>
    </Layout>
  </Layout>
);

export const TitleSlideNotes = (
  <>
    <h3>welcome</h3>
    <ul>
      <li> welcome all</li>
      <li> firstly, thanks for coming and listening to me</li>
      <li> this is my quest towards a perfect frontend architecture</li>
    </ul>
  </>
);
