import styled from "styled-components";

const LiS = styled.li`
  background-color: var(--grey10);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 756px;
  height: 355px;

  img {
    width: 80%;
  }
  @media (min-width: 775px) {
    img {
      width: 50%;
    }
  }
  @media (min-width: 1200px) {
    max-width: 108px;
    height: 108px;

    background-color: var(--grey7);
    border-radius: 4px;
    img {
      width: 80%;
    }
  }
`;

export default LiS;
