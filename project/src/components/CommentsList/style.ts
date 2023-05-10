import styled from "styled-components";

const CommentsContainer = styled.section`
  background-color: var(--grey10);
  border-radius: 4px;
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  padding-bottom: 2rem;

  h3 {
    font: var(--Heading-6-600);
    color: var(--grey1);
    width: 100%;

    margin-top: 40px;
    padding-left: 44px;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 44px;
    gap: 1rem;
  }
`;

export default CommentsContainer;
