import styled from 'styled-components';

const AsideS = styled.aside`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  background-color: #00000050;
  & > div:first-child {
    width: 95%;
    max-width: 520px;
    height: 365px;
    background-color: var(--whiteFixed);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 5px;
    & > div:first-child {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      & > button {
        background-color: unset;
        color: var(--grey4);
        font: var(--body-1-600);
        width: unset;
      }
    }
    & > div:nth-child(2) {
      margin-top: 46px;
      background-color: var(--grey7);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 239px;
      & > img {
        width: 77%;
      }
    }
  }
  @media (min-width: 1240px) {
    & > div:first-child {
      padding: 16px 24px;
    }
  }
`;

export default AsideS;
