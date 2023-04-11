import styled, { css } from "styled-components";
import setColors from "./components/Colors";
import TitleComponent from "./components/Typography";

const Text = styled(TitleComponent)`
  color: ${({ color }) => setColors(color || "grey1")};
  ${({ fontSize }) => {
    switch (fontSize) {
      case "title-1-700":
        return css`
          font-size: 4.4rem;
          font-weight: 700;
          font-family: var(--font-family1);
        `;
      case "title-2-600":
        return css`
          font-size: 3.6rem;
          font-weight: 600;
          font-family: var(--font-family1);
        `;
      case "title-3-600":
        return css`
          font-size: 3.2rem;
          font-weight: 600;
          font-family: var(--font-family1);
        `;
      case "title-3-500":
        return css`
          font-size: 3.2rem;
          font-weight: 500;
          font-family: var(--font-family1);
        `;
      case "title-4-600":
        return css`
          font-size: 2.8rem;
          font-weight: 600;
          font-family: var(--font-family1);
        `;
      case "title-4-500":
        return css`
          font-size: 2.8rem;
          font-weight: 500;
          font-family: var(--font-family1);
        `;
      case "title-5-600":
        return css`
          font-size: 2.4rem;
          font-weight: 600;
          font-family: var(--font-family1);
        `;
      case "title-5-500":
        return css`
          font-size: 2.4rem;
          font-weight: 500;
          font-family: var(--font-family1);
        `;
      case "title-6-600":
        return css`
          font: var(--Heading-6-600);
        `;
      case "title-6-500":
        return css`
          font: var(--Heading-6-500);
        `;
      case "title-7-600":
        return css`
          font: var(--Heading-7-600);
        `;
      case "title-7-500":
        return css`
          font: var(--Heading-7-500);
        `;
      case "body-1-400":
        return css`
          font-size: 1.6rem;
          font-weight: 400;
          font-family: var(--font-family2);
        `;

      case "body-1-600":
        return css`
          font-size: 1.6rem;
          font-weight: 600;
          font-family: var(--font-family2);
        `;

      case "body-2-400":
        return css`
          font-size: 1.4rem;
          font-weight: 400;
          font-family: var(--font-family2);
        `;

      case "body-2-500":
        return css`
          font: var(--body-2-500);
        `;

      case "button-big-text":
        return css`
          font-size: 1.6rem;
          font-weight: 600;
          font-family: var(--font-family2);
        `;

      case "button-medium-text":
        return css`
          font-size: 1.4rem;
          font-weight: 600;
          font-family: var(--font-family2);
        `;

      case "input-placeholder":
        return css`
          font-size: 1.4rem;
          font-weight: 400;
          font-family: var(--font-family2);
        `;

      case "input-label":
        return css`
          font-size: 1.4rem;
          font-weight: 500;
          font-family: var(--font-family2);
        `;
      case undefined:
        return css`
          font-size: 1.6rem;
          font-weight: 500;
          font-family: var(--font-family1);
        `;
    }
  }}
`;

export default Text;
