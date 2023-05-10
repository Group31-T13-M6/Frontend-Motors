import moment from "moment";
import "moment/locale/pt-br";
import { IComment } from "src/interfaces/comments";
import CommentsContainer from "./style";
import { StyledInitialName } from "src/styles/components/StyledInitialName";
import { formatInitialName } from "src/services/helpers";
import { SlOptionsVertical } from "react-icons/sl";
import { useContext } from "react";
import { HomeContext } from "src/context/HomeContext";

interface IProps {
  comments: IComment[];
}

const CommentsList = ({ comments }: IProps) => {
  const { user, deleteComment } = useContext(HomeContext);
  return (
    <CommentsContainer>
      <h3>Comentários</h3>
      <ul>
        {comments ? (
          comments.map((comment) => {
            return (
              <li key={comment.id} id={comment.id}>
                <div>
                  <div>
                    <StyledInitialName w="30" h="30">
                      {formatInitialName(comment.user.name)}
                    </StyledInitialName>
                    <h4>{comment.user.name}</h4>
                    <span></span>
                    <p>
                      {moment(comment.createdAt)
                        .locale("pt-br")
                        .startOf("day")
                        .fromNow()}
                    </p>
                  </div>
                  {user?.id === comment.user.id && (
                    <div className="edit-div">
                      <button>
                        <SlOptionsVertical />
                      </button>
                      <nav>
                        <button type="button">Editar</button>
                        <button
                          type="button"
                          onClick={() => {
                            deleteComment(comment.id);
                          }}
                        >
                          Deletar
                        </button>
                      </nav>
                    </div>
                  )}
                </div>
                <p>{comment.content}</p>
              </li>
            );
          })
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </ul>
    </CommentsContainer>
  );
};

export default CommentsList;
