import Image from "next/image";
import "./Card.css";

export default function Card({ imagem, descricao }) {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={imagem}
          alt="Imagem do card"/>
      </div>
      <div className="card-descricao">
        <p>{descricao}</p>
      </div>
    </div>
  );
}