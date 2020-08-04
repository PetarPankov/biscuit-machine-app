import styled, { keyframes } from 'styled-components';

const border = keyframes`
    to {
        stroke-dashoffset: -800;
    }
`

export const ConveyorRamp = styled.div`
  border: 2px solid #666666;
  width: 640px;
  height: 5px;
  background-color: #999999;
  position: relative;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
`;

export const Line = styled.polygon`
    stroke: #666666;
    stroke-width: 3px;
    stroke-dasharray: 59, 18;
    stroke-dashoffset: 3;
    fill: none;
    animation: ${border} ${props => props.isMoving ? '5s' : '0'} linear infinite;
`;

export const SVG = styled.svg`
    top: -24px;
    left: -5px;
    position: relative;
`;
