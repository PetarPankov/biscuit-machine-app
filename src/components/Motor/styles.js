import styled, { keyframes } from 'styled-components';

const border = keyframes`
from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
`

export const InnerWheel = styled.div`
    border: 2px solid #666666;
    border-radius: 25px;
    width: 25px;
    height: 25px;
    background-color: #a4c2f4; 
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
    position: relative;
`;

export const OuterWheel = styled.div`
    border: 2px solid #666666;
    border-radius: 50px;
    width: 55px;
    height: 55px;
    background-color: #6d9eeb;  
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ActiveWheel = styled.div`
    width: 18px;
    height: 18px;
    background: transparent;
    border-radius: 50%;
    position: absolute;
    border: 4px solid transparent;
    border-top-color: #666666;
    animation-name: ${border};
    -webkit-animation-duration: ${props => props.isMoving ? '2s' : '0'};
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
`;