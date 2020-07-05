import styled from 'styled-components';

export const Card = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

export const BaseCardFace = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const OverlayCardFace = styled('div') <{ animationDelay: String }>`
    bottom: 100%;
    width: 100%;
    height: auto;
    transition: ${(props) => `transform ${props.animationDelay}s`};
    position: absolute;
`;

export const CardWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;

    &:hover ${OverlayCardFace} {
        transform: translateY(100%);
    }
`;
