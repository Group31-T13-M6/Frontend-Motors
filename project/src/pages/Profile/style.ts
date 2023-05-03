import styled from "styled-components";

const StyledMainProfile = styled.main`
  background: linear-gradient(
    to bottom,
    var(--brand1) 35%,
    var(--grey8) calc(55% - 516px)
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;

  .advertiser-info {
    display: flex;
    justify-content: center;
    flex-direction: column;

    gap: 2rem;
    background-color: var(--grey10);
    max-width: 1240px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    padding: 2rem;
    margin-top: 5rem;

    .advertiser-createButton {
      max-width: 150px;
    }

    button {
      font: var(--button-big-text);
      background: transparent;
      border: 1px solid var(--brand1);
      color: var(--brand1);
      padding: 1.2rem;
      text-align: center;
      width: 100%;
    }

    span {
      font: var(--body-2-500);
      background-color: var(--brand4);
      color: var(--brand1);
      padding: 5px;
      border-radius: 4px;
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  ul {
    margin-top: 4rem;
    display: flex;
    gap: 4rem;
    width: 100%;
    max-width: 1580px;

    flex-wrap: wrap;

    span {
      text-align: center;
      width: 100%;
    }
  }
`;

export { StyledMainProfile };
