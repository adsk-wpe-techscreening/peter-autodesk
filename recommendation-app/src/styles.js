import styled from '@emotion/styled';
import img from './books.jpg';

import {
    gradient,
    breakpointMedium,
    breakpointLarge,
    colorBackground
} from './shared-styles';

export const Logo = styled.h1`
    ${colorBackground}
    font-family: 'Righteous', cursive;
    font-size: 64px;
    margin: 0px;
    opacity: 1;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    -webkit-animation: ${gradient} 7s ease infinite;
    -moz-animation: ${gradient} 7s ease infinite;
    -o-animation: ${gradient} 7s ease infinite;
    animation: ${gradient} 7s ease infinite;

    @media ${breakpointLarge} {
        font-size: 100px;
    }
`

export const LogoContainer = styled.div`
    background: white;
    border-radius: 0;
    margin: 200px auto;
    padding: 20px 0;
    position: absolute;
    text-align: center;
    width: 100%;

    @media ${breakpointMedium} {
        border-radius: 0px 20px 20px 0;
        padding: 20px 40px 20px 150px;
        width: unset;
    }
`

export const Section = styled.section`
    background-image: url(${img});
    background-size: cover;
    height: 500px;
    position: relative;
    width: 100%
`
