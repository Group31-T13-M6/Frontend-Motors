import { isImageUrl } from "src/services/helpers";
import LiS from "./styled";

export interface iImagemProps {
  image: {
    position: number;
    url: string;
    id: string;
  };
  callOpenModal: (info: string) => void;
}

const ImagemItem = ({ image, callOpenModal }: iImagemProps) => {
  return (
    <LiS onClick={() => callOpenModal(image.url)}>
      <img
        src={
          isImageUrl(image.url) ||
          "https://static.thenounproject.com/png/340719-200.png"
        }
        alt={`Imagem Product ${image.position}`}
      />
    </LiS>
  );
};

export default ImagemItem;
