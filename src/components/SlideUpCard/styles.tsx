import styled from 'styled-components';

export const Card = styled('div')<{animationDelay: String}>`
    height: 200%;
    width: 100%;
    position: relative;
    transition: ${(props) => `transform ${props.animationDelay}s`};
`;

export const CardWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;

    &:hover ${Card} {
        transform: translateY(-50%);
    }
`;

const CommonCardFace = styled.div`
    height: 50%;
    width: 100%;
    position: relative;
`;

export const FrontCardFace = CommonCardFace;
export const BackCardFace = CommonCardFace;
