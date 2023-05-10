import styled from "styled-components";

export const CreateComment = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font: var(--input-label);

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
    width: 90%;

    textarea {
      width: 100%;
      border: 2px solid var(--grey7);
      border-radius: 4px;
      height: 8rem;
      padding: 0.4rem 1rem;

      overflow: auto;
      word-wrap: break-word;
      resize: none;
      font: var(--input-placeholder);

      ::placeholder {
        color: var(--grey3);
      }

      &:is(:hover, :focus) {
        border: 2px solid var(--brand2);

        &::placeholder {
          color: var(--grey1);
        }
      }
    }
  }

  div {
    width: 90%;
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (min-width: 500px) {
    form {
      height: 10rem;
      align-items: end;

      border: 2px solid var(--grey7);

      &:is(:hover, :focus) {
        border: 2px solid var(--brand2);
      }

      textarea {
        margin-top: 10px;
        width: 100%;
        height: 6rem;
        border: none;

        &:is(:hover, :focus) {
          border: none;
        }
      }

      button {
        margin-right: 10px;
      }
    }
  }
`;
