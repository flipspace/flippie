import React from 'react';
import { ComponentRoot } from '../../../stories/styles';
import { PhotoFrontFace, PhotoBackFace } from '../../../stories/samples';
import { FadeInCard } from '.';

export default {
  component: FadeInCard,
  title: 'FadeInCard',
};

export const Default = () => (
  <ComponentRoot>
    <FadeInCard>
      <PhotoFrontFace src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1378&q=80" />
      <PhotoBackFace caption="Hover to see a beautiful landscape ❤️" />
    </FadeInCard>
  </ComponentRoot>
);
