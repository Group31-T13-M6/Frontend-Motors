import styled from "styled-components";

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div h2 {
    margin-bottom: 10px;
  }

  @media (max-width: 525px) {
    display: none;
  }
`;

export default Aside;
