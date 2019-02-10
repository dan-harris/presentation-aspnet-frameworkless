import styled from '@emotion/styled';
import React from 'react';
import { Heading, Image, Text } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';
import { images } from '../images';

const LargeImage = styled(Image)`
  height: 350px;
  margin-top: 6rem !important;
  border: 8px solid #231942;
  border-radius: 6px;
`;

export const CreatedAPizzaShopSlideContent = () => (
  <>
    <Heading size={2}>
      <HeadingImage src={icons.pizza} />
      &nbsp;so... i created a pizza shop
    </Heading>
    <LargeImage src={images.danPizza} />
    <Text style={{ marginTop: '3rem', fontWeight: '700', opacity: '0.3' }}>photoshop skillz by josh ( @huntoce )</Text>
  </>
);

export const CreatedAPizzaShopSlideNotes = (
  <>
    <ul>
      <li> simple combine the two!! </li>
      <li> show demo app homepage as example </li>
      <li> tie back to static / light interaction archs </li>
    </ul>
  </>
);
