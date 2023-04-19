import styled from "styled-components";

export const LinkBorder = styled.a`
  cursor: pointer;
  height: 38px;
  width: 90%;
  font: var(--button-big-text);
  color: var(--grey1);

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: 2px solid var(--grey4);
  border-radius: 4px;

  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

export const ButtonBorder = styled.button`
  width: 90%;
  background: transparent;
  border: 2px solid var(--grey4);
`;

export const ButtonBrand = styled.button`
  width: 90%;
  background: var(--brand1);
  color: white;
`;
