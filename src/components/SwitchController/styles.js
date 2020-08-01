import styled from 'styled-components';

export const SwitchBox = styled.div`
  background-color: #cccccc;
  border: 2px solid #666666;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 65px;
  height: 45px;
`;

export const Title = styled.span`
  color: black;
  font-size: 10px;
  margin: 10px;
  cursor: pointer;
`;

export const Lever = styled.div`
    width: 50px;
    height: 5px;
    background-color: #666666;
    transform: rotate(38deg);
    bottom: 8px;
    position: relative;
    right: 40px;
`;


export const LeverBall = styled.div`
    width: 13px;
    height: 13px;
    background-color: #cccccc;
    border: 2px solid #666666;
    border-radius: 11px;
    position: absolute;
    right: 46px;
    bottom: -6px;
`;
