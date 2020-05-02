import React, { ReactNodeArray } from 'react';
import { CardWrapper, TopCardFace, BottomCardFace } from './styles';

export const FadeInCard:React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  if ((children as ReactNodeArray).length !== 2) {
    throw new Error('Flip card requires exactly two children');
  }

  const topFace = (children as ReactNodeArray)[0];
  const bottomFace = (children as ReactNodeArray)[1];

  return (
    <CardWrapper>
      <TopCardFace animationDelay="0.5">{topFace}</TopCardFace>
      <BottomCardFace>{bottomFace}</BottomCardFace>
    </CardWrapper>
  );
};
