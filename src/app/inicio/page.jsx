import NavBar from "../components/navbar/NavBar";
import Container from "../components/conteiner/page";
import Titulo from "../components/titulo/Titulo";

import "./inicio.css"

export default function Inicio() {

  const data = [
    {"id":"4","tipo": "cultura", "titulo":"Ziara quebo 2025", "size":"big", "imagem": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
    {"id":"1","tipo":"desporto", "titulo":"Ziara quebo 2025", "size":"big", "imagem": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
    {"id":"3","tipo":"politica", "titulo":"Ziara quebo 2025", "size":"wide", "imagem": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
    {"id":"2","tipo": "ciencia", "titulo":"Ziara quebo 2025", "size":"wide", "imagem": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
    {"id":"5","tipo":"fofoca", "titulo":"Ziara quebo 2025", "size":"wide", "imagem": "", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
  ];

  return (
    <div className="conteiner-home">
      <NavBar/>
      
      <div className="main">
        <Titulo/>
        <Container dados={data}/>
      </div>

    </div>
  );
}
