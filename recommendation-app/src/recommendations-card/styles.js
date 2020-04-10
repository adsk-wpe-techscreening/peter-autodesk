import styled from '@emotion/styled';
import { breakpointMedium, breakpointLarge } from '../shared-styles';

export const Card = styled.div`
    background: white;
    border-radius: 0;
    margin: 6px 0;
    padding: 10px 20px;
    width: 100%;

    @media ${breakpointMedium} {
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        margin: 6px;
        width: calc(50% - 60px);
    }

    @media ${breakpointLarge} {
        border-radius: 10px;
        width: calc(25% - 20px);
    }

`
