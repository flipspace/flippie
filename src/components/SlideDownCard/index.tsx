import React, { ReactNodeArray } from 'react';
import {
  Card, CardWrapper, BaseCardFace, OverlayCardFace,
} from './styles';

export const SlideDownCard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  if ((children as ReactNodeArray).length !== 2) {
    throw new Error('Slide-down card requires exactly two children');
  }

  const baseFace = (children as ReactNodeArray)[0];
  const overlayFace = (children as ReactNodeArray)[1];

  return (
    <CardWrapper>
      <Card>
        <BaseCardFace>{baseFace}</BaseCardFace>
        <OverlayCardFace animationDelay="0.6">{overlayFace}</OverlayCardFace>
      </Card>
    </CardWrapper>
  );
};
