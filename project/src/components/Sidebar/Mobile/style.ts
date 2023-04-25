import styled from 'styled-components';

const SectionFilter = styled.section`
  width: 100%;
  height: 3rem;
  border-bottom: 0.5px solid var(--grey5);

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 767px) {
    display: none;
  }
`;

export default SectionFilter;
