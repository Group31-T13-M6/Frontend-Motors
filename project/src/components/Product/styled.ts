import styled from "styled-components";

const MainS = styled.main`
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
    & > div {
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
    ul {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 17px;

      width: 90%;
      h6 {
        display: none;
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
`;

export default MainS;
