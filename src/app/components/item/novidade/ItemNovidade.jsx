/*import Image from "next/image";
import "./itemNovidade.css"

export default function ItemNovidade({largura}) {

    return (
        <div className="conteiner-novidade" style={{width: largura}}>
            <Image className="imagem" src="/img/img.jpg" alt="imagem" width={largura-30} height={largura/1.334}/>
            <div className="conteiner-info">
                <h3 className="titulo">Ziara Quebo 12-01-2025</h3>
                <p className="descricao">A ziara occorreu no dia 12 do mes de janeiro de 2025</p>
            </div>
        </div>
    );
}*/

import Image from "next/image";
import "./itemNovidade.css";

export default function ItemNovidade({ largura }) {
    return (
        <div className="container-novidade" style={{ maxWidth: largura }}>
            <Image 
                className="image" 
                src="/img/img.jpg" 
                alt="Imagem de Novidade" 
                width={largura - 30} 
                height={largura / 1.334} 
                priority 
            />
            <div className="container-info">
                <h3 className="title">Ziara Quebo 12-01-2025</h3>
                <p className="description">
                    A ziara ocorreu no dia 12 do mês de janeiro de 2025.
                </p>
            </div>
        </div>
    );
}
