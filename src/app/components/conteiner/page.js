import "./conteiner.css"
import Link from "next/link";
export default function Container({dados}) {

  const substring = (descricao, comprimento) => {
    if (comprimento <= 0 && !descricao)
    {
      return descricao.subString(0, 20) + ". . .Ler mais";
    }
    if (!descricao) {
      return "";
    }
    else if (descricao.length > comprimento)
    {
        const texto = descricao.substring(0, comprimento);
        return texto;
    }
    return descricao;
  }

    return (
        <div className="grid-wrapper">
                {dados.map((item) => (
                    
                    <div key={item["id"]} className={item["size"]}>
                      
                        <Link href={{
                          pathname: "/conteinerview",
                          query: {"imagem": item["imagem"], "titulo": item["titulo"], "descricao": item["descricao"], "tipo": item["tipo"]}
                        }}
                        className="item">
                            {item["imagem"] ? <img src={item["imagem"]} alt="" /> : <p></p>}
                            
                            <h3>{substring(item["titulo"], 20)}</h3>
                            <p className="descricao">{substring(item["descricao"], 120)} {<strong>. . . Ler mais</strong>}</p>
                            <p className="tipo">{item["tipo"]}</p>
                        </Link>
                    </div>
                ))}
            </div>
        
    );
}








/*



export default function Main() {
  return (
    <div className="conteiner-main">
      <div className="destaque">
        <div className="destaque-item1">
          <Card
            imagem="/img/img.jpg"
            descricao="Destaque principal"
          />
        </div>

        <div className="destaque-item2">
          <div className="destaque-item2-1">
            <Card
              imagem="/img/img.jpg"
              descricao="Destaque superior"
            />
          </div>

          <div className="destaque-item2-2">
            <div>
              <Card
                imagem="/img/img.jpg"
                descricao="Primeiro card"
              />
            </div>
            <div>
              <Card
                imagem="/img/img.jpg"
                descricao="Segundo card"
              />
            </div>
          </div>
        </div>

        <div className="destaque-item3">
          <div className="destaque-item3-1">
            <Card
              imagem="/img/img.jpg"
              descricao="Destaque inferior esquerdo"
            />
          </div>

          <div className="destaque-item3-2">
            <Card
              imagem="/img/img.jpg"
              descricao="Destaque inferior direito"
            />
          </div>
        </div>
      </div>

      <div className="cultura">
        <Card
          imagem="/img/img.jpg"
          descricao="Cultura em destaque"
        />
      </div>

      <div className="venda">
        <Card
          imagem="/img/img.jpg"
          descricao="Promoções imperdíveis"
        />
      </div>
    </div>
  );
}
*/