import { IPropsStyle } from "src/interfaces/styles";
import styled from "styled-components";
import { colors } from "../Colors";

export const Input = styled.div<IPropsStyle>`
  width: ${(props) => props.width || "90%"};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "8px"};
  font: ${(props) => props.font || "var(--input-label)"};

  input {
    border: 2px solid var(--grey7);
    border-radius: 4px;
    height: 38px;
    font: var(--input-placeholder);
    padding-left: 1rem;

    ::placeholder {
      color: ${(props) => props.placeholderColor || "var(--grey3)"};
    }
    &:is(:hover, :focus) {
      border: 2px solid var(--brand2);

      &::placeholder {
        color: ${(props) => props.placeholderColorFocus || "var(--grey1)"};
      }
    }
  }

  p {
    height: 18px;
    font: var(--button-medium-text);
    width: 90%;
    color: ${colors.alert1};
  }
`;

export const InputPassword = styled(Input)`
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid var(--grey7);
    border-radius: 4px;
    color: var(--grey3);
    :is(:hover, :focus) {
      border: 2px solid var(--brand2);
    }

    input {
      width: 90%;
      border: none;
      background: transparent;
      :is(:hover, :focus) {
        border: none;
      }
    }
    button {
      border-radius: 4px;
      font: var(--button-big-text);
      display: flex;
      align-items: center;
      justify-content: center;

      height: 100%;
      font-size: 25px;
      color: var(--grey3);
      :hover {
        color: var(--grey1);
      }
    }
  }
`;

export const TextArea = styled.div<IPropsStyle>`
  width: ${(props) => props.width || "90%"};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "8px"};
  font: ${(props) => props.font || "var(--input-label)"};

  textarea {
    border: 2px solid var(--grey7);
    border-radius: 4px;
    height: 80px;
    padding: 0.4rem 1rem;

    overflow: auto;
    word-wrap: break-word;
    resize: none;
    font: var(--input-placeholder);

    ::placeholder {
      color: ${(props) => props.placeholderColor || "var(--grey3)"};
    }

    &:is(:hover, :focus) {
      border: 2px solid var(--brand2);

      &::placeholder {
        color: ${(props) => props.placeholderColorFocus || "var(--grey1)"};
      }
    }
  }

  p {
    height: 18px;
    font: var(--button-medium-text);
    width: 90%;
    color: ${colors.alert1};
  }
`;

export const Select = styled.div<IPropsStyle>`
  width: ${(props) => props.width || "90%"};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "8px"};
  font: ${(props) => props.font || "var(--input-label)"};

  select {
    background: var(--grey10);
    border: 2px solid var(--grey7);
    border-radius: 4px;
    height: 38px;
    padding-left: 1rem;

    overflow: auto;
    word-wrap: break-word;
    resize: none;
    font: var(--input-placeholder);

    color: ${(props) => props.placeholderColor || "var(--grey5)"};

    &:is(:hover, :focus) {
      border: 2px solid var(--brand2);
      color: ${(props) => props.placeholderColorFocus || "var(--grey1)"};
    }
  }

  p {
    height: 18px;
    font: var(--button-medium-text);
    width: 90%;
    color: ${colors.alert1};
  }
`;
