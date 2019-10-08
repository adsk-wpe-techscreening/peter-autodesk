import styled from '@emotion/styled';
import { breakpointMedium } from '../shared-styles';

export const Input = styled.input`
    border-color: rebeccapurple;
    border-radius: 10px;
    border-shadow: none;
    border-style: solid;
    font-size: 16px;
    margin: 6px;
    padding: 10px 20px;
    width: 100%;

    @media ${breakpointMedium} {
        width: 40%;
    }
`

export const Form = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
