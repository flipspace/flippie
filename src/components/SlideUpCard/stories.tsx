import React from 'react';
import { ComponentRoot } from '../../../stories/styles';
import { PhotoFrontFace, PhotoBackFace } from '../../../stories/samples';
import { SlideUpCard } from '.';

export default {
  component: SlideUpCard,
  title: 'SlideUpCard',
};

export const Default = () => (
  <ComponentRoot>
    <SlideUpCard>
      <PhotoFrontFace src="https://images.unsplash.com/photo-1524481905007-ea072534b820?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
      <PhotoBackFace caption="with great power..." />
    </SlideUpCard>
  </ComponentRoot>
);
