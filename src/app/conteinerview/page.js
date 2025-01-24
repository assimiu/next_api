"use client";
import { useSearchParams } from "next/navigation";
import "./conteinerview.css";
import NavBar from "../components/navbar/NavBar";

export default function Handler() {
    const parametro = useSearchParams();
    const imagem = parametro.get("imagem");
    const titulo = parametro.get("titulo");
    const descricao = parametro.get("descricao");
    const tipo = parametro.get("tipo");

    return (
        <div className="conteiner-view">
            <NavBar />
            <div className="card-view">
                <img src={imagem} alt={titulo} className="card-image" />
                <div className="card-content">
                    <h3 className="card-title">{titulo}</h3>
                    <p className="card-description">{descricao}</p>
                    <span className={`card-type ${tipo.toLowerCase()}`}>{tipo}</span>
                </div>
            </div>
            
        </div>
    );
}
