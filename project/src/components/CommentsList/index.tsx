import { IComment } from "src/interfaces/comments";
import CommentsContainer from "./style";
import CommentLi from "../CommentLi";

interface IProps {
  comments: IComment[];
}

const CommentsList = ({ comments }: IProps) => {
  return (
    <CommentsContainer>
      <h3>Comentários</h3>
      <ul>
        {comments ? (
          comments.map((comment) => {
            return <CommentLi comment={comment} />;
          })
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </ul>
    </CommentsContainer>
  );
};

export default CommentsList;
