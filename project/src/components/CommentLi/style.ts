import { colors } from "src/styles/components/Colors";
import styled from "styled-components";

const CommentStyle = styled.li`
  width: 100%;
  padding: 0.5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;

    div {
      width: 100%;
      display: flex;
      align-items: center;

      gap: 0.5rem;

      h4 {
        font: var(--body-2-500);
      }

      span {
        width: 5px;
        height: 5px;
        background: var(--grey4);
        border-radius: 50%;
      }

      p {
        color: var(--grey4);
      }
    }

    p {
      color: var(--grey2);
      font: var(--body-2-400);
    }
  }

  & > p:last-child {
    width: 100%;
    text-align: start;
    color: var(--grey2);
    font: var(--body-2-400);
  }

  .edit-div {
    position: relative;
    width: auto;
    padding: 0 5px;
    button {
      background: transparent;
    }
    nav {
      display: none;
    }

    &:focus,
    :hover {
      nav {
        position: absolute;
        right: 1.1rem;
        top: -2px;

        width: 8rem;
        height: 3.5rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;

        background: var(--grey10);
        border: var(--grey7) 2px solid;
        font: var(--body-1-600);

        button:first-child:is(:hover, :focus) {
          color: ${colors.success1};
          transition: 0.3s;
          transform: scale(1.01);
        }

        button:last-child:is(:hover, :focus) {
          color: ${colors.alert1};
          transition: 0.3s;
          transform: scale(1.01);
        }
      }
    }
  }

  .update-form {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
    width: 100%;

    border-radius: 4px;

    textarea {
      width: 100%;
      height: 8rem;
      padding: 0.4rem 1rem;

      border-radius: 4px;
      border: 2px solid var(--grey7);

      overflow: auto;
      word-wrap: break-word;
      resize: none;
      font: var(--input-placeholder);

      ::placeholder {
        color: var(--grey3);
      }

      &:is(:hover, :focus) {
        &::placeholder {
          color: var(--grey1);
          border: 2px solid var(--brand2);
        }
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:is(:hover, :focus) {
    }
  }
`;

export default CommentStyle;
