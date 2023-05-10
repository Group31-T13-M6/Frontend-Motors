import styled from "styled-components";

const SectionInfoProduct = styled.section`
  display: flex;
  flex-direction: column;

  gap: 15px;
  background-color: var(--grey8);
  margin-top: 60px;
  position: relative;

  .background-brand {
    background-color: var(--brand1);
    height: 436px;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .setion-right {
    position: relative;
    z-index: 2;
    top: 0;

    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    & > div {
      background-color: var(--grey10);
      border-radius: 4px;
      width: 95%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    & > div:nth-child(1) {
      margin-top: 45px;
      height: 355px;

      img {
        max-width: 95%;
        object-fit: cover;
        object-position: center;
      }
    }

    & > div:nth-child(2) {
      justify-content: space-around;

      background-color: var(--grey10);
      height: 326.91px;
      padding: 28px;

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 89.91px;

        & > div {
          width: 120px;

          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 1rem;

          span {
            display: flex;
            justify-content: center;
            align-items: center;

            padding: 4px 8px;
            border-radius: 4px;

            background-color: var(--brand4);
          }
        }
      }
    }

    & > div:nth-child(3) {
      justify-content: space-around;
      padding: 36px 28px;

      h6 {
        margin-bottom: 32px;
      }
    }

    section {
      width: 95%;
    }
  }

  .setion-left {
    position: relative;
    z-index: 2;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin: auto;
    margin-bottom: 2rem;

    & > div:first-child {
      width: 100%;
      border-radius: 4px;
      background-color: yellow;

      background-color: var(--grey10);
      padding: 36px 28px;
      margin-bottom: 3rem;

      ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 3px;

        margin-top: 2rem;
      }
    }

    & > div:last-child {
      background-color: var(--grey10);
      width: 100%;
      padding: 2rem;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1.2rem;
    }
  }

  .section-comments-desk {
    display: none;
  }

  @media (max-width: 570px) {
    .product-image {
      width: 95%;
    }
  }

  @media (min-width: 700px) {
    .setion-right {
      & > div:nth-child(2) {
        height: 239.39px;
        padding: 28px 44px;
        align-items: start;

        & > div {
          width: 100%;
          flex-direction: row;
          align-items: center;
        }
      }
    }
  }

  @media (min-width: 1240px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 4rem;
    padding: 0 10rem 2rem 10rem;

    .background-brand {
      height: 516px;
    }

    .section-comments-desk {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      & > section:nth-child(1),
      section:nth-child(2) {
        width: 100%;
        
      }
    }

    .setion-right {
      width: 45%;
    }

    .setion-left {
      width: 45%;
      margin-top: 45px;
      & > div:first-child {
        border-radius: 4px;
        padding: 2rem;
      }

      & > div:last-child {
        width: 95%;
        background-color: var(--grey10);
        padding: 2rem;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1.2rem;

        & > button {
          width: 40%;
        }
      }
    }
  }
`;

export default SectionInfoProduct;
