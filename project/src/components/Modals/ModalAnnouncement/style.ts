import styled from "styled-components";
import Modal from "react-modal";

const customStylesAnnouncement = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "480px",
    width: "95%",
    height: "95%",
    overflow: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "100",
  },
};

const StyledModalAnnouncement = styled.form`
  max-width: 480px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  label {
    font: var(--input-label);
  }
`;

const StyledSelectAnnouncement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  select,
  input,
  textarea {
    border: 1px solid var(--grey4);
    padding: 0.7rem 0.5rem;
    border-radius: 4px;
    width: 100%;
  }

  textarea {
    resize: none;
    height: 84px;
    padding: 0.5rem;
  }
`;

const StyledSectionAnnouncement = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const StyledActionsButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    background-color: var(--brand4);
    color: var(--brand1);
    padding: 0.5rem;
    border-radius: 4px;
    font: var(--button-medium-text);
  }
`;

const StyledActionsButtons2 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.3rem;

  button {
    font: var(--button-big-text);
    padding: 0.85rem;
    border-radius: 4px;
    width: 100%;
  }

  button:nth-child(1) {
    background-color: var(--grey6);
    color: var(--grey2);
    width: 70%;
  }

  button:nth-child(2) {
    background-color: var(--brand1);
    color: white;
  }
`;

export {
  StyledModalAnnouncement,
  StyledSelectAnnouncement,
  StyledSectionAnnouncement,
  StyledActionsButtons,
  StyledActionsButtons2,
  customStylesAnnouncement,
};
