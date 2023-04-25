import styled from 'styled-components';

const Aside = styled.aside`
  width: 12rem;
  height: 20rem;
  overflow: overlay;

  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  div h2 {
    margin-bottom: 10px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export default Aside;
