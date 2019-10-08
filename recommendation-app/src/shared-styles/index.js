import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

export const gradient = keyframes`
    0% {
        background-position: 0% 50%
    }

    50% {
        background-position: 100% 50%
    }

    100% {
        background-position: 0% 50%
    }
`

export const breakpointMedium = 'only screen and (min-width: 40.063em)';
export const breakpointLarge = 'only screen and (min-width: 64.063em)';

export const colorBackground = `
    background: linear-gradient(270deg, #5019a2, #24665a, #379dd2);
    background-size: 200% 200%;
`

export const ContentWrapper = styled.div`
    background: white;
    border-radius: 0;
    margin: -40px auto 1.55rem;
    max-width: 600px;
    padding: 20px;
    position: relative;
    text-align: center;

    @media ${breakpointMedium} {
        border-radius: 10px;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }
`

export const Heading = styled.h2`
    margin: 0 6px;
    padding-bottom: 12px;
    text-align: center;
`

export const SubmitButton = styled.button`
    ${colorBackground}
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Righteous', cursive;
    margin: 6px;
    padding: 10px 20px;
    width: calc(100% - 12px);

    -webkit-animation: ${gradient} 7s ease infinite;
    -moz-animation: ${gradient} 7s ease infinite;
    -o-animation: ${gradient} 7s ease infinite;
    animation: ${gradient} 7s ease infinite;
`
