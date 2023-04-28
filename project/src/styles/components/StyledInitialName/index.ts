import styled, { css } from "styled-components";

interface IStyledInitialNameProps {
  w?: string;
  h?: string;
}

const StyledInitialName = styled.p<IStyledInitialNameProps>`
  font: var(--Heading-7-500);
  color: white;
  background-color: var(--brand1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({w}) => (w ? `${w}px` : "30px")};
  height: ${({h}) => (h ? `${h}px` : "30px")};
`;

export { StyledInitialName };
