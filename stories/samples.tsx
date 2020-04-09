import React from 'react';
import { SampleCard } from './styles';

export const PhotoFrontFace: React.FC<{ src: string }> = ({ src }) => (
  <SampleCard>
    <img
      src={src}
      alt="Landscape wallpaper"
      style={{
        width: '96%',
        height: '80%',
      }}
    />
  </SampleCard>
);

export const PhotoBackFace: React.FC<{ caption: string }> = ({ caption }) => (
  <SampleCard>
    <span
      role="img"
      aria-label="heart emoji"
      style={{
        fontWeight: 200,
      }}
    >
      {caption}
    </span>
  </SampleCard>
);
