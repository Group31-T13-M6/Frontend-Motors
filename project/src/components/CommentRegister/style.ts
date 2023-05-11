import { colors } from "src/styles/components/Colors";
import styled from "styled-components";

const CommentRegisterContainer = styled.section`
  background: var(--grey10);
  border-radius: 4px;
  width: 100%;
  padding: 2rem 0;
  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .info-user {
    width: 90%;
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${colors.grey1};

    font: var(--body-2-500);
  }
`;

export default CommentRegisterContainer;
