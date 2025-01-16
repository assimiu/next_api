'use client'; // Necessário no App Router para indicar que este é um componente Client-Side
import NavBar from "./components/navbar/NavBar";
import Main
 from "./components/conteiner/main/Main";
import ItemNovidade from "./components/item/novidade/ItemNovidade";
export default function Home() {
  return (
    <div >
      <NavBar/>
      <ItemNovidade largura={800}/>

    </div>
  );
}
