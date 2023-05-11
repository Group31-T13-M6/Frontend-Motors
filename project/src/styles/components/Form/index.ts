import styled from "styled-components";

interface IPropsStyled {
  height?: string;
  padding?: string;
  width?: string;
  widthChildren?: string;
  maxWidth?: string
  maxFormWidth?: string
}

const FormStyled = styled.section<IPropsStyled>`
  padding: 35px 5px 35px 5px;
  width: ${(props) => props.width || "90%"};
  max-width: ${(props) => props.maxWidth || "400px"};
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border-radius: 4px;
  font: var(--input-label);

  h2 {
    width: ${(props) => props.widthChildren || "90%"};
    text-align: start;
    font: var(--Heading-5-500);
  }

  h3 {
    width: ${(props) => props.widthChildren || "90%"};
    text-align: start;
    font: var(--body-2-500);
  }

  form {
    width: 100%;
    max-width: ${(props) => props.maxFormWidth || "380px"};;
    height: ${(props) => props.height || "380px"};
    padding: ${(props) => props.padding || "0"};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: var(--grey10);

    p {
      font: var(--body-2-400);
      color: var(--alert1);
    }

    .register-question {
      font: var(--body-2-400);
      color: var(--grey2);
    }
  }

  .two-components {
    width: ${(props) => props.widthChildren || "90%"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 11px;
  }

  .address {
    font: var(--body-1-600);
    width: 90%;
  }
  .address-label-type-user {
    width: 90%;
  }

  .update-user {
    width: ${(props) => props.widthChildren || "90%"};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default FormStyled;
