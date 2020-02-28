import React, { ReactNodeArray } from 'react';
import {
  Card, CardWrapper, FrontCardFace, BackCardFace,
} from './styles';

export const FlipCard:React.FC<{children: React.ReactChildren}> = ({
  children,
}) => {
  if ((children as ReactNodeArray).length !== 2) {
    throw new Error('Flip card requires exactly two children');
  }

  const frontFace = (children as ReactNodeArray)[0];
  const backFace = (children as ReactNodeArray)[1];

  return (
    <CardWrapper>
      <Card animationDelay="0.5">
        <FrontCardFace>{frontFace}</FrontCardFace>
        <BackCardFace>{backFace}</BackCardFace>
      </Card>
    </CardWrapper>
  );
};
