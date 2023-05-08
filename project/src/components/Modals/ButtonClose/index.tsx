import Text from "src/styles/typography";
import { StyledButtonClose } from "./style";

const ButtonModalClose = ({ title, setState }: any) => {
  const handleClose = () => setState(false);
  return (
    <StyledButtonClose>
      <Text fontSize="title-7-500">{title}</Text>
      <button onClick={handleClose}>X</button>
    </StyledButtonClose>
  );
};

export default ButtonModalClose;
