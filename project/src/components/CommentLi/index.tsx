import moment from "moment";
import "moment/locale/pt-br";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "src/context/HomeContext";
import { IComment, IUpdateAndRegisterComment } from "src/interfaces/comments";
import { formatInitialName } from "src/services/helpers";
import { StyledInitialName } from "src/styles/components/StyledInitialName";
import { SlOptionsVertical } from "react-icons/sl";
import CommentStyle from "./style";
import { MainButton } from "src/styles/components/ButtonsLink";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateAndRegisterCommentSchema } from "src/schema/comments";
import { colors } from "src/styles/components/Colors";

interface IProps {
  comment: IComment;
}

const CommentLi = ({ comment }: IProps) => {
  const { user, deleteComment, updateComment } = useContext(HomeContext);
  const [updateMode, setUpdateMode] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [content, setContent] = useState(comment.content);

  const { setValue, handleSubmit } = useForm<IUpdateAndRegisterComment>({
    resolver: yupResolver(updateAndRegisterCommentSchema),
  });

  const onSubmit = (data: IUpdateAndRegisterComment) => {
    updateComment(comment.id, data);
    setUpdateMode(false);
  };

  useEffect(() => {
    if (content !== "") {
      setSubmitDisabled(false);
      setValue("content", content);
      console.log(comment);
    } else {
      setSubmitDisabled(true);
    }
    // eslint-disable-next-line
  }, [content]);

  return (
    <CommentStyle key={comment.id} id={comment.id}>
      <div>
        <div>
          <StyledInitialName w="30" h="30">
            {formatInitialName(comment.user.name)}
          </StyledInitialName>
          <h4>{comment.user.name}</h4>
          <span></span>
          <p>
            {moment(comment.createdAt).locale("pt-br").startOf("day").fromNow()}
          </p>
          {comment.updatedAt !== comment.createdAt && <p>(Editado)</p>}
        </div>
        {user?.id === comment.user.id && (
          <div className="edit-div">
            <button>
              <SlOptionsVertical />
            </button>
            <nav>
              <button
                type="button"
                onClick={() => {
                  setUpdateMode(true);
                }}
              >
                Editar
              </button>
              <button type="button" onClick={() => deleteComment(comment.id)}>
                Deletar
              </button>
            </nav>
          </div>
        )}
      </div>
      {!updateMode ? (
        <p>{comment.content}</p>
      ) : (
        <form className="update-form" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            id="content"
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          ></textarea>
          <div>
            <MainButton
              type="submit"
              disabled={submitDisabled}
              background={colors.brand1}
              backgroundDisabled={colors.brand3}
              textColor={colors.whiteFixed}
              width="49%"
            >
              Editar
            </MainButton>
            <MainButton
              type="button"
              background={colors.grey7}
              width="49%"
              onClick={() => {
                setUpdateMode(false);
              }}
            >
              Cancelar
            </MainButton>
          </div>
        </form>
      )}
    </CommentStyle>
  );
};

export default CommentLi;
