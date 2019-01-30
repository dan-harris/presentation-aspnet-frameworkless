import React from 'react';
import { Code, Heading, Slide, Text } from 'spectacle';
import { images } from '../images';

export const TextSlideAlt = () => (
  <Slide transition={['fade']} bgColor="backgroundDefault" bgColor="backgroundDefault" bgImage={images.genericBGDefault} bgSize="auto">
    <Heading size={1}>heading 1</Heading>
    <Heading size={2}>heading 2</Heading>
    <Heading size={3}>heading 3</Heading>
    <Heading size={4}>heading 4</Heading>
    <Heading size={5}>heading 5</Heading>
    <Text>
      Paragraph text lorem ipsum dolem sum do whatsy kung fu gangnam style. <Code>const foo = bar; () => something;</Code> Twinkies blue
      warehouse fund chocobos.
    </Text>
  </Slide>
);
