import styled from "styled-components";
import Logo from "../../assets/svg_background.jpg";

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
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Separator = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 60px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
`;

export const Main = styled.main``;
