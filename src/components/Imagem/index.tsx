import style from './style.module.css';
import semImagem from './sem-imagem.jpg';

interface ImagemProps {
  caminho?: string,
  texto?: string,
}

function Imagem({ caminho, texto }: ImagemProps) {
  return (
    <img
      src={caminho || semImagem}
      alt={texto}
      title={texto}
      className={style["imagem-na-grade"]}
    />
  );
}

export default Imagem;
