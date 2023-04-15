import styled, { css } from "styled-components";
import setColors from "./components/Colors";
import TitleComponent from "./components/Typography";

const Text = styled(TitleComponent)`
  color: ${({ color }) => setColors(color || "grey1")};
  ${({ fontSize }) => {
    switch (fontSize) {
      case "title-1-700":
        return css`
          font-size: 2.75rem;
          font-weight: 700;
          font-family: var(--font-family1);
        `;
      case "title-2-600":
        return css`
          font-size: 2.25rem;
          font-weight: 600;
          font-family: var(--font-family1);
        `;
      case "title-3-600":
        return css`
          font-size: 2rem;
          font-weight: 600;
          font-family: var(--font-family1);
        `;
      case "title-3-500":
        return css`
          font-size: 2rem;
          font-weight: 500;
          font-family: var(--font-family1);
        `;
      case "title-4-600":
        return css`
          font-size: 1.75rem;
          font-weight: 600;
          font-family: var(--font-family1);
        `;
      case "title-4-500":
        return css`
          font-size: 1.75rem;
          font-weight: 500;
          font-family: var(--font-family1);
        `;
      case "title-5-600":
        return css`
          font-size: 1.5rem;
          font-weight: 600;
          font-family: var(--font-family1);
        `;
      case "title-5-500":
        return css`
          font-size: 1.5rem;
          font-weight: 500;
          font-family: var(--font-family1);
        `;
      case "title-6-600":
        return css`
          font-size: 1.25rem;
          font-weight: 600;
          font-family: var(--font-family1);
        `;
      case "title-6-500":
        return css`
          font-size: 1.25rem;
          font-weight: 500;
          font-family: var(--font-family1);
        `;
      case "title-7-600":
        return css`
          font-size: 1rem;
          font-weight: 600;
          font-family: var(--font-family1);
        `;
      case "title-7-500":
        return css`
          font-size: 1rem;
          font-weight: 500;
          font-family: var(--font-family1);
        `;
      case "body-1-400":
        return css`
          font-size: 1rem;
          font-weight: 400;
          font-family: var(--font-family2);
        `;

      case "body-1-600":
        return css`
          font-size: 1rem;
          font-weight: 600;
          font-family: var(--font-family2);
        `;

      case "body-2-400":
        return css`
          font-size: 0.875rem;
          font-weight: 400;
          font-family: var(--font-family2);
        `;

      case "body-2-500":
        return css`
          font-size: 0.875rem;
          font-weight: 500;
          font-family: var(--font-family2);
        `;

      case "button-big-text":
        return css`
          font-size: 1rem;
          font-weight: 600;
          font-family: var(--font-family2);
        `;

      case "button-medium-text":
        return css`
          font-size: 0.875rem;
          font-weight: 600;
          font-family: var(--font-family2);
        `;

      case "input-placeholder":
        return css`
          font-size: 1rem;
          font-weight: 400;
          font-family: var(--font-family2);
        `;

      case "input-label":
        return css`
          font-size: 0.875rem;
          font-weight: 500;
          font-family: var(--font-family2);
        `;
      case undefined:
        return css`
          font-size: 1rem;
          font-weight: 600;
          font-family: var(--font-family2);
        `;
    }
  }}
`;

export default Text;
