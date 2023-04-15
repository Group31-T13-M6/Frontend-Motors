import styled from 'styled-components';

export const Header = styled.header`
  height: 5rem;
  background-color: var(--grey10);
  border-bottom: 2px solid var(--grey6);

  .header-container {
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

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
      border-left: 2px solid var(--grey6);

      a {
        text-decoration: none;
        color: var(--grey2);
      }

      a:last-child {
        padding: 12px 28px;
        border-radius: 4px;
        color: var(--grey0);
        border: 1.5px solid var(--grey4);
      }
      @media (max-width: 768px) {
        display: none;
        // caso seja preciso fazer responsividade
      }
    }
  }

`;
