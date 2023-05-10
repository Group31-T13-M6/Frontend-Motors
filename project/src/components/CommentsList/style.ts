import { colors } from "src/styles/components/Colors";
import styled from "styled-components";

const CommentsContainer = styled.section`
  background-color: var(--grey10);
  border-radius: 4px;
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  padding-bottom: 2rem;

  h3 {
    font: var(--Heading-6-600);
    color: var(--grey1);
    width: 100%;

    margin-top: 40px;
    padding-left: 44px;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 44px;
    gap: 1rem;

    li {
      width: 100%;
      padding: .5rem 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      div {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        div {
          width: 100%;
          display: flex;
          align-items: center;

          gap: 0.5rem;

          h4 {
            font: var(--body-2-500);
          }

          span {
            width: 5px;
            height: 5px;
            background: var(--grey4);
            border-radius: 50%;
          }

          p {
            color: var(--grey4);
          }
        }

        p {
          color: var(--grey2);
          font: var(--body-2-400);
        }
      }

      & > p:last-child {
        width: 100%;
        text-align: start;
        color: var(--grey2);
        font: var(--body-2-400);
      }
    }

    .edit-div {
      position: relative;
      width: auto;
      padding: 0 5px;
      button {
        background: transparent;
      }
      nav {
        display: none;
      }

      &:focus,
      :hover {
        nav {
          position: absolute;
          right: 1.1rem;
          top: -2px;

          width: 8rem;
          height: 3.5rem;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;

          background: var(--grey10);
          border: var(--grey7) 2px solid;
          font: var(--body-1-600);

          button:first-child:is(:hover, :focus) {
            color: ${colors.success1};
            transition: 0.3s;
            transform: scale(1.01);
          }

          button:last-child:is(:hover, :focus) {
            color: ${colors.alert1};
            transition: 0.3s;
            transform: scale(1.01);
          }
        }
      }
    }
  }
`;

export default CommentsContainer;
