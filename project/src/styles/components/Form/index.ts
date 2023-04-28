import styled from "styled-components";

interface IPropsStyled {
  height?: string;
  padding?: string;
}

const FormStyled = styled.section<IPropsStyled>`
  padding: 35px 5px 35px 5px;
  width: 90%;
  max-width: 400px;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--grey10);

  border-radius: 4px;
  font: var(--input-label);

  h2 {
    width: 90%;
    text-align: start;
    font: var(--Heading-5-500);
  }

  form {
    width: 100%;
    max-width: 380px;
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
    width: 90%;
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
`;

export default FormStyled;
