import useOutClick from "src/hooks/UseOutClick";
import Text from "src/styles/typography";
import AsideS from "./styled";

interface iProps {
  outClick: boolean;
  setOutClick: React.Dispatch<React.SetStateAction<boolean>>;
  infoModal: { img: string };
}

const ModalImagens = ({ outClick, setOutClick, infoModal }: iProps) => {
  const modalRef = useOutClick(() => setOutClick(false));
  return (
    <>
      {outClick && (
        <AsideS>
          <div ref={modalRef}>
            <div>
              <Text tag="h6" fontSize="title-7-500" color="grey1">
                Imagens do veículo
              </Text>
              <button onClick={() => setOutClick(false)}>X</button>
            </div>
            <div>
              <img src={infoModal.img} alt="Imagem do veículo" />
            </div>
          </div>
        </AsideS>
      )}
    </>
  );
};

export default ModalImagens;
