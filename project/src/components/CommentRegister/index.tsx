import { StyledInitialName } from "src/styles/components/StyledInitialName";
import CommentRegisterContainer from "./style";
import { formatInitialName } from "src/services/helpers";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "src/context/HomeContext";
import { MainButton, OptionsButton } from "src/styles/components/ButtonsLink";
import { colors } from "src/styles/components/Colors";
import { CreateComment } from "src/styles/components/CommentsComponents";
import { useForm } from "react-hook-form";
import { IUpdateAndRegisterComment } from "src/interfaces/comments";
import { updateAndRegisterCommentSchema } from "src/schema/comments";
import { yupResolver } from "@hookform/resolvers/yup";

const CommentRegister = () => {
  const { user, postComment } = useContext(HomeContext);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [content, setContent] = useState("");

  const { setValue, handleSubmit } = useForm<IUpdateAndRegisterComment>({
    resolver: yupResolver(updateAndRegisterCommentSchema),
  });

  const clickOptions = (event: any) => {
    setContent(event.target.innerText);
  };

  useEffect(() => {
    if (content !== "") {
      setSubmitDisabled(false);
      setValue("content", content);
    } else {
      setSubmitDisabled(true);
    }
    // eslint-disable-next-line
  }, [content]);

  return (
    <CommentRegisterContainer>
      {user && (
        <div className="info-user">
          <StyledInitialName w="30" h="30">
            {formatInitialName(user?.name)}
          </StyledInitialName>
          <h4>{user?.name}</h4>
        </div>
      )}
      <CreateComment>
        <form onSubmit={handleSubmit(postComment)}>
          <textarea
            id="content"
            cols={30}
            rows={10}
            value={content}
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
            onChange={(event) => {
              setContent(event.target.value)
            }}
          ></textarea>
          <MainButton
            type="submit"
            background={colors.brand1}
            backgroundDisabled={colors.grey5}
            textColor={colors.whiteFixed}
            width="108px"
            disabled={submitDisabled}
          >
            Comentar
          </MainButton>
        </form>
        <div>
          <OptionsButton
            type="button"
            onClick={(event) => {
              clickOptions(event);
            }}
          >
            Gostei muito!
          </OptionsButton>
          <OptionsButton
            type="button"
            onClick={(event) => {
              clickOptions(event);
            }}
          >
            Incrível
          </OptionsButton>
          <OptionsButton
            type="button"
            onClick={(event) => {
              clickOptions(event);
            }}
          >
            Recomendarei para meus amigos!
          </OptionsButton>
        </div>
      </CreateComment>
    </CommentRegisterContainer>
  );
};

export default CommentRegister;
