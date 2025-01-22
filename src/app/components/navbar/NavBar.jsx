import { useState } from "react";
import "./navBar.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar({ imagem, titulo, itens }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <nav className="container-nav-bar">
            <div className="container-logo">
                <Image
                    className="logo"
                    src={imagem ? imagem : "/logos/logstore.png"}
                    alt="GuineStore"
                    width={70}
                    height={60}
                />
                <h4 className="title-logo">
                    <a href="/">GuinéStore</a>
                </h4>
            </div>

            {/* Botão Hambúrguer */}
            <button
                className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
            >
                {isMenuOpen ? "✖" : "☰"}
            </button>

            {itens ? (
                itens
            ) : (
                <ul className={`nav-bar ${isMenuOpen ? "open" : ""}`}>
                    <li><Link href="/hom">Início</Link></li>
                    <li><Link href="/home">NovidLinkde</Link></li>
                    <li><Link href="/">Seção</Link></li>
                    <li><Link href="/">Sobre</Link></li>
                    <li><Link href="/">ContLinkto</Link></li>
                </ul>
            )}
        </nav>
    );
}

