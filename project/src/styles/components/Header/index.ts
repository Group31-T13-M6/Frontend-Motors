import styled from "styled-components";

export const Header = styled.header`
  height: 5rem;
  background-color: var(--grey10);
  border-bottom: 2px solid var(--grey6);
  position: fixed;
  z-index: 3;
  inset: 0;

  .header-container {
    position: relative;
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      padding: 10px;
    }
  }
`;
