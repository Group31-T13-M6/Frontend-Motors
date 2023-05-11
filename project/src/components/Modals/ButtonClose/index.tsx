import Text from "src/styles/typography";
import { StyledButtonClose } from "./style";

interface IButtonModalCloseProps {
  title: string;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonModalClose = ({ title, setState }: IButtonModalCloseProps) => {
  const handleClose = () => setState(false);
  return (
    <StyledButtonClose>
      <Text fontSize="title-7-500">{title}</Text>
      <button onClick={handleClose}>X</button>
    </StyledButtonClose>
  );
};

export default ButtonModalClose;
