import styled from 'styled-components';

export const Aside = styled.aside`
  width: 12rem;
  height: 25rem;
  overflow: overlay;

  .filter-button {
    background-color: var(--grey5);
    color: var(--grey3);
    line-height: 1.25rem;
    font-weight: 600;
    margin: 0px 1px;
    padding: 0.5rem;
  }

  .box-aside {
    display: none;
  }

  .clear-filter {
    margin-top: 1rem;
    button {
      max-width: 17.4rem;
      width: 95%;
      height: 3rem;

      margin-left: 3px;
      font-weight: 600;
      background-color: var(--brand1);
      color: var(--whiteFixed);
    }
  }

  section {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1.25rem;
  }

  div h2 {
    margin-bottom: 10px;
  }

  @media (max-width: 800px) {
    display: none;

    .filter-button {
      margin: 0px 15px;
    }

    .box-aside {
      max-width: 22rem;
      width: 55%;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .clear-filter {
      position: absolute;
      top: 34rem;
      right: 5.5rem;

      button {
        width: 13rem;
        max-width: unset;
        margin-left: unset;
      }
    }

    &.show {
      display: block;
      position: fixed;
      max-height: 40rem;
      height: 100%;
      width: 90%;

      right: 0;
      overflow: hidden;
      bottom: 0;
      top: 0;
      left: 6rem;
      transition: all 0.3s ease-in-out;
      background-color: var(--brand4);
      z-index: 300;
    }
  }
`;

export const SectionFilter = styled.section`
  width: 100%;
  height: 3rem;
  border-bottom: 0.5px solid var(--grey5);

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 800px) {
    display: none;
  }
`;
