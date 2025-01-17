import { useState } from "react";
import "./navBar.css";
import Image from "next/image";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="container-nav-bar">
            <div className="container-logo">
                <Image
                    className="logo"
                    src="/logos/logstore.png"
                    alt="GuineStore"
                    width={70}
                    height={60}
                />
                <h4 className="title-logo">
                    <a href="/">GuinéStore</a>
                </h4>
            </div>

            <button className="hamburger-menu" onClick={toggleMenu}>
                ☰
            </button>

            <ul className={`nav-bar ${isMenuOpen ? "open" : ""}`}>
                <li><a href="/">Início</a></li>
                <li><a href="/">Novidade</a></li>
                <li><a href="/">Seção</a></li>
                <li><a href="/">Sobre</a></li>
                <li><a href="/">Contato</a></li>
            </ul>
        </nav>
    );
}
