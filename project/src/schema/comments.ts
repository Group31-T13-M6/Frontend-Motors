import * as yup from "yup";

export const updateAndRegisterCommentSchema = yup.object().shape({
  content: yup.string().required(),
});


