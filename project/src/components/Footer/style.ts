import styled from 'styled-components';

export const FooterEnd = styled.footer`
  width: 100vw;
  height: 8.75rem;
  background-color: var(--grey0);
  color: var(--whiteFixed);
  margin-top: 40px;

  .footer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    max-width: 1600px;

    .logo {
      display: flex;
      gap: 0.5rem;
      align-items: baseline;
      margin-top: 45px;
    }
  }

  @media (min-width: 768px) {
    .footer-container {
      align-items: baseline;
      padding: 0 60px;
      flex-direction: row;
      gap: 20rem;
    }
  }
`;
