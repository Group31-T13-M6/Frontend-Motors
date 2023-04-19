import styled from "styled-components";

const FormStyled = styled.section`
  padding: 35px 5px 35px 5px;
  width: 90%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: var(--grey10);

  border-radius: 4px;
  
  h2 {
    width: 90%;
    text-align: start;
  }

  form {
    width: 100%;
    max-width: 380px;
    height: 380px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: var(--grey10);

    p {
      font: var(--body-2-400);
      color: var(--grey2);
    }
  }
`;

export default FormStyled;
