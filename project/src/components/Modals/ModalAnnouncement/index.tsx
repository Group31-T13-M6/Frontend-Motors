import { IProvider } from "src/interfaces/contextApi";
import { StyledModalContainer } from "./style";
import Modal from "react-modal";

interface IModalAnnouncementProps {
  open: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalAnnouncement = ({ open, setOpenModal }: IModalAnnouncementProps) => {
  const handleClose = () => setOpenModal(false);
  return (
    <StyledModalContainer>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Any modal"
      >
        <div>hello world</div>

        <button onClick={handleClose}>Fechar</button>
      </Modal>
    </StyledModalContainer>
  );
};

export default ModalAnnouncement;
