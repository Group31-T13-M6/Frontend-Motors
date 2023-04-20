import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

export const Header = styled.header`
  height: 5rem;
  background-color: var(--grey10);
  border-bottom: 2px solid var(--grey6);

  .header-container {
    max-width: 1600px;
    width: 100vw;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      .toggle {
        display: block;
      }
    }

    .logo {
      font: var(--Heading-7-600);
      display: flex;
      gap: 0.5rem;
      align-items: baseline;
      padding: 10px;
      background: linear-gradient(90deg, #0b0d0d -1.61%, #4529e6 100.99%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .box-options {
      padding: 10px;
      font: var(--body-1-600);
      height: 5rem;
      display: flex;
      gap: 2.75rem;
      justify-content: center;
      align-items: center;
      border: none;

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

      @media (min-width: 767px) {
        justify-content: center;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        border-left: 2px solid var(--grey6);

        li:last-child {
          border: 1.5px solid var(--grey4);
        }

        .navigation-menu li {
          display: block;
          align-items: center;
          margin-left: 1.875rem;
        }
      }
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: none;
  &.expanded {
    display: flex;
    align-items: center;
    padding-top: 2rem;
    width: 100%;
    height: calc(100vh - 77px);
    background-color: var(--whiteFixed);
    position: absolute;
    top: 60px;
    left: 0;
    flex-direction: column;
    gap: 4rem;
    z-index: 1;
  }
  @media screen and (min-width: 767px) {
    display: flex;
    gap: 1rem;
  }
`;
