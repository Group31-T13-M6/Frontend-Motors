import styled from 'styled-components';
import Logo from '../../assets/svg_background.jpg';

export const Section = styled.section`
  position: relative;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 100%;
  min-height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .intro-text {
    z-index: 2;
    padding: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Separator = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  gap: 1.25rem;
`;

export const Main = styled.main`
  margin: 0 auto;
  width: 80%;
  max-width: 1171px;

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (min-width: 930px) and (max-width: 1050px) {
    width: 57%;
  }

  ul {
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 800px) {
      padding: 0.5rem;
      flex-wrap: nowrap;
      overflow: overlay;
    }
  }
`;
