import { IPropsStyle } from 'src/interfaces/styles';
import styled from 'styled-components';

export const LinkBorder = styled.a<IPropsStyle>`
  cursor: pointer;
  border-radius: 4px;
  transition: 0.5s;

  display: flex;
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.alignItems || 'center'};

  border: 2px solid ${(props) => props.borderColor || 'var(--grey4)'};
  width: ${(props) => props.width || '90%'};
  height: ${(props) => props.height || '38px'};
  background: ${(props) => props.background || 'transparent'};
  color: ${(props) => props.textColor || 'var(--grey1)'};
  font: ${(props) => props.font || 'var(--button-big-text)'};

  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

export const MainButton = styled.button<IPropsStyle>`
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;

  display: flex;
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.alignItems || 'center'};

  border: 2px solid ${(props) => props.borderColor || 'transparent'};
  width: ${(props) => props.width || '90%'};
  height: ${(props) => props.height || '38px'};
  background: ${(props) => props.background || 'transparent'};
  color: ${(props) => props.textColor || 'var(--grey1)'};
  font: ${(props) => props.font || 'var(--button-big-text)'};

  &:hover {
    transition: 0.3s;
    transform: scale(1.01);
  }
`;
