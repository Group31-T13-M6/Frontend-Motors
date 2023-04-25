import styled from 'styled-components';

const ScrollableContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--grey3);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--grey4);
  }
`;

export default ScrollableContainer;
