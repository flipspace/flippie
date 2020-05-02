import styled from 'styled-components';

const CommonCardFace = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    z-index: 1;
`;

export const TopCardFace = styled(CommonCardFace)<{animationDelay: String}>`
    opacity: 0;
    transition: ${(props) => `opacity ${props.animationDelay}s`};
`;

export const BottomCardFace = CommonCardFace;

export const CardWrapper = styled.div`
    perspective: 1000px;
    height: 100%;
    width: 100%;

    &:hover ${TopCardFace} {
        opacity: 1;
        z-index: 2;
    }
`;
