import styled from "styled-components";

interface IStyledInitialNameProps {
  w?: string;
  h?: string;
}

const StyledInitialName = styled.p<IStyledInitialNameProps>`
  font: var(--body-2-500);
  color: white;
  background-color: var(--brand1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ w }) => (w ? `${w}px` : "30px")};
  height: ${({ h }) => (h ? `${h}px` : "30px")};
  ${({ w }) => parseFloat(w as string) > 30 && `font-size: calc(${w}px / 2);`};
`;

export { StyledInitialName };
