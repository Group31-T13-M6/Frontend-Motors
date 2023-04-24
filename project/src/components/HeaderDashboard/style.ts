import { colors } from "src/styles/components/Colors";
import styled from "styled-components";

interface IHeaderStyle {
  mobileOpen: boolean;
}

export const HeaderContainer = styled.div<IHeaderStyle>`
  height: 100%;
  .header-nav {
    position: relative;
    width: 70px;
    height: 100%;
    border-left: var(--grey6) 2px solid;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font: var(--body-1-400);
      color: var(--grey2);

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 700;
        font-family: var(--font-family2);

        width: 35px;
        height: 35px;
        border-radius: 50%;

        background-color: red;
        color: white;
      }
      p {
        display: none;
      }
    }
    nav {
      display: none;

      position: absolute;
      padding: 10px 0;
      top: 75px;
      right: 0px;
      width: 100vw;

      border-bottom: var(--grey6) 2px solid;
      background-color: var(--grey10);

      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &:is(:hover, :focus) {
      nav {
        display: flex;
      }
    }
  }

  @media (min-width: 500px) {
    .header-nav {
      width: 245px;

      div {
        p {
          display: flex;
        }
      }

      &:is(:hover, :focus) {
        nav {
          position: absolute;
          padding: 10px 0;
          top: 75px;
          right: 20px;
          width: 200px;

          background-color: var(--grey10);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

//   ${(props) => (props.mobileOpen ? "transparent" : "var(--grey6)")}
