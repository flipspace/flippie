import React from 'react';
import { ComponentRoot } from '../../../stories/styles';
import { PhotoFrontFace, PhotoBackFace } from '../../../stories/samples';
import { VerticalFlipCard } from '.';

export default {
  component: VerticalFlipCard,
  title: 'VerticalFlipCard',
};

export const Default = () => (
  <ComponentRoot>
    <VerticalFlipCard>
      <PhotoFrontFace src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1378&q=80" />
      <PhotoBackFace caption="❤️ a beautiful landscape" />
    </VerticalFlipCard>
  </ComponentRoot>
);
