import styled from 'styled-components'
import HamburgerFeature from '../../images/hamburger4.jpg'

export const FeatureContainer = styled.div`
 background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${HamburgerFeature});
height: 100vh;
max-height: 500px;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
text-align: center;
padding: 0 1rem;

h1{
    font-size: clamp(3rem,5vw,5rem);
}
p{
    margin-bottom : 1rem;
    font-size: clamp(1rem,3vw,2rem)
}

`

export const FeatureButton = styled.button`
font-size: 1.4rem;
padding: 0.5rem 3rem;
border : none;
background: #FF6501;
color: #fff;
transition: 0.2s ease-out;

&:hover { 
    color: #900000;
    background: #F1B416;
    transition: 0.2s ease-out;
    cursor: pointer; 
}
`