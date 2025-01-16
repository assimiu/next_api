import "./navBar.css"
import Image from "next/image";
export default function NavBar() {
    return (
        <div className="conteiner-nav-bar">
            <div className="conteiner-logo">
                <Image className="logo" src="/logos/logstore.png" alt="GuineStore" width={70} height={60}/>
                <h4 className="titulo-logo"><a href="/">GuinéStore</a></h4>
            </div>
            
            <ul className="nav-bar">
                <li><a href="/">Início</a></li>
                <li><a href="/">Novidade</a> </li>
                <li><a href="/">Seccao</a></li>
                <li><a href="/">Sobre</a></li>
                <li><a href="/">Contacto</a></li>
            </ul>
            
        </div>
    );
}