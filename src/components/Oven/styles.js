import styled from 'styled-components';

export const InnerBox = styled.div`
  border: 2px solid #666666;
  border-bottom: none;
  width: 185px;
  height: 48px;
  background-color: #ffffff;
`;

export const OuterBox = styled.div`
  border: 2px solid #666666;
  width: 200px;
  height: 100px;
  background-color: #ffffff;  
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Heater = styled.div`
  border: 2px solid #666666;
  width: 175px;
  height: 5px;
  background-color: ${props => props.isHeaterOn ? ' #e06666' : '#666666'};
  transition: 3s;
  margin: 0 auto;
  margin-top: 5px;
`;