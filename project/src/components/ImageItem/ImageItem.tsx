import LiS from './styled';

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
            <img src={image.url} alt={`Imagem Product ${image.position}`} />
        </LiS>
    );
};

export default ImagemItem;
