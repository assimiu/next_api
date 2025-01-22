import "./titulo.css"

export default function Titulo({titulo}) {

    return (
        <div className="conteiner-titulo">
            <h3>{titulo ? titulo : "Destaques"}</h3>
        </div>
    );
}