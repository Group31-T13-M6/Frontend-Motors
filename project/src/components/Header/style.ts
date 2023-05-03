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

export const DivHeader = styled.div<IHeaderStyle>`
  position: relative;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    padding: 10px;
  }

  .box-options {
    position: relative;
    height: 5rem;
    border: none;
    div {
      padding: 10px;
      font: var(--body-1-600);
      height: 100%;
      display: flex;
      gap: 2.75rem;
      justify-content: center;
      align-items: center;

      a {
        text-decoration: none;
        color: var(--grey2);
      }

      a:last-child {
        padding: 12px 28px;
        border-radius: 4px;
        color: var(--grey0);
        line-height: 3rem;
      }
    }

    button {
      display: none;
    }

    @media (max-width: 767px) {
      border-bottom: 2px solid
        ${(props) => (props.mobileOpen ? "transparent" : "var(--grey6)")};

      .box-options {
        border-left: 2px solid var(--grey6);
      }
      div {
        position: fixed;

        display: ${(props) => (props.mobileOpen ? "flex" : "none")};
        flex-direction: column;
        justify-content: start;

        width: 100vw;
        height: 8rem;
        right: 0;
        background-color: white;
        gap: 1rem;

        border: none;
        border-bottom: 2px solid var(--grey6);

        a {
          max-width: 22rem;
        }
      }

      button {
        width: 3rem;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        font: var(--Heading-3-600);

        svg {
          display: flex;

          &:nth-child(${(props) => (props.mobileOpen ? "1" : "2")}) {
            display: none;
          }
        }
      }
    }
  }
`;
