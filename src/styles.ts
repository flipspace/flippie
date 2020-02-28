import styled from 'styled-components';

export const Card = styled('div')<{animationDelay: String}>`
    height: 100%;
    width: 100%;
    transform: rotateY(0deg);
    transform-style: preserve-3d;
    transition: ${(props) => `transform ${props.animationDelay}s`}
    position: relative;
`;

export const CardWrapper = styled.div`
    perspective: 1000px;
    height: 100%;
    width: 100%;

    &:hover ${Card} {
        transform: rotateY(180deg);
    }
`;

const CommonCardFace = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
`;

export const FrontCardFace = CommonCardFace;

export const BackCardFace = styled(CommonCardFace)`
    transform: rotateY(180deg);
`;
