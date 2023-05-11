import styled from "styled-components";

interface IProps {
  width?: string;
  direction?: string;
  mTop?: string;
  padding?: string;
}

export const MainBase = styled.main<IProps>`
  background-color: var(--grey8);
  width: ${(props) => props.width || "100%"};
  min-height: 100vh;
  margin-top: ${(props) => props.mTop || "5rem"};
  padding: ${(props) => props.padding || "2rem 0"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: center;
  justify-content: center;

  .section-comments-mobile {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1240px) {
    .section-comments-mobile {
      display: none;
    }
  }
`;
