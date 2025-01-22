'use client'; // Necessário no App Router para indicar que este é um componente Client-Side
import NavBar from "./components/navbar/NavBar";
import Main from "./components/conteiner/main/Main";
import Titulo from "./components/titulo/Titulo";
import "./page.css"
export default function Home() {


  const data = [
    {"id":"4","tipo": "cultura", "size":"big", "image": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
    {"id":"1","tipo":"desporto", "size":"big", "image": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
    {"id":"3","tipo":"politica", "size":"wide", "image": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
    {"id":"2","tipo": "ciencia", "size":"wide", "image": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
    {"id":"5","tipo":"fofoca", "size":"wide", "image": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
  ];

  return (
    <div className="conteiner-home">
      <NavBar/>
      
      <div className="main">
        <Titulo/>
        <Main dados={data}/>
      </div>

    </div>
  );
}
