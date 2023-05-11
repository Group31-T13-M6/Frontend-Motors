import styled from "styled-components";

const CardComponent = styled.li`
  max-width: 312px;
  min-width: 280px;
  width: 100%;
  transition: all 0.3s;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;

  .main-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &:hover {
    scale: 1.03;
  }

  .car-image {
    width: 100%;
    height: 10rem;
    object-fit: contain;
    object-position: center;

    @media (max-width: 800px) {
      height: 9rem;
    }
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
  }

  .car-OwnerButtons {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      font: var(--body-2-500);
      color: var(--grey1);
      padding: 6px;
      border: 1px solid var(--grey1);
      border-radius: 4px;
      background: none;
    }
  }
`;

export default CardComponent;
