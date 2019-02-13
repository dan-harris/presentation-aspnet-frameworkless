import React from 'react';
import { Image, Layout } from 'spectacle';
// import { HeadingImage } from '../components/heading-image';
// import { icons } from '../icons';
import { images } from '../images';

export const RazorTSArchSlideContent = () => (
  <>
    <Layout style={{ flexDirection: 'column', justifyContent: 'center', width: '1200px', marginLeft: '-100px' }}>
      {/* <Heading size={2}>
        page to page&nbsp;
        <HeadingImage src={icons.page} />
      </Heading> */}
      <Image src={images.razorTSArch} width={1000} />
    </Layout>
  </>
);

export const RazorTSArchSlideNotes = (
  <>
    <h3>architecture of a page</h3>
    <ul>
      <li> overview of structure </li>
      <li> browser > page class > razor > server </li>
      <li> explain page class to razor page 1 to 1</li>
    </ul>
  </>
);
