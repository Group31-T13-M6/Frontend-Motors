import styled from 'styled-components';

const CardComponent = styled.li`
  margin-bottom: 2rem;

  .img-Wrapper {
    background: var(--grey7);
    width: 100%;
    text-align: center;
  }

  .car-mainInfo {
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .car-advertiser {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 1rem 0;
  }

  .car-lowInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .car-lowInfo-text {
    display: flex;
    gap: 10px;
  }

  .car-lowInfo-text p {
    background: var(--brand4);
    padding: 10px;
  }
`;

export default CardComponent;
