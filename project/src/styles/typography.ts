import styled, { css } from 'styled-components';
import setColors from './components/Colors';
import TitleComponent from './components/Typography';

const Text = styled(TitleComponent)`
  color: ${({ color }) => setColors(color || 'grey1')};
  ${({ fontSize }) => {
    switch (fontSize) {
      case 'title-1-700':
        return css`
          font: var(--Heading-1-600);
        `;
      case 'title-2-600':
        return css`
          font: var(--Heading-2-600);
        `;
      case 'title-3-600':
        return css`
          font: var(--Heading-3-600);
        `;
      case 'title-3-500':
        return css`
          font: var(--Heading-3-500);
        `;
      case 'title-4-600':
        return css`
          font: var(--Heading-4-600);
        `;
      case 'title-4-500':
        return css`
          font: var(--Heading-4-500);
        `;
      case 'title-5-600':
        return css`
          font: var(--Heading-5-600);
        `;
      case 'title-5-500':
        return css`
          font: var(--Heading-5-500);
        `;
      case 'title-6-600':
        return css`
          font: var(--Heading-6-600);
        `;
      case 'title-6-500':
        return css`
          font: var(--Heading-6-500);
        `;
      case 'title-7-600':
        return css`
          font: var(--Heading-7-600);
        `;
      case 'title-7-500':
        return css`
          font: var(--Heading-7-500);
        `;
      case 'body-1-400':
        return css`
          font: var(--body-1-400);
        `;

      case 'body-1-600':
        return css`
          font: var(--body-1-600);
        `;

      case 'body-2-400':
        return css`
          font: var(--body-2-400);
        `;

      case 'body-2-500':
        return css`
          font: var(--body-2-500);
        `;

      case 'body-3-500':
        return css`
          font: var(--body-3-500);
        `;

      case 'button-big-text':
        return css`
          font: var(--button-big-text);
        `;

      case 'button-medium-text':
        return css`
          font: var(--button-medium-text);
        `;

      case 'input-placeholder':
        return css`
          font: var(--input-placeholder);
        `;

      case 'input-label':
        return css`
          font: var(--input-label);
        `;
      case undefined:
        return css`
          font: var(--body-1-400);
        `;
    }
  }}
`;

export default Text;
