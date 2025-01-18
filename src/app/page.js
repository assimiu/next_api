'use client'; // Necessário no App Router para indicar que este é um componente Client-Side
import NavBar from "./components/navbar/NavBar";
import Main from "./components/conteiner/main/Main";
import Titulo from "./components/titulo/Titulo";
import "./page.css"
export default function Home() {
  return (
    <div className="conteiner-home">
      <NavBar/>
      
      <div className="main">
        <Titulo/>
        <Main/>
      </div>

    </div>
  );
}
