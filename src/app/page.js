'use client'; // Necessário no App Router para indicar que este é um componente Client-Side
import NavBar from "./components/navbar/NavBar";
import Main from "./components/conteiner/main/Main";
export default function Home() {
  return (
    <div >
      <NavBar/>
      
      <div style={{marginTop: "35px", marginLeft: "8px", marginRight: "8px"}}>
        <Main/>

      </div>

    </div>
  );
}
