import styled from "styled-components";

const MainS = styled.main`
  background-color: var(--grey8);
  section:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 17px;

    overflow-y: auto;

    width: 100%;
    height: 436px;

    background-color: var(--brand1);
    margin-top: 80px;
    & > div:first-child {
      max-width: 756px;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 355px;
        & > img {
          width: 80%;
        }
      }
      background-color: var(--grey10);
      border-radius: 4px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 90%;
      height: 355px;

      margin-top: 45px;
    }
    .container__list {
      width: 90%;
      h6 {
        display: none;
      }
      ul {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 17px;

        width: 100%;
      }
    }
  }
  section:nth-child(2) {
    background-color: var(--grey8);

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    & > div {
      background-color: var(--grey10);

      width: 90%;
      max-width: 756px;
      height: 326.91px;

      margin-top: -27px;
      padding: 28px;
      border-radius: 4px;

      display: flex;
      flex-direction: column;

      gap: 36px;

      h6 {
        margin-top: 46px;
      }

      & > div {
        display: flex;
        flex-direction: column;

        gap: 36px;
        & > div {
          display: flex;
          flex-direction: row;
          gap: 20px;

          span {
            display: flex;
            justify-content: center;
            align-items: center;

            padding: 5px 5px;
            background-color: var(--brand4);
          }
        }
      }
    }
  }
  @media (min-width: 775px) {
    section:first-child {
      & > div:first-child {
        & > div {
          & > img {
            width: 50%;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    section:first-child {
      flex-direction: row;
      justify-content: space-around;
      height: 600px;

      overflow-y: unset;
      & > div:first-child {
        margin-bottom: 60px;
        & > div {
          & > img {
            width: 50%;
          }
        }
      }
      .container__list {
        display: flex;
        background-color: var(--grey10);
        border-radius: 4px;

        flex-direction: row;
        flex-wrap: wrap;

        width: 440px;
        height: 377px;
        padding: 36px 21px;
        h6 {
          display: unset;
        }
        ul {
          background-color: var(--grey10);
          border-radius: 4px;

          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;

          width: 100%;
          height: unset;
        }
      }
    }
    section:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      & > div:first-child {
        margin-top: -189px;
        & > div {
          flex-direction: row;
          gap: unset;
          justify-content: space-between;
        }
      }
      & > div:nth-child(2) {
        background-color: transparent;
        width: 455px;
      }
    }
  }
`;

export default MainS;
