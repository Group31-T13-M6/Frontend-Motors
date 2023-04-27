import styled from "styled-components";

const CardComponent = styled.li`
  margin-bottom: 2rem;
  max-width: 328px;
  width: 100%;
  transition: all 0.3s;
  cursor: pointer;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 6px;

  &:hover {
    scale: 1.03;
  }

  .car-image {
    width: 100%;
  }

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
