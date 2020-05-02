import React, { ReactNodeArray } from 'react';
import {
  Card, CardWrapper, FrontCardFace, BackCardFace,
} from '../Common/FlipCard/styles';

export const VerticalFlipCard:React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  if ((children as ReactNodeArray).length !== 2) {
    throw new Error('Flip card requires exactly two children');
  }

  const frontFace = (children as ReactNodeArray)[0];
  const backFace = (children as ReactNodeArray)[1];

  return (
    <CardWrapper vertical>
      <Card animationDelay="0.5" vertical>
        <FrontCardFace vertical>{frontFace}</FrontCardFace>
        <BackCardFace vertical>{backFace}</BackCardFace>
      </Card>
    </CardWrapper>
  );
};
