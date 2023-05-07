import styled from 'styled-components';

export const FooterEnd = styled.footer`
  background-color: var(--grey0);
  color: var(--whiteFixed);
  width: 100%;

  button {
    background-color: var(--grey1);
    border-radius: 50%;
    padding: 0.5rem;

    svg {
      color: var(--grey10);
      font-size: 1rem;
    }
  }

  .footer-container {
    font: var(--body-2-400);
    min-height: 140px;
    max-width: 1600px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 1rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  @media (max-width: 630px) {
    .footer-container {
      flex-direction: column;
      justify-content: center;
    }
  }
`;
