import styled from "styled-components";

const MainS = styled.main`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: var(--grey8);
  margin-top: 60px;

  section:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:first-child {
      background-color: var(--brand1);
      height: 436px;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      & > div {
        background-color: var(--grey10);

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;

        margin-top: 45px;

        max-width: 752px;
        width: 95%;
        height: 355px;
        img {
          width: 77%;
        }
      }
    }

    & > div:nth-child(2) {
      background-color: blue;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      background-color: var(--grey10);
      border-radius: 4px;

      width: 95%;
      max-width: 752px;
      height: 326.91px;
      padding: 28px;

      margin-top: -20px;
      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 89.91px;

        & > div {
          width: 120px;

          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 1rem;

          span {
            display: flex;
            justify-content: center;
            align-items: center;

            padding: 4px 8px;
            border-radius: 4px;

            background-color: var(--brand4);
          }
        }
      }
      button {
        background-color: var(--brand1);
        color: var(--whiteFixed);
        padding: 1rem;
        border-radius: 6px;
      }
    }

    & > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      background-color: var(--grey10);
      border-radius: 4px;

      width: 95%;
      max-width: 752px;
      margin-top: 24px;
      padding: 36px 28px;

      h6 {
        margin-bottom: 32px;
      }
    }
  }

  section:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:first-child {
      width: 95%;
      max-width: 752px;
      max-height: 377px;
      border-radius: 4px;

      background-color: var(--grey10);
      padding: 36px 28px;
      margin-bottom: 3rem;

      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 3px;

        margin-top: 2rem;
      }
    }
  }

  @media (min-width: 1240px) {
    background: linear-gradient(
      to bottom,
      var(--brand1) calc(100% - 327px),
      var(--grey8) calc(100% - 516px)
    );
    flex-direction: row;
    justify-content: center;
    margin-top: 4rem;
    padding-bottom: 2rem;

    section:first-child {
      & > div:first-child {
        background-color: unset;
        height: 516px;

        & > div {
        }
      }
      
      & > div:nth-child(2) {
        margin-top: -92px;
        height: 239.39px;
        padding: 28px 44px;
        & > div {
          flex-direction: row;
          align-items: center;
        }
      }
    }
    section:nth-child(2) {
      margin-top: 45px;
      & > div:first-child {
        border-radius: 4px;
        padding: 2rem;
      }
    }
  }
`;

export default MainS;
