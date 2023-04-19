import styled from "styled-components";

export const Input = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font: var(--input-label);

  input {
    border: 2px solid var(--grey7);
    border-radius: 4px;
    height: 38px;
    font: var(--input-placeholder);
    padding-left: 1rem;

    ::placeholder {
      color: var(--grey3);
    }
    :hover {
      border: 2px solid var(--grey4);
    }
  }
`;