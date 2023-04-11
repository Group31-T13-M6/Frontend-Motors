import LiS from "./styled";

export interface iImagemProps {
  image: {
    position: number;
    url: string;
    id: string;
  };
}

const ImagemItem = ({ image }: iImagemProps) => {
  return (
    <LiS>
      <img src={image.url} alt={`Imagem Product ${image.position}`} />
    </LiS>
  );
};

export default ImagemItem;
